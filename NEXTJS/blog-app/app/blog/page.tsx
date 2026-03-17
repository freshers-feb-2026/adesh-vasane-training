import React from 'react'
import Link from 'next/link';


  const posts = [
  { id: "1", title: "First Post", body: "This is first post" },
  { id: "2", title: "Second Post", body: "This is second post" },
  { id: "3", title: "Third Post", body: "This is third post" },
];
  
export default function PostsPage() {
  return (
    <div>
      <h1>All Posts</h1>

      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <Link href={`/posts/${post.id}`}>View Post</Link>
        </div>
      ))}
    </div>
  );
}
