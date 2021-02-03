import { ROUTES } from "../../constants"
import { CountryItem } from "dtos/country.dto"
import {
  CountryWrapper,
  CountryName,
  CountryCode,
  CountryInfo,
  CountryData,
  CountryDataLabel,
  CountryLink,
} from "./styles"

interface CountryProps extends CountryItem {}
const Country = ({
  name,
  languages,
  region,
  currencies,
  alpha2Code,
}: CountryProps) => {
  return (
    <CountryLink href={`${ROUTES.CONTRY_DETAIL}/${alpha2Code.toLowerCase()}`}>
      <CountryWrapper>
        <CountryName>{name}</CountryName>
        <CountryCode>{alpha2Code}</CountryCode>
        <CountryInfo>
          <CountryData>
            <CountryDataLabel>Language </CountryDataLabel>
            {languages.map((n) => n.name).join(", ")}
          </CountryData>
          <CountryData>
            <CountryDataLabel>Region </CountryDataLabel>
            {region}
          </CountryData>
          <CountryData>
            <CountryDataLabel>Currency </CountryDataLabel>
            {currencies.map((n) => `${n.name} (${n.code})`).join(", ")}
          </CountryData>
        </CountryInfo>
      </CountryWrapper>
    </CountryLink>
  )
}

export default Country
