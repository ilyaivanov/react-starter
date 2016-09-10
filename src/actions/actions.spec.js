import * as ActionTypes from '../constants/actionTypes';
import * as ActionCreators from './actions';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai, {expect} from 'chai';


chai.use(sinonChai);

describe('Actions', () => {

    let term = "foo";

    it('should create an action to save fuel savings', () => {
        const dispatch = sinon.spy();
        const expected = {
            type: ActionTypes.SEARCH_ARTIST,
            searchTerm: "foo"
        };

        ActionCreators.searchForArtist(term)(dispatch);
        expect(dispatch).to.have.been.calledWith(expected);
    });


    //
    // xit('should create an action to calculate fuel savings', () => {
    //     const fieldName = 'newMpg';
    //     const value = 100;
    //     const actual = ActionCreators.calculateFuelSavings(appState, fieldName, value);
    //     const expected = {
    //         type: ActionTypes.CALCULATE_FUEL_SAVINGS,
    //         dateModified,
    //         settings: appState,
    //         fieldName,
    //         value
    //     };
    //
    //     expect(actual).to.deep.equal(expected); // Notice use of deep because it's a nested object
    //     // expect(actual).to.equal(expected); // Fails. Not deeply equal
    // });
});
