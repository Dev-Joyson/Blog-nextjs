"use client"
import { use, useEffect, useState } from "react";

export default function Post({params}) {

  const {id} = use(params);

  const[post, setPost] = useState(null);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL+`/post/${id}`)
    .then(res => res.json())
    .then(res => setPost(res))
  },[])

  return (
    <>
{
      post && <main className="container mx-auto px-4 py-6">
        <h2 className="text-4xl font-bold mb-4">{post.title}</h2>
        <p className="text-gray-500">{post.created_at_formatted}</p>
        <img width={500} height={400} src={post.image} alt="Post Image" className="my-4" />
        <p>
          {post.description}
        </p>
      </main>
}
    </>
  );
}
