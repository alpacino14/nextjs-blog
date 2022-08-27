import Layout from "../../components/Layout";
import Link from "next/link";
export default function index({ data }) {
  return (
    <div>
      <Layout title="home| next.js" description="Este es el index">
        <h1> Lista de blogs</h1>

        {data.map(({ id, title, body }) => (
          <div key={id}>
            <h3>
              <Link href={`/blog/${id}`}>
                <a>
                  {id} - {title}
                </a>
              </Link>
            </h3>
            <p> {body}</p>
          </div>
        ))}
      </Layout>
    </div>
  );
}

// Esto se ejecuta en el servidor
export async function getStaticProps() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
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
