import Layout from "components/Layout";
import SubLayout from "components/SubLayout";
import styles from "styles/Home.module.css";
import { useRouter } from "next/router";

export default function CartDateSlug() {
  const router = useRouter();
  console.log(router.query);

  return (
    <main>
      <h1 className={styles.title}>CartDateSlug</h1>
    </main>
  );
}

CartDateSlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
