'use client'

import { usePosts } from '@/utils/queries';
import { Post } from '../../types/post';

export default function HomePage() {

  const { data, isLoading } = usePosts()

  if (isLoading) return <div>Carregando...</div>

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="flex flex-col gap-4">
        {data?.map((post: Post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
    </div>
  );
}
