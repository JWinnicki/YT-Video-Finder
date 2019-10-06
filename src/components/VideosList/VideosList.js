import React, { useContext/* , useEffect */ } from 'react';

import './VideosList.scss';
import VideoItem from '../VideoItem/VideoItem';
import { VideosContext } from '../../context/videos-context';


const VideosList = React.memo(props => {
    const videosContext = useContext(VideosContext);
    const videosList = videosContext.videos;
    const filteredList = videosList.filter(el => el.id.videoId !== videosContext.id)
    
    /* useEffect(() => {
        console.log('RENDERING LIST');
    }) */

    const renderItems = () => {
        
        if(filteredList.length > 0 && !videosContext.error && !videosContext.loading) {
            return filteredList.map(el => {
                return <VideoItem key={el.id.videoId} id={el.id.videoId} title={el.snippet.title} url={el.snippet.thumbnails.default.url} />
            });
        } else if(videosContext.error && !videosContext.loading) {
            return <p className='VideosList-errorMsg'>{videosContext.error}</p>
        }
    }    

    return (
        <div className={`VideosList`}>
            <ul className='VideosList-list'>
                {renderItems()}
            </ul>
        </div>
    );
});

export default VideosList;