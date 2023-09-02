import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export async function getStaticProps() {
  console.log("server");

  return {
    props: { time: new Date().toISOString() },
  };
}

export default function SSG({ time }) {
  return (
    <>
      <h1 className={styles.title}>{time}</h1>
    </>
  );
}
