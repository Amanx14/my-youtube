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

export default VideoCard;