import Link from 'next/link'
import Head from 'next/head'

const Index = () =>
	<>
		<Head>
			<title>Focal</title>
			<meta name="keywords" content="next,javascript,focal,focalpoint,art,gallery,nextjs" />
			<meta name="description" content="Focal Point is an online gallery and convenient tool for exploring and arranging your art and art of others."/>
			<meta charSet="utf-8" />
		</Head>
		<h1>Hello Next.JS</h1>
		<p><Link href="/about">About</Link></p>
		<p><Link href="/posts">Posts</Link></p>
		<p>zkdfjngsfsjdkanasbjf</p>
	</>

export default Index;
