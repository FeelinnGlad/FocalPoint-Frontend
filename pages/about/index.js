import Router from "next/router";
import MainLayout from "../../components/MainLayout";

const Index = () => {
	const linkClickHandler = () => {
		Router.push('/')
	}
	return (
		<MainLayout title={'About Page'}>
		<h1>About Page</h1>
		<button onClick={linkClickHandler}>Go home</button>
		<button onClick={() => Router.push('/posts')}>Go 2 posts</button>
		</MainLayout>
	)
}

export default Index;
