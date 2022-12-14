import { GetStaticProps, NextPage } from "next/types";
import { IArticleFields } from "../src/@types/contentful";
import ContentService from "../src/@types/util/content-service";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import Hero from "../components/hero/hero";
import Header from "../components/header/header";

interface Props {
  articles: IArticleFields[];
}

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My awesome Harry Potter blog</title>
        <meta
          name="description"
          content="This is a blog with many intersting articles about Harry Potter."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my Harry Potter blog!</h1>

        <p className={styles.description}>
          This is a blog with many intersting articles about Harry Potter.
        </p>

        <div className={styles.grid}>
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/${article.slug}`}
              className={styles.card}
            >
              <h2>{article.title} &rarr;</h2>
              <p>{article.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const articles = (
    await ContentService.instance.getEntriesByType<IArticleFields>("article")
  ).map((entry) => entry.fields);

  return {
    props: {
      articles,
    },
  };
};
