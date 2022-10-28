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
            <a href={item.html_url} target="_blank" key={idx}>
              <div className='border-2 p-1 bg-slate-600 rounded-md h-max'>
                <div className='p-1'>
                  <h1 className='font-bold text-center mb-[2px]'>{item.name}</h1>
                  <p className='text-center border-[1px] rounded bg-slate-500 p-[2px]'>{item.description}</p>
                  <div className='p-1'>
                    <p className='text-center bg-slate-800 border-[1px] text-white rounded w-fit p-1 mx-auto mt-1 inline-block text-xs'>{item.language}</p>
                    {item.topics.map((topic, idx) => {
                      return(<p key={idx} className='text-center border-[1px] bg-slate-800 text-white rounded w-fit p-1 mx-1 mt-1 inline-block text-xs'>{topic}</p>)
                    })}
                  </div>
                </div>
              </div>
            </a>
          );
      }})} 
    </>
  );
};
