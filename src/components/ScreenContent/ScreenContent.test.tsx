import * as React from 'react';
import { ScreenContent }from './';
import { render } from '@testing-library/react-native';

describe('Render ScreenContent', () => {
  it('Should be ScreenContent exist', () => {
    const { getByTestId } = render(<ScreenContent />);
    const currentElement = getByTestId(`ScreenContent`);
    expect(currentElement).toBeTruthy();
  });
});