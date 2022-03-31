import CriptosApi from '../../../utils/api/CriptosApi';
import { Dispatch } from 'redux';

export const EXCHANGEINFO_REQUEST = 'EXCHANGEINFO_REQUEST';
export const EXCHANGEINFO_RESPONSE = 'EXCHANGEINFO_RESPONSE';
export const EXCHANGEINFO_RESPONSE_ERROR = 'EXCHANGEINFO_RESPONSE_ERROR';

console.log('Action')
/*export function loadExchangeInfo() {
  return async (dispatch : Dispatch) => {
    dispatch({ type: EXCHANGEINFO_REQUEST });
    await CriptosApi.exchangeInfo()
      .then(res => {
        console.log('res', res)
        dispatch({
          type: EXCHANGEINFO_RESPONSE,
          payload: {
            exchangeinfo: res.body,
          },
        });
      })
      .catch(() => {
        dispatch({
          type: EXCHANGEINFO_RESPONSE_ERROR,
        });
      });
  };
}*/

export function loadExchangeInfo() {
  return function(dispatch : Dispatch) {
      return CriptosApi.exchangeInfo().then(res => {
          dispatch({
              type: EXCHANGEINFO_RESPONSE,
              payload: {
                exchangeinfo: res.body,
              }
          });
      });
  };
}

export function reloadExchangeInfo() {
  return async (dispatch: Dispatch, getState) => {
    const { loading } = getState().shopInfo;

    if (!loading) {
      dispatch({ type: EXCHANGEINFO_REQUEST });

      await CriptosApi.exchangeInfo()
        .then(res => {
          dispatch({
            type: EXCHANGEINFO_RESPONSE,
            ...res.body,
          });
        })
        .catch(() => {
          dispatch({
            type: EXCHANGEINFO_RESPONSE_ERROR,
          });
        });
    }
  };
}
