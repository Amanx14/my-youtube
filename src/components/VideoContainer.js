import { useEffect, useState } from "react"
import { YOUTUBE_API } from "../utils/constant";
import VideoCard from "./VideoCard";

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    console.log("API data", json);

    setVideos(json.items);

  }

  useEffect(() => {
    getVideos();
  }, [])

  return (
    <div className="flex flex-wrap">
      {
        videos.map( (video) => <VideoCard key={video.id} info={video} />)
      }
    </div>
  )
}

export default VideoContainer
