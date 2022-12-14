import MainLayout from "../components/MainLayout";
import {useEffect, useState} from "react";
import Link from "next/link";

const Posts = ({posts}) => {
	// const [posts, setPosts] = useState()
	// useEffect(() => {
	// 	async function load() {
	// 		const response = await fetch('http://localhost:4200/posts')
	// 		const json = await response.json()
	// 		setPosts(json)
	// 	}
	// 	load()
	// }, [])
	return (
			<MainLayout title={'Posts Page'}>
				<h1>Posts Page</h1>
				<ul>
					{posts.map(post => {
						return <li key={post.id}>
							<Link href={`/post/[id]`} as={`/post/${post.id}`}>{post.title}</Link>
						</li>
					})}
				</ul>
				{/*<pre>{JSON.stringify(posts, null, 2)}</pre>*/}
			</MainLayout>
		)
}

Posts.getInitialProps = async () => {
	const response = await fetch('http://localhost:4200/posts')
	const posts = await response.json()

	return {
		posts
	}
}

export default Posts;
