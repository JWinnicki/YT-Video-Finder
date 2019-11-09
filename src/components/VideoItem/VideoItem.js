import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import './VideoItem.scss';
import { getVideoDetails } from '../../store/actions/videos';

const VideoItem = props => {

    return (
        <li className='VideoItem'>
            <Link to={`/show/${props.id}`} className='VideoItem-link' onClick={() => props.onGetVideoDetails(props.id, props.title)}>
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

const mapDispatchToProps = dispatch => {
    return {
        onGetVideoDetails: (id, title) => dispatch(getVideoDetails(id, title))
    }
}

export default connect(null, mapDispatchToProps)(VideoItem);