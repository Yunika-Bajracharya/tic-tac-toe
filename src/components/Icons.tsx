import React from 'react';
import type {PropsWithChildren} from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type IconsProps = PropsWithChildren<{
  name: string;
}>;

const Icons = ({name}: IconsProps) => {
  switch (name) {
    case 'circle':
      // return <Icon name="circle-thin" size={38} color="blue" />;
      return <Text style={{color: '#0091F7', fontSize: 50}}>O</Text>;

    case 'cross':
      // return <Icon name="times" size={38} color="green" />;
      return <Text style={{color: '#38CC77', fontSize: 50}}>X</Text>;

    default:
      // return <Icon name="pencil" size={38} color="gray" />;
      return <Text></Text>;
  }
};

export default Icons;
