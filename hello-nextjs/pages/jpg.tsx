import React from 'react'
import Head from 'next/head';

const jpg = () => {
    return (
        <>
            <Head>
                <title>My page title</title>
                <meta property="og:title" content="The Rock" />
                <meta property="og:description" content="The Rock Description" />
                <meta property="og:url" content="https://agenda-umber.vercel.app/jpg" />
                <meta property="og:image" content="https://hang-jeong-sal.s3.ap-northeast-2.amazonaws.com/image/euije.jpg" />
            </Head>
            <div>jpg</div>
        </>
    )
}

export default jpg