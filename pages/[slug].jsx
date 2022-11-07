import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getAllPagesWithSlug, getPageBySlug } from '../lib/api'

export default function Page({ page }) {
  const router = useRouter()

  if (!router.isFallback && !page) {
    return <ErrorPage statusCode={404} />
  }

  if (!page) {
    return <div>loading...</div>
  }

  return (
    <section>
      <Head>
        <title>Next.js Website Example with Contentful</title>
      </Head>
      {page[0].contentCollection.items.map((item, key) => (
        <>
          {item.__typename === 'Block' && (
            <div>
              <h1>{item.headline}</h1>
              <h2>{item.subheadline}</h2>

              {documentToReactComponents(item.content.json)}
            </div>
          )}
          {item.__typename === 'HeroTeaser' && <div>it is a HeroTeaser</div>}
        </>
      ))}
    </section>
  )
}

export async function getStaticPaths() {
  const allPages = await getAllPagesWithSlug()
  return {
    paths: allPages.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  }
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPageBySlug(params ? params.slug : '/', preview)

  return {
    props: {
      preview,
      page: data ?? null,
    },
  }
}
