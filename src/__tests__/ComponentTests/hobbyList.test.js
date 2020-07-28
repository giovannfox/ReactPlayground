/**
 * @author Giovann Fox
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HobbyList from "../../components/HobbyList";

describe("HobbyList tests", () => {
    describe("Component", () => {
        it("Testing list with 0 elements", () => {
            const div = document.createElement('div');
            ReactDOM.render(<HobbyList hobbies = {[]} />, div);
          });
            it("Testing list with 1 element", () => {
                const {getByText} = render (
                    <HobbyList hobbies = {[{ name: 'Guitar', key: '1'}, { name: 'Skating', key: '2'}]}></HobbyList>)
                    expect(getByText('Guitar')).toBeInTheDocument();
                    expect(getByText('Skating')).toBeInTheDocument();
              });
    });
});
