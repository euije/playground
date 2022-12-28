import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { GetStaticProps, GetStaticPaths } from 'next'

/**
 * {Parsing error: Cannot find module 'next/babel'
 *   Require stack:
 *   - /Users/euije/Github/agenda/nextjs-blog/node_modules/next/dist/compiled/babel/bundle.js
 *   - /Users/euije/Github/agenda/nextjs-blog/node_modules/next/dist/compiled/babel/eslint-parser.js
 *   - /Users/euije/Github/agenda/nextjs-blog/node_modules/eslint-config-next/parser.js
 *   - /Users/euije/Github/agenda/nextjs-blog/node_modules/@eslint/eslintrc/dist/eslintrc.cjs} param0 
 * -> .eslintrc.json
 */


export default function Post({ postData }: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <br />
      {/* {postData.id} */}
      <br />
      {/* {postData.date} */}

      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

/**
 * 아래와 방식으로 [id]를 지정 해줘야함.
[
    {
      params: {
        id: 'ssg-ssr'
      }
    },
    {
      params: {
        id: 'pre-rendering'
      }
    }
]
 * @returns paths
 */
export const getStaticPaths : GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
    /**
     * If fallback is false, then any paths not returned by getStaticPaths will result in a 404 page.
     * 
     * If fallback is true, then the behavior of getStaticProps changes:
     *   The paths returned from getStaticPaths will be rendered to HTML at build time.
     *   The paths that have not been generated at build time will not result in a 404 page.
     *   Instead, Next.js will serve a “fallback” version of the page on the first request to such a path.
     *   In the background, Next.js will statically generate the requested path. 
     *   Subsequent requests to the same path will serve the generated page, just like other pages pre-rendered at build time.
     * 
     * If fallback is blocking, then new paths will be server-side rendered with getStaticProps, 
     *  and cached for future requests so it only happens once per path.
     */
  };
}

export const getStaticProps : GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {  
    props: {
      postData,
    }
  };
}
