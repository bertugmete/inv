import React from "react"
import { connect } from "react-redux"
import { Container, Grid, Box } from "@material-ui/core"
import ItemCard from "../components/ItemCard"
import ProductNotFound from "./ProdutNotFound"
import HeaderTitle from "./HeaderTitle"
import { HEADER } from "../constants"

function Cart({ addedItems }) {
  return (
    <Box mt={10}>
      <Container maxWidth="lg">
        <HeaderTitle title={HEADER.cart} />
        {addedItems.length > 0 ? (
          <Grid container>
            <ItemCard items={addedItems} />
          </Grid>
        ) : (
          <Grid container item direction="row" justify="center" alignItems="center">
            <ProductNotFound />
          </Grid>
        )}
      </Container>
    </Box>
  )
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
  }
}
export default connect(mapStateToProps)(Cart)
