import React from "react"
import { Link } from "react-router-dom"
import { Box, Grid, Typography, IconButton, Toolbar, AppBar } from "@material-ui/core"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import HomeIcon from "@material-ui/icons/Home"
import { HEADER } from "../constants"

export default function NavBar() {
  return (
    <AppBar>
      <Toolbar>
        <Grid container direction="row" justify="space-between" alignItems="center">
          <Box>
            <IconButton color="inherit">
              <Link to="/">
                <HomeIcon color="action" />
              </Link>
            </IconButton>
          </Box>
          <Box>
            <Typography variant="h5" gutterBottom>
              {HEADER.companyName}
            </Typography>
          </Box>
          <Box>
            <IconButton color="inherit">
              <Link to="/cart">
                <ShoppingCartIcon />
              </Link>
            </IconButton>
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
