export interface Filter {
  name: string
  label: string
  placeholder: string
  handleSelect(id: string): void
  value: string
  options: {
    name: string
    _id: string
    code?: string
  }[]
}
