import React from "react"
import { FILTER_MENU } from "../constants"
import { Checkbox, FormControlLabel, Box } from "@material-ui/core"
import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"

class FilterItem extends React.Component {
  render() {
    let { type, handleCheckboxChange, title } = this.props
    let filterItem = FILTER_MENU[type].map((filter) => {
      return (
        <FormControlLabel
          control={
            <Checkbox
              name={filter.label}
              color="primary"
              onChange={handleCheckboxChange}
              value={filter.type}
            />
          }
          label={filter.label}
        />
      )
    })
    return (
      <Box p={2}>
        <Box borderBottom={1}>
          <FormControl component="fieldset">
            {filterItem}
            <FormLabel component="legend">{title}</FormLabel>
          </FormControl>
        </Box>
      </Box>
    )
  }
}

export default FilterItem
