import { useEffect, useState } from "react"
import { YOUTUBE_API } from "../utils/constant";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
    const [videos,setVideos]=useState([]);
    const getData=async()=>{
        const data=await fetch(YOUTUBE_API);
        const json=await data.json();
        console.log(json.items);
        setVideos(json.items);
    }
    useEffect(()=>{
        getData();
    },[])
  return (
    <div>
        <div className="flex flex-wrap gap-5">
        {
            videos.map((video,i)=>(
                <VideoCard data={video} key={i}/>
            ))
        }
        </div>
    </div>
  )
}

export default VideoContainer