import { GetStaticProps, GetServerSideProps } from "next";

type ReturnData = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export default function fetching({ data } : { data : ReturnData } ) {
  return (
    <>
      <h1>Review</h1>
      <h3>{data.userId}</h3>
      <h3>{data.id}</h3>
      <h3>{data.title}</h3>
      <h3>{data.completed}</h3>
    </>
  );
}

export const getStaticProps : GetStaticProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json()) ;

  return {
    props : {
      data : data as ReturnData
    }
  };
};

// export const getServerSideProps : GetServerSideProps = async (context) => {
//   const data : ReturnData = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => res.json());

//   return {
//     props : {
//       data : data
//     }
//   };
// };