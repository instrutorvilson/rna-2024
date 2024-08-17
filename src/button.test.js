import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MyButton from './button';

describe('MyButton', () => {
  it('renders correctly with the given title', () => {
    const { getByText } = render(<MyButton title="Salvar" onPress={() => {}} />);
    expect(getByText('Salvar')).toBeTruthy();
  });

  it('calls the onPress handler when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<MyButton title="Press me" onPress={onPressMock} />);

    fireEvent.press(getByText('Press me'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
