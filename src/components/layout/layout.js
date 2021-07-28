import React from "react"
import { GlobalStyle } from "../styles/GlobalStyle"
// import Header from "./Header"
import "./layout.css"

function Layout({ children }) {
  return (
    <>
    <GlobalStyle/>
      <main>{children}</main>
    </>
  )
}

export default Layout
