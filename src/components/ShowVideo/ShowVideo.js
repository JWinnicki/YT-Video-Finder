import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './ShowVideo.scss';
import VideosList from '../VideosList/VideosList';


const ShowVideo = React.memo(props => {

    const renderComponent = () => {
        if(props.id === null) {
            return <Redirect to='/' />
        } else {
            return(
                <div className='ShowVideo'>
                    <div className='ShowVideo-videoDiv'>
                        <div className='ShowVideo-iframeDiv'>
                            <iframe 
                                src={`https://www.youtube.com/embed/${props.id}`}
                                title='video player'
                                allowFullScreen
                                className='ShowVideo-iframe'
                            />
                        </div>
                        <h2 className='ShowVideo-videoTitle'>{props.title}</h2>
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

const mapStateToProps = state => {
    return {
        id: state.id,
        title: state.title
    }
}

export default connect(mapStateToProps)(ShowVideo);
