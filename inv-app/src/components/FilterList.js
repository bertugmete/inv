import React from "react"
import Grid from "@material-ui/core/Grid"
import FilterItem from "./FilterItem"

class FilterList extends React.Component {
  render() {
    let { onChange } = this.props
    return (
      <Grid {...this.props}>
        <FilterItem type="color" title="Renk" onChange={onChange} />
        <FilterItem type="size" title="Size" onChange={onChange} />
        <FilterItem type="price" title="Fiyat Aralığı" onChange={onChange} />
      </Grid>
    )
  }
}

export default FilterList
