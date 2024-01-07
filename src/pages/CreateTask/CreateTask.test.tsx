import * as React from 'react';
import {CreateTask} from './';
import {render} from '@testing-library/react-native';

describe('Render CreateTask', () => {
  it('Should be CreateTask exist', () => {
    const {getByTestId} = render(<CreateTask />);
    const currentElement = getByTestId('CreateTask');
    expect(currentElement).toBeTruthy();
  });
});
