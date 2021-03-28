import * as Action from 'src/store/actions/Actions';

export const Add = (cart: any) => ({
  type: Action.ADD_CART,
  payload: cart,
});

export const Loading = (loading: boolean) => ({
  type: Action.CART_LOADING,
  payload: loading,
});

export const Failed = (err: any) => ({
  type: Action.CART_FAILED,
  payload: err,
});

export const Delete = () => ({
  type: Action.REMOVE_CART,
  payload: [],
});
