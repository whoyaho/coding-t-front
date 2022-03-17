import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../components/layout";
import styles from "./index.module.css";
const Home = () => {
  return (
    <Layout>
      <header className={styles.header}>
        <Image
          src="/images/butter.gif"
          width={150}
          height={100}
          alt="butter-slime"
        />
        <h1 className={styles.mainTitle}>
          말랑이 온라인 코딩테스트에 오신 것을 환영합니다!
        </h1>
        <Image
          src="/images/butter.gif"
          width={150}
          height={100}
          alt="butter-slime"
        />
      </header>
      <div className={styles.problemContainer}>
        <Link href="/login">
          <a className={styles.problemBtn}>회원가입/로그인 구현하기</a>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
