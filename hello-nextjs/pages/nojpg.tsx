import React from 'react'
import Head from 'next/head';

const nojpg = () => {
    return (
        <>
            <Head>
                <title>My page title</title>
                <meta property="og:title" content="The Rock" />
                <meta property="og:description" content="The Rock Description" />
                <meta property="og:url" content="https://agenda-umber.vercel.app/nojpg" />
                <meta property="og:image" content="https://d2w97raom2yk51.cloudfront.net/agencies/gw724/images/profile" />
            </Head>
            <div>nojpg</div>
        </>
    )
}

export default nojpg