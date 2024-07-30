import Layout from "components/Layout";
import SubLayout from "components/SubLayout";
import styles from "styles/Home.module.css";

import { useRouter } from "next/router";

export default function CategorySlug2() {
  const router = useRouter();
  console.log(router.query);

  return (
    <main>
      <h1 className={styles.title}>CategorySlug2</h1>
    </main>
  );
}

CategorySlug2.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
