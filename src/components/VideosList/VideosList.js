import React from 'react';

import './VideosList.scss';
import VideoItem from '../VideoItem/VideoItem';

class VideosList extends React.Component {

    renderItems = () => {
        const { videosList } = this.props;
        if(videosList.length > 0) {
            return videosList.map(el => {
                return <VideoItem key={el.id.videoId} id={el.id.videoId} title={el.snippet.title} url={el.snippet.thumbnails.default.url} getId={this.props.getId} />
            });
            //console.log(videosList.snippet[0]);
        }
    }

    render() {
        return (
            <div className={`VideosList`}>
                <ul className='VideosList-list'>
                    {this.renderItems()}
                </ul>
            </div>
        );
    } 
}

export default VideosList;
// ${this.props.submited ? 'VideosList--active' : ''}