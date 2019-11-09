import React from 'react';
import { connect } from 'react-redux';

import './VideosList.scss';
import VideoItem from '../VideoItem/VideoItem';


const VideosList = React.memo(props => {
    const videosList = props.videos;
    const filteredList = videosList.filter(el => el.id.videoId !== props.id)

    const renderItems = () => {
        
        if(filteredList.length > 0) {
            return filteredList.map(el => {
                return <VideoItem key={el.id.videoId} id={el.id.videoId} title={el.snippet.title} url={el.snippet.thumbnails.default.url} />
            });
        } else if(props.error && !props.loading) {
            return <p className='VideosList-errorMsg'>{props.error}</p>
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

const mapStateToProps = state => {
    return {
        videos: state.videos,
        id: state.id,
        loading: state.loading,
        error: state.error
    }
}

export default connect(mapStateToProps)(VideosList);