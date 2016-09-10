import React from 'react';
import {connect} from 'react-redux';
import {searchForArtist} from './../../actions/fuelSavingsActions'
class ArtistsSearch extends React.Component {

    searchKeyPress(term) {
        // console.log('hello there')
        this.props.dispatch(searchForArtist(term))
        // this.props.searchForArtist(term);
    }


    render() {
        return (<div>
            <input type="text" onChange={e => this.searchKeyPress(e.target.value)}/>
            <h2>Hello There</h2>
            <h3>{this.props.myFreakingLabel}</h3>
        </div>);
    }
}

function mapStateToProps(state){
    return {
        myFreakingLabel : state.fuelSavings.artistsSearchResults
    };
}
export default connect(mapStateToProps)(ArtistsSearch);