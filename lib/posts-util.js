import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getPostData(postIdentifier) {
    const postSlug = postIdentifier.replace(/\.md$/,'') // removes a file extension in the end

    const filePath = path.join(postsDirectory, `${postSlug}.md`) // it returns a path to a specific file
    const fileContent = fs.readFileSync(filePath, 'utf-8') // it returns a string of fileConent
    const {data, content} = matter(fileContent) // it splits for us a markdown file and returns an obj with 2 props: data (metadata) and content

    const postData = {
        slug: postSlug,
        ...data,
        content
    }
    return postData
}

export function getPostsFiles() {
    return fs.readdirSync(postsDirectory) // it returns an array of all files in the directory
}

export function getAllPosts() {
    const postFiles = getPostsFiles()
    const allPosts = postFiles.map((postFile) => {
        return getPostData(postFile)
    })

    //below is a default JS sort method that will make sure that posts with greater date which are more recent, are actually sorted in front of older posts
    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1)

    return sortedPosts
}

export function getFeaturedPosts() {
    const allPosts = getAllPosts()
    const featuredPosts = allPosts.filter(post => post.isFeatured)
    return featuredPosts
}