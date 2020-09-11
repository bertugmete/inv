import React from "react"
import { connect } from "react-redux"
import { Grid, CircularProgress } from "@material-ui/core"

class Loader extends React.Component {
  render() {
    let { showLoader } = this.props
    return showLoader ? (
      <Grid
        container
        item
        justify="center"
        alignItems="center"
        style={{ position: "absolute", height: "100%", zIndex: 1 }}
      >
        <CircularProgress />
      </Grid>
    ) : null
  }
}

const mapStateToProps = (state) => {
  return {
    showLoader: state.showLoader,
  }
}

export default connect(mapStateToProps)(Loader)
