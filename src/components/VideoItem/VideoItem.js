import React, { useContext/* , useEffect */ } from 'react';
import { Link } from 'react-router-dom';

import './VideoItem.scss';
import { VideosContext } from '../../context/videos-context';

const VideoItem = props => {
    const { getVideoDetails } = useContext(VideosContext);

    /* const getDetailsHandler = (id, title) => {
        videosContext.setId(id);
        videosContext.setTitle(title);
    } */

    /* useEffect(() => {
        console.log('RENDERING ITEM');
    }); */

    return (
        <li className='VideoItem'>
            <Link to={`/show/${props.id}`} className='VideoItem-link' onClick={() => getVideoDetails(props.id, props.title)}>
                <div className='VideoItem-imgDiv'>
                    <img alt={props.title} src={props.url} className='VideoItem-img' />
                </div>
                <div className='VideoItem-titleDiv'>
                    <p className='VideoItem-title'>{props.title}</p>
                </div>
            </Link>
        </li>
    );
}

export default VideoItem;