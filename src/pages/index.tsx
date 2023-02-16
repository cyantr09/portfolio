import Header from "components/header";
import Layout from "components/layout";
import Head from "next/head";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>portfolio - time is moving on.</title>
        <meta name="description" content="Time is moving on." />
      </Head>
      <section className="main">
        <Header />
      </section>
    </Layout>
  );
}
