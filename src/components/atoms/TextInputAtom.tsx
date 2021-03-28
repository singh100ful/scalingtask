import * as React from 'react';
import {View, Text, TextInput, TextInputProps} from 'react-native';

interface TextInputAtomProps extends TextInputProps {}

const TextInputAtom: React.FC<TextInputAtomProps> = props => {
  return (
    <View>
      <TextInput
        style={{
          borderColor: '#949494',
          borderRadius: 10,
          borderWidth: 1,
          padding: 10,
          margin: 5,
        }}
        {...props}
      />
    </View>
  );
};

export default TextInputAtom;
