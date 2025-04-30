import Head from 'next/head'

function HeadTag() {
    return (
        <Head>
            <title>zimax.io</title>
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.png" />

            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
    )
}

export default HeadTag
