import Router from "next/router";

const Index = () => {
	const linkClickHandler = () => {
		Router.push('/')
	}
	return (<>
		<h1>About Page</h1>
		<button onClick={linkClickHandler}>Go home</button>
		<button onClick={() => Router.push('/posts')}>Go 2 posts</button>
	</>)
}

export default Index;
