import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
          {/* <script src="https://connect.facebook.net/en_US/sdk.js" /> */}
          {/**
           * including scripts in this manner does not give a clear idea
           * of when it would load with respect to the other JavaScript code fetched on the same page.
           * If a particular script is render-blocking and can delay page content from loading,
           * this can significantly impact performance.
           */}
        </Head>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          // e is defined as 'any' type
          onLoad={(e) => {
            console.log(
              `script loaded correctly, window.FB has been populated`
            );
          }}
        />

        <h1>First Post</h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </Layout>
    </>
  );
}
