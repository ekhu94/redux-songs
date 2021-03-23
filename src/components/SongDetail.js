import React from 'react';
import { connect } from 'react-redux';

const SongDetail = props => {
    const renderSong = () => {
        if (props.selectedSong) {
            return (
                <div>
                    <h3>Details For:</h3>
                    <p>Title: {props.selectedSong.title}</p>
                    <p>Duration: {props.selectedSong.duration}</p>
                </div>
            );
        }
        return <div>Select a Song</div>
    }
    return (
        <div>
            {renderSong()}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        selectedSong: state.selectedSong
    };
};

export default connect(mapStateToProps)(SongDetail);