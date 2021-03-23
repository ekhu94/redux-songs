import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

const SongDetail = props => {
    const renderSong = () => {
        if (props.selectedSong) {
            return (
                <div>
                    <h3>{props.selectedSong.title}</h3>
                    <p>Duration: {props.selectedSong.duration}</p>
                </div>
            );
        }
    }
    return (
        <div>
            <h3>Details For:</h3>
            {renderSong()}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        selectedSong: state.selectedSong
    };
};

export default connect(mapStateToProps, { selectSong })(SongDetail);