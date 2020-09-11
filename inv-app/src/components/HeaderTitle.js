import React from "react"
import PropTypes from "prop-types"
import { Grid, Typography } from "@material-ui/core"

export default function HeaderTitle({ title }) {
  return (
    <Grid container item direction="row" justify="center" alignItems="center">
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
    </Grid>
  )
}

HeaderTitle.propTypes = {
  title: PropTypes.string,
}
