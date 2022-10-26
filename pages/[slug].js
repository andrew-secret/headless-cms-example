import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import { getAllPagesWithSlug, getPageBySlug } from '../lib/api'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function Page({ page, preview }) {
  const router = useRouter()

  if (!router.isFallback && !page) {
    return <ErrorPage statusCode={404} />
  }

  if (!page) {
    return <div>loading...</div>
  }

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
      </section>
    </>
  )
}

export async function getStaticPaths() {
  const allPages = await getAllPagesWithSlug()
  console.log({allPages})
  return {
    paths: allPages.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  }
}

export async function Foo() {
  console.log('fooobaaajsiodjaoisdjioas');
  return null;
}


export async function getStaticProps({ params, preview = false }) {
  
  const data = await getPageBySlug(params.slug, preview)

  return {
    props: {
      preview,
      page: data ?? null
    }
  }
}