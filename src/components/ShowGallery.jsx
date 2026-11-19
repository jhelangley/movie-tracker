import { useEffect, useState } from 'react'
import GalleryImage from './GalleryImage'
import { Link } from 'react-router-dom'

export default function ShowGallery() {
const [shows, setShows] = useState([])

useEffect(() => {
    const displayShows = async () => {
        const response = await fetch("https://api.tvmaze.com/shows");
        const data = await response.json();
        setShows(data);
    }
    displayShows();
}, [])


  return (shows.map(show => 
    <div className='shows'>
      {shows.map(show =>
      <Link to={`${show.id}`} key={show.id}>
        <GalleryImage data={show} />
        </Link>
        )}
    </div>
  ))
}
