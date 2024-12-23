import React, { useState } from 'react';

function App() {
  const [repoName, setRepoName] = useState('');
  const [repoStats, setRepoStats] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://api.github.com/repos/${repoName}`);
    const data = await response.json();
    setRepoStats(data);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">GitHub Repository Stats</h1>
      
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={repoName}
          onChange={(e) => setRepoName(e.target.value)}
          placeholder="owner/repository"
          className="w-full p-2 border rounded mb-2"
        />
        <button 
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Get Stats
        </button>
      </form>

      {repoStats && (
        <div className="border rounded p-4">
          <h2 className="text-xl font-bold mb-2">{repoStats.full_name}</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Stars</p>
              <p>{repoStats.stargazers_count}</p>
            </div>
            <div>
              <p className="font-semibold">Forks</p>
              <p>{repoStats.forks_count}</p>
            </div>
            <div>
              <p className="font-semibold">Open Issues</p>
              <p>{repoStats.open_issues_count}</p>
            </div>
            <div>
              <p className="font-semibold">Watchers</p>
              <p>{repoStats.watchers_count}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;