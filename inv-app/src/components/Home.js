import React from "react"
import { connect } from "react-redux"
import { addToCart } from "./actions/cartActions"
import ItemCard from "../components/ItemCard"
import { Box } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import FilterList from "./FilterList"
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

    this.setState({
      filters,
      filteredItem: filteredArray,
    })
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

    this.setState({
      filters,
      filteredItem: filteredArray,
    })
  }

  handleOnClik = (id) => {
    this.props.addToCart(id)
  }

  render() {
    let { filteredItem } = this.state
    return (
      <Box mt={10}>
        <Container maxWidth="lg">
          <Grid container spacing={12}>
            <FilterList
              container
              direction="column"
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={4}
              spacing={3}
              onChange={this.handleCheckboxChange}
            />
            <Grid
              container
              item
              direction="row"
              justify="center"
              xs={12}
              sm={12}
              md={8}
              lg={8}
              xl={8}
            >
              <ItemCard items={filteredItem} onClick={this.handleOnClik} willAdd />
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
