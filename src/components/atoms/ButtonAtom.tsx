import * as React from 'react';
import {View, Text, Pressable} from 'react-native';
import TextAtom from 'src/components/atoms/TextAtom';

interface ButtonAtomProps {
  name: string;
  onPress?: () => any;
}

const ButtonAtom: React.FC<ButtonAtomProps> = props => {
  return (
    <View
      style={{
        backgroundColor: '#FD8001',
        padding: 10,
        margin: 5,
        borderRadius: 10,
      }}>
      <Pressable onPress={props.onPress}>
        <TextAtom
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: '#FFFFFF',
            textTransform: 'uppercase',
            fontWeight: 'bold',
          }}
          text={props.name}
        />
      </Pressable>
    </View>
  );
};

export default ButtonAtom;
