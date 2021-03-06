import * as Action from 'src/store/actions/Actions';

export const Add = (login: any) => ({
  type: Action.ADD_LOGIN,
  payload: login,
});

export const Loading = (loading: boolean) => ({
  type: Action.LOGIN_LOADING,
  payload: loading,
});

export const Failed = (err: any) => ({
  type: Action.LOGIN_FAILED,
  payload: err,
});

export const Delete = () => ({
  type: Action.REMOVE_LOGIN,
  payload: [],
});
