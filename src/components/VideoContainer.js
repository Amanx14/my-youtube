import { useEffect } from "react"
import { YOUTUBE_API } from "../utils/constant";

const VideoContainer = () => {

  const getVideos = async ()=> {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    console.log("API data", json);
  }

  useEffect(()=> {
      getVideos();
  }, [])

  return (
    <div>
        VideoContainer
    </div>
  )
}

export default VideoContainer
