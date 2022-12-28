import { DongilAtom } from "../atom/atom";
import { useRecoilValue } from "recoil";
import { GetStaticProps, GetServerSideProps } from "next";

export default function Introduce({ data }) {
    const _age = useRecoilValue(DongilAtom);
  return (
    <>
      <h1>About</h1>
      <h2>{_age.age}</h2>
      <h1>Hi</h1>
    </>
  );
}

/**
 * 둘 다 상관 없음.
 */
export const getStaticProps : GetStaticProps = () => {
    return {
        props : {
            data : "data"
        }
    }
}

// export const getServerSideProps : GetServerSideProps = async () => {
//     return {
//         props : {
//             data : "data"
//         }
//     }
// }