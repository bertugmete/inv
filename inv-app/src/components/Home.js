import React from "react"
import { connect } from "react-redux"
import { addToCart, showLoader, hideLoader } from "./actions/cartActions"
import { Box, Container, Grid } from "@material-ui/core"
import HeaderTitle from "./HeaderTitle"
import FilterList from "./FilterList"
import ItemCard from "./ItemCard"
import Loader from "./Loader"
import ProductNotFound from "./ProdutNotFound"
import { HEADER } from "../constants"

import { filterArray } from "../utils"

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filteredItem: props.items,
      filters: {
        size: [],
        color: [],
        price: [],
      },
      isLoading: false,
    }
  }

  handleCheckboxChange = (e) => {
    let { value, checked, name } = e.target
    if (checked) {
      this.filtrele(name, value)
    } else {
      this.filtreCikar(name, value)
    }
  }

  filtrele = (name, value) => {
    let { filters } = this.state
    let { items } = this.props
    const index = filters[value].indexOf(name)
    if (index > -1) {
      return
    }

    filters[value] = [...filters[value], name]

    let filteredArray = filterArray(items, filters)

    this.props.showLoader()

    setTimeout(() => {
      this.setState(
        {
          filters,
          filteredItem: filteredArray,
        },
        () => this.props.hideLoader()
      )
    }, 500)
  }

  filtreCikar = (name, value) => {
    let { filters } = this.state
    let { items } = this.props

    const index = filters[value].indexOf(name)

    if (index === -1) {
      return
    }
    filters[value].splice(index, 1)
    let filteredArray = filterArray(items, filters)

    this.props.showLoader()

    setTimeout(() => {
      this.setState(
        {
          filters,
          filteredItem: filteredArray,
        },
        () => this.props.hideLoader()
      )
    }, 500)
  }

  handleOnClik = (id) => {
    this.props.showLoader()
    this.props.addToCart(id)
    setTimeout(() => {
      this.props.hideLoader()
    }, 1000)
  }

  render() {
    let { filteredItem, isLoading } = this.state
    return (
      <Box mt={10}>
        <Container maxWidth="lg" style={{ position: "relative" }}>
          {isLoading && <Loader />}

          <Grid container>
            <HeaderTitle title={HEADER.home} />
            <FilterList
              container
              direction="column"
              xs={12}
              sm={12}
              md={2}
              lg={2}
              xl={2}
              spacing={2}
              onChange={this.handleCheckboxChange}
            />
            <Grid
              container
              item
              direction="row"
              justify="center"
              xs={12}
              sm={12}
              md={10}
              lg={10}
              xl={10}
            >
              {filteredItem.length > 0 ? (
                <ItemCard
                  items={filteredItem}
                  onClick={this.handleOnClik}
                  buttonText="Sepete Ekle"
                />
              ) : (
                <Grid container item direction="row" justify="center" alignItems="center">
                  <ProductNotFound />
                </Grid>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id))
    },
    showLoader: () => {
      dispatch(showLoader())
    },
    hideLoader: () => {
      dispatch(hideLoader())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
