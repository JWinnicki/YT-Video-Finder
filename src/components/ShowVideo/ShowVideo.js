import React, { useContext/* , useEffect */ } from 'react';
import { Redirect } from 'react-router-dom';

import './ShowVideo.scss';
import VideosList from '../VideosList/VideosList';
import { VideosContext } from '../../context/videos-context';


const ShowVideo = React.memo(props => {
    const videosContext = useContext(VideosContext);

    /* useEffect(() => {
        console.log('RENDERING SHOW');
    }) */

    const renderComponent = () => {
        if(videosContext.id === null) {
            return <Redirect to='/' />
        } else {
            return(
                <div className='ShowVideo'>
                    <div className='ShowVideo-videoDiv'>
                        <div className='ShowVideo-iframeDiv'>
                            <iframe 
                                src={`https://www.youtube.com/embed/${videosContext.id}`}
                                title='video player'
                                allowFullScreen
                                className='ShowVideo-iframe'
                            />
                        </div>
                        <h2 className='ShowVideo-videoTitle'>{videosContext.title}</h2>
                    </div>
                    <div className='ShowVideo-listDiv'>
                        <VideosList />
                    </div>
                </div>
            );
        }
    }

    return (
        <div>
            {renderComponent()}
        </div>
    );
});

export default ShowVideo;
