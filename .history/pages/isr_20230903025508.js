import Head from "next/head";
import styles from "../styles/Home.module.css";
export async function getStaticProps() {
  console.log("server");

  return {
    props: { time: new Date().toISOString() },
    revalidate: 1,
    // 초 단위
  };
}

export default function ISR({ time }) {
  return (
    <>
      <h1 className={styles.title}>{time}</h1>
    </>
  );
}
