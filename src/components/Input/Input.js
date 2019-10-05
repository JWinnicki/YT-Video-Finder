import React, { useState, useContext, useEffect, useCallback } from 'react';
import { withRouter } from 'react-router-dom';

import Icon from '../Icon/Icon';
import './Input.scss';
import youtube from '../../axios-yt';
import KEY from '../../api-key.js';
import { VideosContext } from '../../context/videos-context';


const Input = React.memo(props => {
    const [ term, setTerm ] = useState('');
    const { setVideos } = useContext(VideosContext);
    const { location, history } = props;


    useEffect(() => {
        console.log('RENDERING INPUT');
    })

    const onFetchVideos = useCallback(async () => {
        const response = await youtube.get('/search',{
            params: {
                q: term,
                key: KEY,
                part: 'snippet',
                maxResults: 5,
                type: 'video'
            }
        });
        //console.log(response.data.items);
        setVideos(response.data.items);
        if(location.pathname !== '/' ) {
            history.push('/');
        }
    }, [history, location, setVideos, term]);

    const onSubmitHandler = useCallback(e => {
        e.preventDefault();
        if(term !== '') {
            onFetchVideos();
        }
    }, [onFetchVideos, term])

    return (
        <form onSubmit={e => onSubmitHandler(e)}>
            <div className='Input'>
                <input className='Input-input' type='text' placeholder='Search for video!' value={term} onChange={e => setTerm(e.target.value)} />
                <button className='Input-icon' type='submit' onClick={e => onSubmitHandler(e)}>
                    <Icon size='small' icon='magnifier'  />
                </button>
            </div>
        </form>
    );
})

export default withRouter(Input);