const posts = [
  { id: "1", title: "First Post", body: "This is first post" },
  { id: "2", title: "Second Post", body: "This is second post" },
  { id: "3", title: "Third Post", body: "This is third post" },
];

export default function PostDetails({ params }: {
  params: React.ReactNode
}) {
  const post = posts.find((p) => p.id === params);

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}