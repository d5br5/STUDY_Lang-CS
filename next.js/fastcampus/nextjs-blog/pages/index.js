import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export async function getServerSideProps() {
  return {
    props: {
      time: new Date().toUTCString(),
    },
  };
}

export default function Home({ time }) {
  return (
    <main>
      <h1 className={styles.title}>{time}</h1>
      <h1>
        <Link href="/csr">CSR</Link>
      </h1>
      <h1>
        <Link href="/ssg">SSG</Link>
      </h1>
      <h1>
        <Link href="/isr">ISR</Link>
      </h1>
    </main>
  );
}
