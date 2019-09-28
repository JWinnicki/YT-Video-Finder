import React from 'react';
import { Redirect } from 'react-router-dom';

import './ShowVideo.scss';
import VideosList from '../VideosList/VideosList';

class ShowVideo extends React.Component {

    filterArr = () => {
        return this.props.videosList.filter(el => {
            return el.id.videoId !== this.props.selectedId
        })
    }

    renderComponent = () => {
        if(this.props.selectedId === null || this.props.selectedId === undefined) {
            return <Redirect to='/' />
        } else {
            return(
                <div className='ShowVideo'>
                    <div className='ShowVideo-videoDiv'>
                        <div className='ShowVideo-iframeDiv'>
                            <iframe 
                                src={`https://www.youtube.com/embed/${this.props.selectedId}`}
                                title='video player'
                                allowFullScreen
                                className='ShowVideo-iframe'
                            />
                        </div>
                        <h2 className='ShowVideo-videoTitle'>{this.props.title}</h2>
                    </div>
                    <div className='ShowVideo-listDiv'>
                        <VideosList videosList={this.filterArr()} getId={this.props.getId} />
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                {this.renderComponent()}
            </div>
        );
    }
}

export default ShowVideo;

/* <div className='showVideo-container'>
                    <div className=''>
                        <iframe 
                            src={`https://www.youtube.com/embed/${this.props.selectedId}`}
                            title='video player'
                            allowFullScreen
                        />
                    </div>
                    <h2>{this.props.title}</h2>
                </div> */