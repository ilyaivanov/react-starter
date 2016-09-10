import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import ArtistsSearch from './ArtistsSearchPage';

describe('Rendering a naive ArtistsSearch', function () {
    it('should contain a Hello There header', function () {
        const wrapper = shallow(<ArtistsSearch/>);
        const actual = wrapper.find('h2').text();

        const expected = 'Hello There';

        expect(actual).to.equal(expected);
    });
});