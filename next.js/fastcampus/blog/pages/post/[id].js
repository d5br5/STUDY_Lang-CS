import Head from "next/head";
import Layout from "components/Layout";
import { getPostDetail, getPostIds } from "../../lib/posts";
import Date from "components/date";
import utilStyles from "../../src/styles/utils.module.css";

export async function getStaticPaths() {
  const paths = getPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
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
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </article>
    </Layout>
  );
}
