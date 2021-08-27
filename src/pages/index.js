import React from "react"
import About from "../components/backgrounds/About"
import Contact from "../components/contact/Contact"
import Project from "../components/project/Project"
// import Header from "../components/layout/Header"
// import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroSection from "../components/sections/HeroSection"
import 'semantic-ui-css/semantic.min.css'
import HomeButton from "../components/home/HomeButton"
// import HomeButton from "../components/home/HomeButton"



function IndexPage() {
  return (
    <>
      <SEO title="Home" />
      <HeroSection/>
      <About/>
      <Project/>
      <Contact/>
    </>
  )
}

export default IndexPage
