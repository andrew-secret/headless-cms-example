import { fetchGraphQL } from './fetch-graqhql'

const GLOBAL_SITE_INFORMATION_QUERY = `
siteCollection(limit: 1) {
    items {
      title
      logo {
        title
        altText
        image {
          url
        }
      }
    }
  }
`

const PAGE_QUERY = `
  items {
    slug
    title
    contentCollection(limit: 100) {
      items {
        ... on Block {
          __typename
          headline
          subheadline
          content {
            json
          }
        }
        ... on HeroTeaser {
          __typename
          headline
          subheadline
          cta {
            __typename
            ... on Page {
              slug
              title
            }
            ... on Link {
              title
              url
            }
          }
        }
      }
    }
  }
`

const NAVIGATION_QUERY = `
siteCollection(limit: 1) {
    items {
      navigation {
        title
        elementsCollection(limit: 100) {
          items {
            ... on Page {
              title
              slug
            }
            
            ... on Link {
              title
              url
            }
          }
        }
      }
    }
  }
`

const ALL_PAGES_QUERY = `
pageCollection(where: {slug_exists: true }, order: title_DESC) {
  items {
    slug
    title
  }
}
`

function extractPageEntires(fetchResponse) {
  const test = fetchResponse?.data?.pageCollection?.items
  return test
}

export async function getPageBySlug(slug, preview) {
  const entry = await fetchGraphQL(
    `query {
        pageCollection(where: { slug: "${slug === '/' ? '/' : `/${slug}`}" }, preview: ${!!preview}, limit: 1) {
          ${PAGE_QUERY}
        }
      }`,
    true
  )

  return extractPageEntires(entry)
}

export async function getNavigation() {
  const entry = await fetchGraphQL(
    `query {
            ${NAVIGATION_QUERY}
        }`,
    true
  )
  return entry
}

export async function getGlobalSiteInformation() {
  const entry = await fetchGraphQL(
    `query {
        ${GLOBAL_SITE_INFORMATION_QUERY}
        }`,
    true
  )

  return entry
}

export async function getAllPagesWithSlug() {
  const entry = await fetchGraphQL(
    `query {
        ${ALL_PAGES_QUERY}
      }`,
    true
  )

  return extractPageEntires(entry)
}
