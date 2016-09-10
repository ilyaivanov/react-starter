import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {searchForArtist} from '../actions/actions';

class ArtistsSearch extends React.Component {

    render() {
        return (<div>
            <input type="text"
                   onChange={e => this.props.searchForArtist(e.target.value)}
                   value={this.props.app.searchTerm}/>
            <h2>Hello There</h2>
            <h3>{this.props.app.artistsSearchResults}</h3>
            <div>
                {this.props.app.artists.map(ar => <div key={ar.id}>{ar.name}</div>)}
            </div>

            <div>
                {this.props.app.isLoadingArtists && <div><b>LOADING...</b></div>}
            </div>
        </div>);
    }
}

ArtistsSearch.propTypes = {
    searchForArtist: PropTypes.func.isRequired,
    app: PropTypes.object.isRequired
};

let mapStateToProps = state => ({app: state.app});

let mapDispatchToPros = dispatch => ({
    searchForArtist: term => dispatch(searchForArtist(term))
});

export default connect(mapStateToProps, mapDispatchToPros)(ArtistsSearch);