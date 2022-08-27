import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
export default function Home() {
  return (
    <Layout
      Title="Inicio| next.js"
      description="Este la descripcion de la pag de inicio"
      home
    >
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
