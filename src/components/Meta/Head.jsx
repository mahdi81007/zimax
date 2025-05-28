import Head from 'next/head'

function HeadTag() {
    return (
        <Head>
            <title>zimax.io</title>
            <meta charSet="utf-8"/>
            <link rel="icon" href="/favicon.ico"/>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
            <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
            <link rel="icon" type="image/png" href="/favicon.ico" />
        </Head>
    )
}

export default HeadTag
