import React from 'react';
import {connect} from 'react-redux';
import {searchForArtist} from '../actions/actions'
class ArtistsSearch extends React.Component {

    searchKeyPress(term) {
        console.log(term)
        this.props.dispatch(searchForArtist(term))
        // this.props.dispatch(searchForArtist(term))
        // this.props.searchForArtist(term);
    }


    render() {
        return (<div>
            <input type="text" onChange={e => this.searchKeyPress(e.target.value)} value={this.props.app.searchTerm}/>
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

function mapStateToProps(state){
    return {
        app: state.app
    };
}
export default connect(mapStateToProps)(ArtistsSearch);