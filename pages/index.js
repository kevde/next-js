import Head from 'next/head'
import Content from '../component/Content';
import Footer from '../component/Footer';
import Header from '../component/Header';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}
