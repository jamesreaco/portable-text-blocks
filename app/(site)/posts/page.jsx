import Link from 'next/link'
import Container from '@/components/container'
import { getAllPosts } from '@/sanity/lib/sanity.fetch'

export const dynamic = 'force-dynamic'

export default async function PostsPage() {

  const posts = await getAllPosts()

  return (
    <Container classNames="my-20">
      <h1 className='text-4xl border-b border-b-zinc-900'>
        All Posts
      </h1>
      <div className='mt-8'>
        {posts.map(({ title, slug }) => (
          <PostCard 
            key={slug}
            title={title} 
            slug={slug} 
          />
        ))}
      </div>
    </Container>
  )
}

function PostCard({ title, slug }) {
  return (
    <article>
      <h2 className='text-xl'>
        {title}
      </h2>
      <Link 
        href={`/posts/${slug}`}
        className='block mt-2'
      >
        Read More
      </Link>
    </article>
  )
}
