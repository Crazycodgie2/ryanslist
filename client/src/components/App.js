import React from "react"
import Main from "./Main"
import Sidebarleft from "./Sidebar-left"
import Sidebarright from "./Sidebar-right"

export default props => {
  return (
    <div className="wrapper">
      <Main />
      <Sidebarleft />
      <Sidebarright />
    </div>
  )
}
