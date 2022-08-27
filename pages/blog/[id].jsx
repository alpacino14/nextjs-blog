import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/Layout";

export default function primerPost({ data }) {
  return (
    <Layout>
      <h1>
        {" "}
        {data.id} - {data.title}
      </h1>
      <p> {data.body}</p>
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    const paths = data.map(({ id }) => ({ params: { id: String(id) } }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + params.id
    );
    const data = await response.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
