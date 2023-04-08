const postFields = `
  _id,
  name,
  title,
  publishedAt,
  excerpt,
  mainImage{
    asset->{
      _id,
      url
    }
  },
  categories[]-> {
    title,
    _id
},
  "slug": slug.current,
  "author": author->{name,  image{
    asset->{
      _id,
      url
    }
  }}
`

export const indexQuery = `
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    body,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    body,
    ${postFields}
  }
}`

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`

export const postCategories = `
*[_type == "category"]
`
export const postByCategory =  `
*[_type == "post" &&  $slug in categories[]->title]{
  ${postFields}
  }
`