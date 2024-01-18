import Post from '@/components/post'
import Container from '@/components/container'
import { getPostBySlug } from '@/sanity/lib/sanity.fetch'

export const dynamic = 'force-dynamic'

export default async function PostsPage({ params }) {

  const post = await getPostBySlug(params.slug)

  return (
    <Container classNames="my-[80px]">
      <Post post={post} />
    </Container>
  )
}
