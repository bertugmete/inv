import React from "react"
import NavBar from "./components/NavBar"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import Cart from "./components/Cart"

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
