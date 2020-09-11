import React from "react"
import NavBar from "./components/NavBar"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import Cart from "./components/Cart"
import Loader from "./components/Loader"

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Loader />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
