import { Filter } from "dtos/filter.dto"
import {
  SidebarNav,
  SidebarFilter,
  SidebarSearch,
  SidebarContent,
} from "./styles"

interface SidebarProps {
  searchValue: string
  handleOnSearch: (value: string) => void
  filters: Filter[]
}

const Sidebar = (props: SidebarProps) => {
  const { searchValue, handleOnSearch, filters } = props
  return (
    <SidebarNav>
      <SidebarContent>
        <h3>Search</h3>
        <SidebarSearch
          type="search"
          value={searchValue}
          onChange={(e) => handleOnSearch(e.target.value)}
          placeholder="Search by name or code"
        />
        <h3>Filters</h3>

        {filters &&
          filters.length > 0 &&
          filters.map((filter) => (
            <SidebarFilter key={filter.name}>
              <label htmlFor={filter.name}>{filter.label}</label>
              <select
                id={filter.name}
                onChange={(e) => filter.handleSelect(e.target.value)}
              >
                <option value="">Select some option</option>
                {filter.options &&
                  filter.options.map((o) => (
                    <option key={`${filter.name}-${o._id}`} value={o.name}>
                      {`${o.code ? `${o.code} | ${o.name}` : o.name}`}
                    </option>
                  ))}
              </select>
            </SidebarFilter>
          ))}
      </SidebarContent>
    </SidebarNav>
  )
}

export default Sidebar
