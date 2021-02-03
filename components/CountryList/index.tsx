import Country from "@components/CountryListItem"
import { CountryItem } from "dtos/country.dto"
import { CountryListContent } from "./styles"

interface CountryList {
  countries: CountryItem[]
}

const CountryList = ({ countries }: CountryList) => {
  return (
    <CountryListContent>
      {countries &&
        countries.map((c) => (
          <Country
            key={c.alpha2Code}
            name={c.name}
            alpha2Code={c.alpha2Code}
            languages={c.languages}
            currencies={c.currencies}
            region={c.region}
          />
        ))}
    </CountryListContent>
  )
}

export default CountryList
