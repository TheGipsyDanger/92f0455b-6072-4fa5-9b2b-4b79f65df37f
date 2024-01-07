import * as React from 'react';
import {TaskDetails} from './';
import {render} from '@testing-library/react-native';

describe('Render TaskDetails', () => {
  it('Should be TaskDetails exist', () => {
    const {getByTestId} = render(<TaskDetails />);
    const currentElement = getByTestId(`TaskDetails`);
    expect(currentElement).toBeTruthy();
  });
});
