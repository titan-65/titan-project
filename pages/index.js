import React, { useEffect, useState} from 'react'
import Head from 'next/head'
import { fetchEntries } from "../lib/contentfulAPI";
import Layout from "../components/Layout/Layout";
import Slider from '../components/slider'
import About from "../components/Layout/About/about";
import Service from "../components/Layout/Services/service";
import Portfolio from "../components/Layout/Portfolio/portfolio";


const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});

export const Home = () => {

    const [posts, setPosts] = useState([])

    async function fetchEntries() {
        const entries = await client.getEntries()
        if (entries.items) return entries.items
        console.log(`Error get Entries for ${contentType.name}`)
    }

    useEffect(() => {
        async function getPosts() {
            const allPosts = await fetchEntries()
            setPosts([...allPosts])
        }
        getPosts()
    }, [])

  return (
    <Layout>
        <Slider/>
        <About/>
        <Service/>
        <Portfolio posts={posts}/>
    </Layout>
  )
}


export default Home


// export async function getStaticProps() {
//     const res = await fetchEntries()
//     const posts = await res.map(value => {
//         return value.fields
//     })
//
//     return {
//         props: {
//             posts
//         }
//     }
// }
