export interface CountryItem {
  name: string
  languages: {
    name: string
  }[]
  region: string
  currencies: {
    name: string
    code: string
  }[]
  alpha2Code: string
}
