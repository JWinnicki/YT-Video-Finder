import React, { useState } from 'react';

export const VideosContext = React.createContext({
    videos: [],
    setVideos: () => {},
    id: null,
    setId: () => {},
    title: '',
    setTitle: () => {}
});

const VideosContextProvider = props => {

    const [ videosArr, setVideos ] = useState([]);
    const [ videoId, setVideoId ] = useState('');
    const [ title, setTitle ] = useState('');

    const videosHandler = arr => {
        setVideos(arr);
    }
    const getIdHandler = id => {
        setVideoId(id);
    }
    const getTitleHandler = title => {
        setTitle(title);
    }
    return (
        <VideosContext.Provider value={{ 
            setVideos: videosHandler, 
            videos: videosArr,
            setId: getIdHandler,
            id: videoId,
            title: title,
            setTitle: getTitleHandler
         }}>
            {props.children}
        </VideosContext.Provider>
    );
}

export default VideosContextProvider;