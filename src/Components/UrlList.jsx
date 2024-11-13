import axios from 'axios';
import { useEffect, useState } from 'react';

const UrlList = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await axios.get('http://localhost:5000/url/analytics');
        setUrls(response.data);
      } catch (error) {
        console.error("Error fetching URL data", error);
      }
    };

    fetchUrls();
  }, []);

  return (
    <div>
      <h1>URL List</h1>
      {urls.map((url) => (
        <div key={url.shortId}>
          <p>Original URL: {url.originalUrl}</p>
          <p>Short URL: {url.shortUrl}</p>
        </div>
      ))}
    </div>
  );
};

export default UrlList;
