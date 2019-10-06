import React, { useState, useContext,/*  useEffect, */ useCallback } from 'react';
import { withRouter } from 'react-router-dom';

import Icon from '../Icon/Icon';
import './Input.scss';
import youtube from '../../axios-yt';
import KEY from '../../api-key.js';
import { VideosContext } from '../../context/videos-context';
import Spinner from '../Spinner/Spinner';


const Input = React.memo(props => {
    const [ term, setTerm ] = useState('');
    const { fetchingStart, fetchingFailed, fetchingSuccess, loading, error } = useContext(VideosContext);
    const { location, history } = props;


    /* useEffect(() => {
        console.log('RENDERING INPUT');
    }) */

    const onFetchVideos = useCallback(async () => {
        fetchingStart();
        try {
            const response = await youtube.get('/search',{
                params: {
                    q: term,
                    key: KEY,
                    part: 'snippet',
                    maxResults: 5,
                    type: 'video'
                }
            });
            //setVideos(response.data.items);
            fetchingSuccess(response.data.items);
        } catch (error) {
            console.log(error.message);
            fetchingFailed('Something went wrong!');
        }
        
        if(location.pathname !== '/' ) {
            history.push('/');
        }
    }, [history, location, term, fetchingStart, fetchingSuccess, fetchingFailed]);

    const onSubmitHandler = useCallback(e => {
        e.preventDefault();
        if(term !== '') {
            onFetchVideos();
        }
    }, [onFetchVideos, term])

    const renderIcon = () => {
        if(loading && !error) {
            return <Spinner />
        } else {
            return (
                <button className='Input-icon' type='submit' onClick={e => onSubmitHandler(e)}>
                    <Icon size='small' icon='magnifier'  />
                </button>
            );
        }
    }
    return (
        <form onSubmit={e => onSubmitHandler(e)}>
            <div className='Input'>
                <input className='Input-input' type='text' placeholder='Search for video!' value={term} onChange={e => setTerm(e.target.value)} />
                {renderIcon()}
            </div>
        </form>
    );
})

export default withRouter(Input);