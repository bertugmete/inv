import React from "react"
import { connect } from "react-redux"
import { Container, Grid, Box } from "@material-ui/core"
import ItemCard from "../components/ItemCard"
import ProductNotFound from "./ProdutNotFound"
import HeaderTitle from "./HeaderTitle"
import { HEADER } from "../constants"
import { removeFromCart, showLoader, hideLoader } from "./actions/cartActions"

class Cart extends React.Component {
  handleOnClik = (id) => {
    this.props.showLoader()

    setTimeout(() => {
      this.props.removeFromCart(id)
      this.props.hideLoader()
    }, 1000)
  }

  render() {
    let { addedItems } = this.props
    return (
      <Box mt={10}>
        <Container maxWidth="lg">
          <HeaderTitle title={HEADER.cart} />
          {addedItems.length > 0 ? (
            <Grid container>
              <ItemCard
                items={addedItems}
                onClick={this.handleOnClik}
                buttonText="Sepetten Çıkar"
              />
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
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => {
      dispatch(removeFromCart(id))
    },
    showLoader: () => {
      dispatch(showLoader())
    },
    hideLoader: () => {
      dispatch(hideLoader())
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
