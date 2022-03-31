import request from 'superagent';

import { API_BASE_URL } from './Constants';

const EXCHANGEINFO_API_BASE_URL = `${API_BASE_URL}?fields=id,slug,symbol,metrics/market_data/price_usd`;
console.log('EXCHANGEINFO_API_BASE_URL: ', EXCHANGEINFO_API_BASE_URL)
export default {
  exchangeInfo() {
    return request.get(`${EXCHANGEINFO_API_BASE_URL}`);
  },
};
