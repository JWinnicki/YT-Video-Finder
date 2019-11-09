import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Icon from '../Icon/Icon';
import './Input.scss';
import Spinner from '../Spinner/Spinner';
import { fetchVideos } from '../../store/actions/videos';


const Input = React.memo(props => {
    const [ term, setTerm ] = useState('');

    const onSubmitHandler = e => {
        e.preventDefault();
        if(term !== '') {
            props.onFetchVideos(term);
            if(props.location.pathname !== '/' ) {
                props.history.push('/');
            }
        }
    }

    const renderIcon = () => {
        if(props.loading && !props.error) {
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

const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchVideos: term => dispatch(fetchVideos(term))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Input));