import Post from "@/components/post"
import Container from "@/components/container"
import { getPostBySlug } from "@/sanity/lib/sanity.fetch"

export const dynamic = 'force-dynamic'

export default async function Home() {

  const post = await getPostBySlug('demo')

  return (
    <Container classNames="my-20">
      <Post post={post} />
    </Container>
  )
}
