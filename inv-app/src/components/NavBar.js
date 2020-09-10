import React from "react"
import AppBar from "@material-ui/core/AppBar"
import { Link } from "react-router-dom"

export default class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      drawerOpened: false,
    }
  }
  toggleDrawer = (booleanValue) => () => {
    this.setState({
      drawerOpened: booleanValue,
    })
  }

  render() {
    return (
      <div className="App">
        <AppBar>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </AppBar>
      </div>
    )
  }
}
