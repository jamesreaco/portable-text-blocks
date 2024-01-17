import { groq } from "next-sanity";

export const allPostsQuery = groq`*[_type == 'post'] | order(_createdAt desc) {
  _id,
  title,
  'slug': slug.current,
  content,
}`

export const postBySlugQuery = groq`*[_type == 'post' && slug.current == $slug][0] {
  _id,
  title,
  'slug': slug.current,
  content,
}`

