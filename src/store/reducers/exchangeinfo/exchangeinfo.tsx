import { EXCHANGEINFO_REQUEST, EXCHANGEINFO_RESPONSE, EXCHANGEINFO_RESPONSE_ERROR } from '../../actions/exchangeinfo/exchangeinfo';

const initialState = {
  loading: false,
  exchangeinfo: null,
  loaded: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case EXCHANGEINFO_REQUEST:
      return { ...state, loading: true };
    case EXCHANGEINFO_RESPONSE:
      return { ...state, loading: false, exchangeinfo: payload.exchangeinfo };
    case EXCHANGEINFO_RESPONSE_ERROR:
      return { ...state, loading: false, loaded: true, error: true };
    default:
      return state;
  }
}

export default reducer;
