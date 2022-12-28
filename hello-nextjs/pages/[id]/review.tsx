import { useState } from 'react';
import Link from 'next/link';
import { GetServerSideProps } from 'next';

export default function Review({ data }: {
  data: {
    id: number,
    name: string,
    title: string,
    content?: string | null
  }
}) {
  const [name, setName] = useState(data.name);

  return (
    <>
      <h1>Review</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <div>{name}</div>

    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // 무조건 async 써줘야함
  const data = {
    id: 0,
    name: "euije",
    title: "next.js",
    content: null
  }
  return {
    props: { data }, // will be passed to the page component as props
  }
};