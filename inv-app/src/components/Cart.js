import React from "react"
import { connect } from "react-redux"
import { Container, Grid } from "@material-ui/core"
import ItemCard from "../components/ItemCard"
class Cart extends React.Component {
  render() {
    let { addedItems } = this.props
    return (
      <Container maxWidth="lg">
        <Grid container spacing={12}>
          <ItemCard items={addedItems} />
        </Grid>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
  }
}
export default connect(mapStateToProps)(Cart)
