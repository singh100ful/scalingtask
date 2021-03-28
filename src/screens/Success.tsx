import {NavigationProp} from '@react-navigation/native';
import * as React from 'react';
import {View, Text} from 'react-native';
import ButtonAtom from 'src/components/atoms/ButtonAtom';
import TextAtom from 'src/components/atoms/TextAtom';
import {StackParamsList} from 'src/layout/Layout';

interface SuccessProps {
  navigation: NavigationProp<StackParamsList, 'Success'>;
}

const Success: React.FC<SuccessProps> = props => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 35,
        }}>
        <TextAtom
          style={{fontSize: 30, textAlign: 'center'}}
          text="Thank you for placing your order"
        />
      </View>
      <View style={{position: 'absolute', bottom: 0, width: '100%'}}>
        <ButtonAtom
          onPress={() => props.navigation.navigate('Home')}
          name="Continue shopping"
        />
      </View>
    </View>
  );
};

export default Success;
