import React from "react";
import Home from "../pages/home/Home";
import Overview from "../pages/overview/Overview";

interface Route {
  exact: boolean
  path: string
  component: React.FC
}

const routes: Array<Route> = [
  {
    exact: true,
    path: "/",
    component: Home
  },
  {
    exact: true,
    path: "/overview/:pokemonName",
    component: Overview
  }
]

export default routes
