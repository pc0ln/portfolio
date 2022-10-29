import repoFetch from '../pages/api/project-api';

export default function ProjectCard() {
    const res = repoFetch()
    console.log(res)
    console.log('here in card')
}