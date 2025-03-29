import { useEffect, useState } from 'react';

type Post = {
  id: number;
  title: string;
  content: string;
};

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error('Error fetching posts:', err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">投稿一覧</h1>
      {posts.map(post => (
        <div key={post.id} className="mb-4 p-4 border rounded">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
