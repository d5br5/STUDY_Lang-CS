import Head from "next/head";
import Layout from "src/components/Layout";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

// export async function getServerSideProps() {
//   return {};
// }

export default function Write() {
  const idRef = useRef(undefined);
  const titleRef = useRef(undefined);
  const contentRef = useRef(undefined);
  const router = useRouter();

  useEffect(() => {
    console.log(router.query);
  }, [router.query]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = idRef.current.value;
    const title = titleRef.current.value;
    const content = contentRef.current.value;

    if (id && title && content) {
      fetch("/api/post/write", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          title,
          content,
        }),
      })
        .then((res) => {
          console.log(res);
          if (res.ok) return res.json();
          throw new Error("fetch error");
        })
        .then((data) => alert(data.msg))
        .then(() => router.push("/"))
        .catch((error) => alert(`req error : ${error}`));
    }
  };

  return (
    <Layout>
      <Head>
        <title>post write</title>
      </Head>
      <h1>Write a post</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder="id" required ref={idRef} />
        <br />
        <input
          type="text"
          name="title"
          placeholder="title"
          required
          ref={titleRef}
        />
        <br />
        <textarea
          type="text"
          name="content"
          placeholder="content"
          required
          ref={contentRef}
        />
        <br />
        <input type="submit" value="Create" />
      </form>
    </Layout>
  );
}

// Write.getInitialProps = async () => {
//   return {};
// };
