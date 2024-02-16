import AllPosts from "../../components/posts/all-posts"
import { getAllPosts } from "../../lib/posts-util"
import Head from "next/head"

function AllPostsPage({posts}) {
    return (
        <>
            <Head>
                <title>All Posts</title>
                <meta name='description' content='A list of all programming-related tutorials and posts' />
            </Head>
            <AllPosts posts={posts}/>
        </>
    )
}

export function getStaticProps() {
    const posts = getAllPosts()
    return {
        props: {
            posts: posts
        }
    }
}

export default AllPostsPage