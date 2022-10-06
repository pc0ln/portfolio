import Navbar from '../components/navbar'
import ProjectCard from './/api/project-api'

export default function Projects() {
    return (
    <div>
        <Navbar />
        {/**List of projects in a responsive way so its easy to add projects */}
        <div className='border-2 border-pink-400 text-center m-2'>
            <h1 className='font-bold text-6xl'>Projects</h1>
        </div>
        <div className='border-2 border-red-500 p-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-5 w-5/6 m-auto mt-10'>
            <ProjectCard />
        </div>
        
    </div> 
    )
  }