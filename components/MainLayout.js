import Link from "next/link";
import Head from "next/head";

const MainLayout = ({children, title = 'Focal Point'}) => {
	return (
		<>
			<Head><title>{title} | FocalPoint</title></Head>
			<meta name="keywords" content="next,javascript,focal,focalpoint,art,gallery,nextjs" />
			<meta name="description" content="Focal Point is an online gallery and convenient tool for exploring and arranging your art and art of others."/>
			<meta charSet="utf-8" />
		<nav>
			<Link href={'/'}>Home</Link>
			<Link href={'/about'}>About</Link>
			<Link href={'/posts'}>Posts</Link>
		</nav>
		<main>
			{children}
		</main>
			<style jsx global>{`
              nav {
                position: fixed;
                height: 60px;
                left: 0;
                top: 0;
                right: 0;
                background: #1e1b1b;
                display: flex;
                justify-content: space-around;
                align-items: center;
              }
              nav a {
              color: aliceblue;
              text-decoration: none;
              }
              main {
              margin-top: 60px;
              padding: 1rem;
              }
			`}</style>
		</>
	)
}

export default MainLayout;
