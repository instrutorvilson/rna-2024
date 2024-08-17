import React from 'react';
import { Button, Text } from 'react-native';

const MyButton = ({ title, onPress }) => (
  <Button title={title} onPress={onPress} />
);

export default MyButton;
