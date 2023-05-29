import Head from "next/head";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  return {
    props: {
      time: new Date().toUTCString(),
    },
    revalidate: 1,
  };
}

export default function ISR({ time }) {
  return (
    <main>
      <h1 className={styles.title}>{time}</h1>
    </main>
  );
}
