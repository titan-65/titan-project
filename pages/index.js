import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { withApollo } from '../lib/apollo'
import Layout from "../components/Layout/Layout";
import Slider from '../components/slider'
import About from "../components/Layout/About/about";
import Service from "../components/Layout/Services/service";
import Portfolio from "../components/Layout/Portfolio/portfolio";

export const Home = () => {
  return (
    <Layout>
        <Slider/>
        <About/>
        <Service/>
        <Portfolio/>
    </Layout>
  )
}


export default Home
