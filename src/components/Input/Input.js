import React from 'react';
import { withRouter } from 'react-router-dom';

import Icon from '../Icon/Icon';
import './Input.scss';
import youtube from '../../axios-yt';
import KEY from '../../api-key.js';


class  Input extends React.Component {
    state = {
        videos: [],
        term: ''
    }

    onFetchVideos = async () => {
        const response = await youtube.get('/search',{
            params: {
                q: this.state.term,
                key: KEY,
                part: 'snippet',
                maxResults: 5,
                type: 'video'
            }
        });
        console.log(response.data.items);
        this.props.moveInput(response.data.items);
        if(this.props.location.pathname !== '/' ) {
            this.props.history.push('/');
        }
    }

    onSubmitHandler = e => {
        e.preventDefault();
        if(this.state.term !== '') {
            this.onFetchVideos();
            this.setState({
                term: ''
            });
        }
    }

    onChangeHandler = e => {
        this.setState({
            term: e.target.value
        });
    }

    render() {
        return (
            <form onSubmit={e => this.onSubmitHandler(e)}>
                <div className='Input'>
                    <input className='Input-input' type='text' placeholder='Search for video!' value={this.state.term} onChange={e => this.onChangeHandler(e)} />
                    <button className='Input-icon' type='submit' onClick={e => this.onSubmitHandler(e)}>
                        <Icon size='small' icon='magnifier'  />
                    </button>
                </div>
            </form>
        );
    }
} 

export default withRouter(Input);