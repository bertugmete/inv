import React from "react"
import { Grid, CircularProgress } from "@material-ui/core"

export default function Loader() {
  return (
    <Grid
      container
      item
      justify="center"
      alignItems="center"
      style={{ position: "absolute", height: "100%" }}
    >
      <CircularProgress />
    </Grid>
  )
}
