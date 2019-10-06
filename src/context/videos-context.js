import React, { useReducer } from 'react';

export const VideosContext = React.createContext({
    /* videos: [],
    fetchingStart: () => {},
    fetchingFailed: () => {},
    fetchingSuccess: () => {},
    id: null,
    setId: () => {},
    title: '',
    setTitle: () => {},
    error: null,
    setError: () => {},
    loading: false,
    getVideoDetails: () => {} */
});

const initialState = {
    loading: false,
    error: null,
    videos: [],
    id: null,
    title: ''
}

const videosReducer = (prevState, action) => {
    switch(action.type) {
        case 'FETCHING_START':
            return {
                ...prevState,
                loading: true,
                error: null
            }
        case 'FETCHING_FAILED':
            return {
                 ...prevState,
                loading: false,
                error: action.error
            }
        case 'FETCHING_SUCCESS':
            return {
                ...prevState,
                loading: false,
                videos: action.videos
            }   
        case 'GET_VIDEO_DETAILS':
            return {
                ...prevState,
                id: action.id,
                title: action.title
            }
        default: 
            throw new Error('Should never get there!');
    }
}

const VideosContextProvider = props => {
    const [ videosState, dispatch ] = useReducer(videosReducer, initialState);

    const fetchingStart = () => {
        dispatch({
            type: 'FETCHING_START'
        });
    }
    const fetchingFailed = error => {
        dispatch({
            type: 'FETCHING_FAILED',
            error: error
        });
    }
    const fetchingSuccess = videos => {
        dispatch({
            type: 'FETCHING_SUCCESS',
            videos: videos
        });
    }
    const getVideoDetails = (id, title) => {
        dispatch({
            type: 'GET_VIDEO_DETAILS',
             id: id,
             title: title
        });
    }
    return (
        <VideosContext.Provider value={{ 
            fetchingStart: fetchingStart,
            fetchingFailed: fetchingFailed,
            fetchingSuccess: fetchingSuccess, 
            videos: videosState.videos,
            getVideoDetails: getVideoDetails,
            id: videosState.id,
            title: videosState.title,
            loading: videosState.loading,
            error: videosState.error
         }}>
            {props.children}
        </VideosContext.Provider>
    );
}

export default VideosContextProvider;