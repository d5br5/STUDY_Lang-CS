import Head from "next/head";
import Layout, { siteTitle } from "src/components/Layout";
import utilStyles from "styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "src/components/date";

// import { useEffect, useState } from "react";

export async function getServerSideProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// export async function getServerSideProps() {
//   const res = await fetch("http://localhost:3000/api/post/list");
//   const json = res.json();
//   return {
//     props: {
//       allPostsData: json.allPostsData,
//     },
//   };
// }

export default function Home({ allPostsData }) {
  // const [allPostsData, setAllPostsData] = useState([]);
  // useEffect(() => {
  //   fetch("/api/posts")
  //     .then((res) => res.json())
  //     .then((data) => setAllPostsData(data.allPostsData));
  // }, []);
  console.log(11);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/post/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        <Link href={"/post/write"}>Create Post</Link>
      </section>
    </Layout>
  );
}
