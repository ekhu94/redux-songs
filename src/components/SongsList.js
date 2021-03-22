import React from 'react';
import { connect } from 'react-redux';

class SongsList extends React.Component {
    render() {
        return (
            <div>Songs List</div>
        );
    }
}

export default connect()(SongsList);