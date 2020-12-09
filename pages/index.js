import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilsStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilsStyles.headingMd}>
        <p>Hello</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilsStyles.headingMd} ${utilsStyles.padding1px}`}>
        {allPostsData.map(({ id, date, title }) => (
          <li className={utilsStyles.listItem} key={id}>
            {title}
            <br />
            {id}
            <br />
            {date}
          </li>
        ))}
      </section>
    </Layout>
  )
}
