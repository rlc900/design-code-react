import React from "react"
import About from "../components/backgrounds/About"
import Contact from "../components/contact/Contact"
import Project from "../components/project/Project"
import Header from "../components/layout/Header"
// import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroSection from "../components/sections/HeroSection"
import 'semantic-ui-css/semantic.min.css'
import HomeButton from "../components/home/HomeButton"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection/>
      <About/>
      <Project/>
      <Contact/>
      <HomeButton/>
    </Layout>
  )
}

export default IndexPage
