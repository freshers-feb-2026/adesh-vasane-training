import Link from "next/link";


export default function Home() {
  const posts = [
  { id: "1", title: "First Post", body: "This is first post" },
  { id: "2", title: "Second Post", body: "This is second post" },
  { id: "3", title: "Third Post", body: "This is third post" },
];
  return (
    <div style={{ padding: "20px" }}>
      <h1>My Blog</h1>

      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <Link href={`/posts/${post.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}