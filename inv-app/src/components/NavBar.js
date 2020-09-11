import React from "react"
import { Link } from "react-router-dom"
import { Box, Grid, IconButton, Toolbar, AppBar } from "@material-ui/core"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import HomeIcon from "@material-ui/icons/Home"

export default function NavBar() {
  return (
    <AppBar>
      <Toolbar>
        <Grid container direction="row" justify="space-between" alignItems="center">
          <Link to="/">
            <Box>
              <IconButton color="inherit">
                <HomeIcon color="secondary" />
              </IconButton>
            </Box>
          </Link>
          <Link to="/cart">
            <Box>
              <IconButton color="inherit">
                <ShoppingCartIcon color="secondary" />
              </IconButton>
            </Box>
          </Link>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
