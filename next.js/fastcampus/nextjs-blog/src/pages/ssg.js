import styles from "styles/Home.module.css";
import Layout from "components/Layout";
import SubLayout from "components/SubLayout";

export async function getStaticProps() {
  return {
    props: {
      time: new Date().toUTCString(),
    },
  };
}

export default function SSG({ time }) {
  return (
    <main>
      <h1 className={styles.title}>{time}</h1>
    </main>
  );
}

SSG.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
