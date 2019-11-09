import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,
    error: null,
    videos: [],
    id: null,
    title: ''
}

export default (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_VIDEOS_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case actionTypes.FETCH_VIDEOS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case actionTypes.FETCH_VIDEOS_SUCCESS:
            return {
                ...state,
                loading: false,
                videos: action.videos
            }
        case actionTypes.GET_VIDEO_DETAILS:
            return {
                ...state,
                id: action.id,
                title: action.title
            }
        default:
            return state
    }
}