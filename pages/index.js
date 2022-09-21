import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I am a software developer in NY. Let's chat on{" "}
          <a href="https://twitter.com/CabreraCarlosR" target="_blank">
            Twitter
          </a>
          !
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <Link href="posts/first-post">Go to my first post</Link>
      </section>
    </Layout>
  );
}
