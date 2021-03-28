import {NavigationProp} from '@react-navigation/native';
import * as React from 'react';
import {View, ScrollView, Modal, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import ButtonAtom from 'src/components/atoms/ButtonAtom';
import TextAtom from 'src/components/atoms/TextAtom';
import TextInputAtom from 'src/components/atoms/TextInputAtom';
import ProductMolecule from 'src/components/molecules/ProductMolecule';
import {StackParamsList} from 'src/layout/Layout';
import {DataType} from 'src/shared/types/DataType';
import {Delete} from 'src/store/services/Cart';
import {RootState} from 'src/store/store';

interface CartProps {
  navigation: NavigationProp<StackParamsList, 'Cart'>;
}

const Cart: React.FC<CartProps> = props => {
  const cart = useSelector((state: RootState) => state.cart);
  const [modal, setModal] = React.useState(false);
  const dispatch = useDispatch();

  const paymentSubmit = async () => {
    await dispatch(Delete());
    setModal(false);
    props.navigation.navigate('Success');
  };

  return (
    <View style={{flex: 1}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModal(!modal);
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 10,
              alignItems: 'center',
              shadowColor: '#000',
              width: '90%',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}>
            <View style={{alignSelf: 'flex-end'}}>
              <Icon
                onPress={() => setModal(false)}
                name="close"
                size={30}
                color="#000000"
              />
            </View>
            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 10,
                width: '90%',
              }}>
              <TextInputAtom
                placeholder="Enter Card Details"
                keyboardType="number-pad"
              />
              <ButtonAtom onPress={paymentSubmit} name="Submit" />
            </View>
          </View>
        </View>
      </Modal>
      <ScrollView>
        {cart.cart.length !== 0 ? (
          cart.cart.map((data: DataType, index: number) => {
            return <ProductMolecule key={index} data={data} type="cart" />;
          })
        ) : (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Icon name="cart-outline" size={95} color="#f00" />
            <TextAtom style={{fontSize: 30}} text="You Cart is Empty" />
          </View>
        )}
      </ScrollView>
      <View style={{position: 'absolute', bottom: 0, width: '100%'}}>
        {cart.cart.length !== 0 ? (
          <ButtonAtom onPress={() => setModal(true)} name="Checkout" />
        ) : null}
      </View>
    </View>
  );
};

export default Cart;
