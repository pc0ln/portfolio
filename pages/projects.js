import ProjectCard from './/api/project-api'

export default function Projects() {
    return (
    <div className='h-fit bg-inherit'>
        <div className='text-center m-2'>
            <h1 className='select-none font-bold text-6xl text-slate-200'>Projects</h1>
        </div>
        <div className='p-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-5 w-5/6 m-auto mt-8'>
            <h3 className='md:col-span-2 xl:col-span-3 font-semibold text-xl text-center text-slate-200 select-none'>Click the project cards to see the code</h3>
            <ProjectCard />
        </div>
        
    </div> 
    )
  }