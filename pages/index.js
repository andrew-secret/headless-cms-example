import Head from 'next/head'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getPageBySlug } from '../lib/api'
import Link from 'next/link'

export default function Index({ preview, page }) {
  return (
    <>
      <section preview={preview}>
        <Head>
          <title>Next.js Website Example with Contentful</title>
        </Head>
        <h1>
            INDEX PAGE
        </h1>
        {page[0].contentCollection.items.map((item, key) => {
          return (
            <>
              {item.__typename === 'Block' && (
                <div>
                  <h1>
                    {item.headline}
                  </h1>
                  <h2>
                    {item.subheadline}
                  </h2>

                  {documentToReactComponents(item.content.json)}
                </div>
              )}
              {item.__typename === 'HeroTeaser' && <div>it is a HeroTeaser</div>}
            </>
          )
        })}
        <Link href="/about">
          About
        </Link>
      </section>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const data = await getPageBySlug('/', preview)

  return {
    props: {
      preview,
      page: data ?? null,
    },
  }
}