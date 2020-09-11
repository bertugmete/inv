import React from "react"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"
import FilterItem from "./FilterItem"
import { FILTER_TYPES } from "../constants"

export default function FilterList(props) {
  const { onChange } = props
  return (
    <Grid {...props}>
      <FilterItem
        type={FILTER_TYPES.color.name}
        title={FILTER_TYPES.color.title}
        onChange={onChange}
      />
      <FilterItem
        type={FILTER_TYPES.size.name}
        title={FILTER_TYPES.size.title}
        onChange={onChange}
      />
      <FilterItem
        type={FILTER_TYPES.price.name}
        title={FILTER_TYPES.price.title}
        onChange={onChange}
      />
    </Grid>
  )
}

FilterItem.propTypes = {
  onChange: PropTypes.func,
}
