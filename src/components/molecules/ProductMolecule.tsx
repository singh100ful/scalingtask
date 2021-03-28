import * as React from 'react';
import {View, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {DataType} from 'src/shared/types/DataType';
import {Add} from 'src/store/services/Cart';
import {RootState} from 'src/store/store';
import ButtonAtom from '../atoms/ButtonAtom';
import TextAtom from '../atoms/TextAtom';

interface ProductMoleculeProps {
  data: DataType;
  type?: string;
}

const ProductMolecule: React.FC<ProductMoleculeProps> = props => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const addToCart = () => {
    let cartstate: DataType[] = cart.cart;

    let data = {
      id: props.data.id,
      name: props.data.name,
      src: props.data.src,
      originalPrice: props.data.originalPrice,
      price: props.data.price,
      quantity: 1,
    };

    cartstate.push(data);

    dispatch(Add(cartstate));
  };

  const increment = () => {
    let cartstate: DataType[] = cart.cart;

    const product = cartstate.filter(element => {
      return element.id === props.data.id;
    });

    const productIndex = cartstate.indexOf(product[0]);

    cartstate[productIndex].quantity = cartstate[productIndex].quantity + 1;

    console.log(cartstate);
    dispatch(Add(cartstate));
  };

  const decrement = () => {
    let cartstate: DataType[] = cart.cart;

    const product = cartstate.filter(element => {
      return element.id === props.data.id;
    });

    const productIndex = cartstate.indexOf(product[0]);

    if (cartstate[productIndex].quantity !== 0) {
      cartstate[productIndex].quantity = cartstate[productIndex].quantity - 1;
    } else if (cartstate[productIndex].quantity < 1) {
      cartstate.splice(productIndex, 1);
    }

    console.log(cartstate);
    dispatch(Add(cartstate));
  };

  return (
    <View
      style={{
        padding: 10,
        backgroundColor: '#FFFFFF',
        margin: 5,
        borderRadius: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Image
          source={{uri: props.data.src}}
          style={{width: 100, height: 100, borderRadius: 10}}
        />
        <View style={{paddingHorizontal: 10}}>
          <TextAtom
            style={{fontSize: 16, textTransform: 'uppercase'}}
            text={props.data.name}
          />
          <View style={{flexDirection: 'row'}}>
            <TextAtom style={{}} text="Original Price : " />
            <TextAtom
              style={{fontSize: 16, textDecorationLine: 'line-through'}}
              text={props.data.originalPrice}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextAtom text="Deal Price : " />
            <TextAtom style={{fontSize: 16}} text={props.data.price} />
          </View>
          {props.type === 'cart' ? (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: 5,
                paddingHorizontal: 10,
                backgroundColor: '#949494',
                borderRadius: 10,
              }}>
              <Pressable onPress={decrement}>
                <Icon name="remove-sharp" size={20} color="#000000" />
              </Pressable>
              <TextAtom text={props.data.quantity} />
              <Pressable onPress={increment}>
                <Icon name="add-sharp" size={20} color="#000000" />
              </Pressable>
            </View>
          ) : (
            <ButtonAtom onPress={addToCart} name="Add to Cart" />
          )}
        </View>
      </View>
    </View>
  );
};

export default ProductMolecule;
