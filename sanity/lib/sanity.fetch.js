import { client } from "../config/sanity.client";
import { allPostsQuery, postBySlugQuery } from "./sanity.queries";

export async function getAllPosts() {
  return client.fetch(
    allPostsQuery
  )
}

export async function getPostBySlug(slug) {
  return client.fetch(
    postBySlugQuery, { slug: slug }
  )
}