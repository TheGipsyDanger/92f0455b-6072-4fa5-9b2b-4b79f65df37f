import * as React from 'react';
import {RequestPermissions} from './';
import {render} from '@testing-library/react-native';

describe('Render RequestPermissions', () => {
  it('Should be RequestPermissions exist', () => {
    const {getByTestId} = render(<RequestPermissions />);
    const currentElement = getByTestId(`RequestPermissions`);
    expect(currentElement).toBeTruthy();
  });
});
