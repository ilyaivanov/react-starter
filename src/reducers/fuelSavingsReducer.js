import {SEARCH_ARTIST} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function fuelSavingsReducer(state = initialState, action) {
    let newState;

    switch (action.type) {
        case SEARCH_ARTIST:
            newState = objectAssign({}, state);

            newState.isLoadingArtists = !action.status;

            //request has been initiated
            if(newState.isLoadingArtists)
            {
                newState.artists = [];
                newState.searchTerm = action.searchTerm;
                let counter = newState.counter ? newState.counter + 1 : 1;
                newState.counter = counter;
            }
            else{
                newState.artists = action.artists;
            }

            //TODO: add error handling
            newState.artistsSearchResults = newState.counter + " requests made (" + newState.searchTerm + ")";

            return newState;
        default:
            return state;
    }
}
