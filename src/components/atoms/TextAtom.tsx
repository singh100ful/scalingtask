import * as React from 'react';
import {View, Text, TextProps} from 'react-native';

interface TextAtomProps extends TextProps {
  text: string | number;
}

const TextAtom: React.FC<TextAtomProps> = props => {
  return (
    <View>
      <Text {...props}>{props.text}</Text>
    </View>
  );
};

export default TextAtom;
