import * as React from 'react';
import {Welcome} from './';
import {Provider} from 'react-redux';
import store from '~/redux/store';
import {render, fireEvent, waitFor} from '@testing-library/react-native';

const Component = () => (
  <Provider store={store}>
    <Welcome />
  </Provider>
);

describe('Render Welcome', () => {
  it('A page Welcome deve ser renderizada corretamente', () => {
    const {getByTestId} = render(<Component />);
    const screen = getByTestId('Welcome');
    expect(screen).toBeTruthy();
    const title = getByTestId('Welcome:title');
    expect(title.props.children[0].props.children).toEqual('Olá');
    expect(title.props.children[1].props.children).toEqual(
      'Como podemos te chamar?'
    );
    const formInput = getByTestId('FormInput:Input');
    expect(formInput).toBeTruthy();
    const btn = getByTestId('Button');
    expect(btn).toBeTruthy();
    expect(btn.props.children.props.variant).toEqual('disable');
  });

  it('Funcionamento correto full', async () => {
    const {getByTestId} = render(<Component />);
    const formInput = getByTestId('FormInput:Input');
    expect(formInput).toBeTruthy();
    const oldBtn = getByTestId('Button');
    expect(oldBtn).toBeTruthy();
    expect(oldBtn.props.children.props.variant).toEqual('disable');

    fireEvent.changeText(formInput, 'Vanesso Pudnick');

    await waitFor(() => {
      expect(formInput.props.value).toBe('Vanesso Pudnick');
    });

    const newBtn = getByTestId('Button');
    expect(newBtn).toBeTruthy();
    expect(newBtn.props.children[0].props.variant).toEqual('primary');
  });

  it('Validação error do Input ', async () => {
    const {getByTestId} = render(<Component />);
    const formInput = getByTestId('FormInput:Input');
    expect(formInput).toBeTruthy();
    fireEvent.changeText(formInput, 'Ren');

    await waitFor(() => {
      expect(formInput.props.value).toBe('Ren');
    });

    const errorComponent = getByTestId('FormInput:Error');
    expect(errorComponent).toBeTruthy();
    expect(errorComponent.props.children).toEqual('Nome muito curto');

    const btn = getByTestId('Button');
    expect(btn).toBeTruthy();
    expect(btn.props.children.props.variant).toEqual('disable');
  });
});
