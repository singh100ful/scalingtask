import {NavigationProp} from '@react-navigation/core';
import * as React from 'react';
import {ScrollView, Pressable} from 'react-native';
import {StackParamsList} from 'src/layout/Layout';
import data from 'src/shared/data.json';
import Icon from 'react-native-vector-icons/Ionicons';
import ProductMolecule from 'src/components/molecules/ProductMolecule';
import {DataType} from 'src/shared/types/DataType';
import {useDispatch} from 'react-redux';
import {Delete} from 'src/store/services/Login';

interface HomeProps {
  navigation: NavigationProp<StackParamsList, 'Home'>;
}

const Home: React.FC<HomeProps> = props => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => dispatch(Delete())}
          style={{paddingHorizontal: 10}}>
          <Icon name="log-out-outline" color="#000000" size={35} />
        </Pressable>
      ),
      headerRight: () => (
        <Pressable
          onPress={() => props.navigation.navigate('Cart')}
          style={{paddingHorizontal: 10}}>
          <Icon name="cart-outline" color="#000000" size={35} />
        </Pressable>
      ),
    });
  }, []);

  return (
    <ScrollView style={{flex: 1}}>
      {data.products.map((data: DataType, index) => {
        return <ProductMolecule key={index} data={data} />;
      })}
    </ScrollView>
  );
};

export default Home;
