import axios from 'axios';
import { useState } from 'react';

const UrlForm = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/url', {
        originalUrl,
      });
      setShortUrl(response.data.shortUrl); // Assuming the response contains the short URL
    } catch (error) {
      console.error('Error generating short URL', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Original URL:
          <input
            type="url"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            required
          />
        </label>
        <button type="submit">Generate Short URL</button>
      </form>

      {shortUrl && (
        <div>
          <p>Short URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a></p>
        </div>
      )}
    </div>
  );
};

export default UrlForm;
