import { useState } from 'react';
import UrlForm from './Components/UrlForm';
import UrlList from './Components/UrlList';

const App = () => {
  const [newUrl, setNewUrl] = useState(null);

  const handleShorten = (urlData) => {
    setNewUrl(urlData);
  };

  return (
    <div className="App">
      <h1>URL Shortener</h1>
      <UrlForm onShorten={handleShorten} />
      {newUrl && (
        <div className='new-short-url'> 
          <h2>Short URL Created</h2>
          <p>Short URL: <a href={`http://localhost:5000/${newUrl.id}`} target="_blank" rel="noopener noreferrer">http://localhost:8001/{newUrl.id}</a></p>
        </div>
      )}
      <UrlList />
    </div>
  );
};

export default App;
