import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

// export async function getServerSideProps() {
//   console.log("server");

//   return {
//     props: { time: new Date().toISOString() },
//   };
// }

export default function CSR() {
  useEffect(() => {
    console.log("client");

    setTime(new Date().toISOString());
  }, []);

  const [time, setTime] = useState();

  return (
    <>
      <h1 className={styles.title}>{time}</h1>
    </>
  );
}
