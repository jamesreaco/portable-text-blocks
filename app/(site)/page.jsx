import Post from "@/components/post"
import Container from "@/components/container"
import { getPostBySlug } from "@/sanity/lib/sanity.fetch"

export const dynamic = 'force-dynamic'

export default async function Home() {

  const post = await getPostBySlug('demo')

  return (
    <Container classNames="my-[80px]">
      <Post post={post} />
    </Container>
  )
}
