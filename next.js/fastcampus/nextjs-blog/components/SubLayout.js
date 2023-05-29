import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function SubLayout({ children }) {
  return (
    <div>
      <h1>
        <Link href="/">Home으로</Link>
      </h1>
      {children}
    </div>
  );
}
