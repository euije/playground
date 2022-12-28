export default function PostDynamic({ data }) {
    return (<></>);
}

export async function getStaticPaths() {
    return {
        paths: [{
            params: {
                id: ['a', 'b', 'c'],
            },
        }],
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    // params.id will be like ['a', 'b', 'c']
    return {
        props: {
            data: "dummy"
        }
    };
}