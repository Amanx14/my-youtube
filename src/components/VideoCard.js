const VideoCard = ({ info }) => {

    const { snippet, statistics } = info;
   
    const {channelTitle, title, thumbnails} = snippet;
    return (
        <div className="m-2 w-60 shadow-md rounded-md p-3">
            <img alt="" className="rounded-md" src={thumbnails.medium.url} />
            <ul>
                <li className="font-bold py-2">{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount}</li>
            </ul>
        </div>
    );
}

export const AdVideoCard = ({ info })=> {
    return (
        <div className="p-1 m-1 border rounded-md border-red-400">
            <VideoCard info={info}/>
        </div>
    );
}

export default VideoCard;