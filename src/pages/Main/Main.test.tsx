import * as React from 'react';
import { Main }from './';
import { render } from '@testing-library/react-native';

describe('Render Main', () => {
  it('Should be Main exist', () => {
    const { getByTestId } = render(<Main />);
    const currentElement = getByTestId(`Main`);
    expect(currentElement).toBeTruthy();
  });
});