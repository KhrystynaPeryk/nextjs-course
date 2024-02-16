import PostContent from "../../components/posts/post-detail/post-content"
import { getPostData, getPostsFiles } from "../../lib/posts-util"
import Head from "next/head"

function PostDetailPage({post}) {
    return (
        <>  
            <Head>
                <title>{post.title}</title>
                <meta name='description' content={post.excerpt} />
            </Head>
            <PostContent post={post}/>
        </>
    )
}

export function getStaticProps(context) {
    const {params} = context
    const {slug} = params

    const post = getPostData(slug)

    return {
        props: {
            post: post
        },
        revalidate: 60
    }
}

export async function getStaticPaths() {
    const postFileNames = getPostsFiles()
    const slugs = postFileNames.map(fileName => fileName.replace(/\.md$/,''))
    return {
        paths: slugs.map(slug => ({params: {slug: slug}})),
        fallback: false
    }
}

export default PostDetailPage