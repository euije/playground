import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
import { GetStaticProps } from 'next';
import Alert from "../components/alert";
import styled from "styled-components";

import { useRecoilState, useRecoilValue } from "recoil";
import { DongilAtom } from "../atom/atom";

const HelloStyle = styled.div`
  border: 1px dotted black;
  margin-top: 50px;
`;

const StyleA = styled.div`
  font-size: 32px;
  color: blue;
`;

const YourComponent = () => {
  return (
    <Image
      src="/images/profile.jpeg"
      height={144}
      width={144}
      alt="Your Name"
    />
  );
};

export default function Home({ allPostsData }: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  /**
   * const _dongil = useRecoilValue(DongilAtom);
   * const [value, setValue] = useState(_dongil.age);
   */
  const [value2, setValue2] = useRecoilState(DongilAtom);
  const myHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue2((prev) => prev = {
      age: e.target.value,
      props: "handsome"
    });
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        {/* Recoil */}
        <div>
          <h1>{value2.age}</h1>
          <input
            type="number"
            onChange={myHandler}
          ></input>
        </div>

        {/* About page */}
        <h1>
          Go to <Link href="/introduce">introduce</Link>
        </h1>

        {/* Alert Component & Styled-Components*/}
        <HelloStyle>
          <h1>.module.css</h1>
          <Alert
            children="이런 식으로 *.module.css를 사용할 수 있습니다."
            type="success"
          />
          <Alert
            children={
              <>
                <div>
                  이런 식으로 *.module.css를 사용할 수 있습니다
                </div>
                <StyleA>
                  이런 식으로 styled-components를 사용할 수 있습니다.
                </StyleA>
              </>
            }
            type="error"
          />
        </HelloStyle>

        {/* Component */}
        <br />
        <YourComponent></YourComponent>

        {/* First Post */}
        <h1 className="title">
          Read <Link href="/posts/first-post">first-post!</Link>
        </h1>

        {/* ServerSideProps */}
        <h1 className="title">
          Read <Link href="/fetching">fetching (server-side-props)!</Link>
        </h1>

        {/* Dynamic Routes */}
        <h1 className="title">
          Read <Link href="/pages/a/b/c">Dynamic Routes</Link>
        </h1>


      </section>

      <hr />

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
