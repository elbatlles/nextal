import type { NextPage } from "next";
import Head from "next/head";
import Button from "@/components/atoms/button";
import CopyButton from "@/components/molecules/copy-button";
import Feature, { FeatureProps } from "@/components/molecules/feature";

import styles from "./index.module.css";
import Chat from "@/components/molecules/chat";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chat MVP</title>
        <meta name="description" content="Chat MVP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.copy}>
        <div className={styles.copyInner}>
          <a href="https://github.com/elbatlles/nextal">
            <Button>Visit on Github</Button>
          </a>
          <CopyButton text="git clone https://github.com/elbatlles/nextal" />
        </div>
      </section>
      <section className={styles.copy}>
        <Chat title={""} description={""} link={""} />
      </section>
    </>
  );
};

export default Home;
