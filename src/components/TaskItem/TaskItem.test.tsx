import * as React from 'react';
import {TaskItem} from './';
import {render} from '@testing-library/react-native';

describe('Render TaskItem', () => {
  it('Should be TaskItem exist', () => {
    const {getByTestId} = render(<TaskItem />);
    const currentElement = getByTestId(`TaskItem`);
    expect(currentElement).toBeTruthy();
  });
});
