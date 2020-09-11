import React from "react"
import PropTypes from "prop-types"
import { FILTER_MENU } from "../constants"
import { Checkbox, FormControlLabel, Box, FormControl, FormLabel } from "@material-ui/core"

export default function FilterItem({ type, handleCheckboxChange, title }) {
  const filterItem = FILTER_MENU[type].map((filter, index) => {
    return (
      <FormControlLabel
        key={index}
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
    <Box p={3}>
      <Box borderBottom={1}>
        <FormControl component="fieldset">
          {filterItem}
          <FormLabel component="legend">{title}</FormLabel>
        </FormControl>
      </Box>
    </Box>
  )
}

FilterItem.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  onChange: PropTypes.func,
}
