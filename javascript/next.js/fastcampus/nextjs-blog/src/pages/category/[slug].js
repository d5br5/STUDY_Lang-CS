import Layout from "components/Layout";
import SubLayout from "components/SubLayout";
import styles from "styles/Home.module.css";

import { useRouter } from "next/router";

export default function CategorySlug() {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug, router, router.query);
  return (
    <main>
      <h1 className={styles.title}>CategorySlug {slug}</h1>
    </main>
  );
}

CategorySlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
