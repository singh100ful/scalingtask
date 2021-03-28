import {DataType} from 'src/shared/types/DataType';
import * as Action from 'src/store/actions/Actions';

interface CartState {
  loading: boolean;
  err: any;
  cart: DataType[];
}

const Cart = (
  state: CartState = {
    loading: false,
    err: null,
    cart: [],
  },
  action: any,
) => {
  switch (action.type) {
    case Action.ADD_CART:
      return {...state, loading: false, err: null, cart: action.payload};

    case Action.CART_LOADING:
      return {...state, loading: true, err: null, cart: []};

    case Action.CART_FAILED:
      return {...state, loading: false, err: action.payload, cart: []};

    case Action.REMOVE_CART:
      return {...state, loading: false, err: null, cart: []};

    default:
      return state;
  }
};

export default Cart;
