import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setMessage(data.message)) // ✅ message のみ取得
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  return <h1> fssjaaaaadsfsdfs!</h1>;
}
