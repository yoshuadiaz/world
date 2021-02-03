import { gql } from "@apollo/client"
import Layout from "@components/Layout"
import { client } from "graphql/client"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"
import {
  CountryName,
  CountryInfo,
  CountryInfoItem,
} from "@components/CountryDetail/styles"

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      {
        Country {
          alpha2Code
        }
      }
    `,
  })
  return {
    paths: data.Country.map((c) => ({
      params: {
        code: `${c.alpha2Code.toLowerCase()}`,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: gql`
      query Country($alpha2Code: String) {
        Country(alpha2Code: $alpha2Code) {
          flag {
            emoji
          }
          officialLanguages {
            _id
            name
            nativeName
            iso639_1
          }
          name
          nativeName
          capital
          demonym
          population
          gini
          callingCodes {
            name
          }
          topLevelDomains {
            name
          }
          currencies {
            code
            name
          }
          location {
            latitude
            longitude
          }
          convertedArea {
            value
            unit
            populationDensity
          }
          timezones {
            name
          }
          subregion {
            name
            region {
              name
            }
          }
        }
      }
    `,
    variables: {
      alpha2Code: params.code.toUpperCase(),
    },
  })

  return {
    props: { country: data.Country[0] },
  }
}

const CountryPage = (props) => {
  const router = useRouter()
  const { code } = router.query
  const {
    flag,
    name,
    nativeName,
    location: { latitude, longitude },
    officialLanguages,
    capital,
    demonym,
    population,
    convertedArea,
    timezones,
    subregion,
    gini,
    currencies,
    callingCodes,
    topLevelDomains,
  } = props.country

  const MapWithNoSSR = dynamic(() => import("@components/Map"), {
    ssr: false,
  })

  return (
    <Layout>
      <MapWithNoSSR latitude={latitude} longitude={longitude} />
      <CountryName>
        {flag.emoji} {name} ({nativeName})
      </CountryName>
      <CountryInfo>
        {capital && (
          <CountryInfoItem>
            <span>Capital: </span> {capital}
          </CountryInfoItem>
        )}
        {demonym && (
          <CountryInfoItem>
            <span>Demonym: </span> {demonym}
          </CountryInfoItem>
        )}
        {subregion && (
          <CountryInfoItem>
            <span>Region: </span> {subregion.region.name}
          </CountryInfoItem>
        )}
        {subregion && (
          <CountryInfoItem>
            <span>Subregion: </span> {subregion.name}
          </CountryInfoItem>
        )}
      </CountryInfo>
      <hr />
      <h3>Population:</h3>
      <p>{population.toLocaleString()}</p>
      {gini && <p>Gini: {gini}</p>}
      <p>
        <small>
          <strong>Covered area:</strong>
        </small>{" "}
        {convertedArea.value} KM |{" "}
      </p>
      <p>
        <small>
          <strong>Population Density:</strong>
        </small>{" "}
        {convertedArea.populationDensity} abitants per{" "}
        {convertedArea.unit.toLocaleString("en-US")}
      </p>
      <h3>Timezones</h3>
      <ul>
        {timezones.map((t) => (
          <li>{t.name}</li>
        ))}
      </ul>
      <h3>Official Languages</h3>
      <ul>
        {officialLanguages.map((c) => (
          <li key={c._id}>
            {c.name} ({c.nativeName})
          </li>
        ))}
      </ul>
      <h3>Currencies</h3>
      <ul>
        {currencies.map((c) => (
          <li>
            {c.code} | {c.name}
          </li>
        ))}
      </ul>
      <h3>Comunications</h3>
      <h4>Calling codes</h4>
      <ul>
        {callingCodes.map((c) => (
          <li>{c.name}</li>
        ))}
      </ul>
      <h4>Top Level Domains</h4>
      <ul>
        {topLevelDomains.map((c) => (
          <li key={c._id}>{c.name}</li>
        ))}
      </ul>
    </Layout>
  )
}

export default CountryPage
