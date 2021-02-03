import CountryList from "@components/CountryList"
import Layout from "@components/Layout"
import { client } from "graphql/client"
import { gql } from "@apollo/client"
import { useEffect, useState } from "react"
import { Filter } from "dtos/filter.dto"

const prepareCountries = (countries) =>
  countries.map((c) => ({
    name: c.name,
    currencies: c.currencies,
    languages: c.officialLanguages,
    region: c.subregion?.region?.name,
    alpha2Code: c.alpha2Code,
  }))
export default function Home(props) {
  const rawContries = prepareCountries(props.Country)
  const [search, setSearch] = useState("")
  const [languages, setLanguages] = useState("")
  const [currency, setCurrency] = useState("")
  const [region, setRegion] = useState("")
  const [countries, setCountries] = useState(rawContries)

  const filters: Filter[] = [
    {
      name: "language",
      label: "Language",
      placeholder: "Filter by language",
      handleSelect: setLanguages,
      value: languages,
      options: props.Language,
    },
    {
      name: "currency",
      label: "Currency",
      placeholder: "Filter by Currency",
      handleSelect: setCurrency,
      value: currency,
      options: props.Currency,
    },
    {
      name: "region",
      label: "Region",
      placeholder: "Filter by Region",
      handleSelect: setRegion,
      value: region,
      options: props.Region,
    },
  ]

  useEffect(() => {
    client
      .query({
        query: gql`
          query CountrySearch(
            $alpha2Code: String
            $name: String
            $language: String
            $region: String
            $currency: String
          ) {
            Country(
              filter: {
                OR: [
                  { name_contains: $name }
                  { alpha2Code_contains: $alpha2Code }
                ]
                AND: [
                  { officialLanguages_in: { name_contains: $language } }
                  { subregion: { region: { name_contains: $region } } }
                  { currencies: { name_contains: $currency } }
                ]
              }
            ) {
              _id
              name
              alpha2Code
              officialLanguages {
                _id
                name
              }
              subregion {
                region {
                  _id
                  name
                }
              }
              currencies {
                _id
                name
                code
              }
            }
          }
        `,
        variables: {
          alpha2Code: search,
          name: search,
          language: languages,
          region: region,
          currency: currency,
        },
      })
      .then(({ data }) => setCountries(prepareCountries(data.Country)))
  }, [search, languages, currency, region])

  return (
    <Layout
      sidebar={{ searchValue: search, handleOnSearch: setSearch, filters }}
    >
      {!search && <h2>Countries</h2>}
      {search && <h2> Searching: {search}</h2>}
      <main>
        <CountryList countries={countries} />
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        Country {
          _id
          name
          alpha2Code
          officialLanguages {
            _id
            name
          }
          subregion {
            region {
              _id
              name
            }
          }
          currencies {
            _id
            name
            code
          }
        }
        Language {
          _id
          name
        }
        Currency {
          _id
          name
          code
        }
        Region {
          _id
          name
        }
      }
    `,
  })
  return {
    props: {
      ...data,
    },
  }
}
