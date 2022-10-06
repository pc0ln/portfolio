// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import React, { useState, useEffect } from 'react';
import { Octokit } from 'octokit';

export default function ProjectCard() {
  const [repo, setRepo] = useState([]);
  const octokit = new Octokit();
  
  const fetchRepo = async () => {
    const response = await octokit.request('GET /users/{username}/repos?type=all', {
      username: 'pc0ln'
    });
    return response
  };

  useEffect(() => {
    fetchRepo().then((res) => setRepo(res.data))
  }, []);
  
  return (
    <>
      {repo.map((item, idx) => {
        if(item.name != 'pc0ln' && item.name !='test3') {
          return (
            <div className='border-2 p-1 border-green-500 h-max' key={idx}>
              <a href={item.html_url}>
              <div className='border-2 p-1'>
                <h1 className='font-bold text-center'>{item.name}</h1>
                <p className='text-center md:text-left'>{item.description}</p>
              </div>
              </a>
            </div>
          );
      }})} 
    </>
  );
};
