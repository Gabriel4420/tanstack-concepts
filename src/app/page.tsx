"use client";

import { InvalidatePosts, usePosts } from "@/utils/queries";
import { Post } from "../../types/post";
import { useUsersPrefetch } from "@/utils/queries";

export default function HomePage() {
  

  const handleINvalidate = () => {
     InvalidatePosts()
  };

  useUsersPrefetch();

  const { data, isLoading } = usePosts();

  if (isLoading) return <div>Carregando...</div>;

  return (
    <div className="flex flex-col items-center justify-center bg-gray-400">
      <h1 className="text-3xl font-bold">Posts</h1>
      <div className="flex flex-col gap-2 my-3 p-2 border border-black">
        <p className="block">Area de inserção de novos posts</p>
        <button className="bg-slate-800 rounded-md px-2 text-white" onClick={handleINvalidate}>Invalidar</button>
      </div>
      <div className="flex flex-col gap-2">
        {data?.map((post: Post) => (
          <p className="text-base" key={post.id}>{post.title}</p>
        ))}
      </div>
    </div>
  );
}
