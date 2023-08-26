import Head from "next/head";
import Layout from "src/components/Layout";
import { getPostDetail, getPostIds } from "../../lib/posts";
import Date from "src/components/date";
import utilStyles from "src/styles/utils.module.css";
import dynamic from "next/dynamic";
import { useState } from "react";

const Button = dynamic(() => import("src/components/Layout"), {
  loading: () => <div>loading...</div>,
});

const ErrorComponent = () => {
  const [error, setError] = useState(false);
  if (error) {
    throw new Error("Error occured");
  }

  return <button onClick={() => setError(true)}>Error fire</button>;
};

export async function getStaticPaths() {
  const paths = getPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, preview }) {
  console.log(`>>>>>>>> preview : ${preview}`);
  const postData = await getPostDetail(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default function PostDetail({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <ErrorComponent />
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </article>
    </Layout>
  );
}
