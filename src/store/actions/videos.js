import * as actionTypes from './actionTypes';
import KEY from '../../api-key';
import youtube from '../../axios-yt';

export const fetchVideosStart = () => {
    return {
        type: actionTypes.FETCH_VIDEOS_START
    }
}

export const fetchVideosFail = error => {
    return {
        type: actionTypes.FETCH_VIDEOS_FAIL,
        error: error
    }
}

export const fetchVideosSuccess = videos => {
    return {
        type: actionTypes.FETCH_VIDEOS_SUCCESS,
        videos: videos
    }
}

export const fetchVideos = term => {
    return async dispatch => {
        dispatch(fetchVideosStart());
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
            dispatch(fetchVideosSuccess(response.data.items));
        } catch(error) {
            console.log(error.message);
            dispatch(fetchVideosFail('Something went wrong'));
        }
    }
}

export const getVideoDetails = (id, title) => {
    return {
        type: actionTypes.GET_VIDEO_DETAILS,
        id: id,
        title: title
    }
}