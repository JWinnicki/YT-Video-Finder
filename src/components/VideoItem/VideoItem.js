import React from 'react';
import { Link } from 'react-router-dom';

import './VideoItem.scss';

const VideoItem = props => {
    return (
        <li className='VideoItem'>
            <Link to={`/show/${props.id}`} className='VideoItem-link' onClick={() => props.getId(props.id, props.title)}>
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