import FeaturedPosts from "../components/home-page/featured-posts"
import Hero from "../components/home-page/hero"
import { getFeaturedPosts } from "../lib/posts-util"
import Head from "next/head"

function HomePage({featuredPosts}) {

    return (
        <>
            <Head>
                <title>Khrystyna's blog</title>
                <meta name='description' content='I post about programming and web development' />
            </Head>
            <Hero />
            <FeaturedPosts posts={featuredPosts}/>
        </>
    )
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts()
    return {
        props: {
            featuredPosts: featuredPosts
        },
        revalidate: 60
    }
}

export default HomePage