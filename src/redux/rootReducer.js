import { combineReducers } from 'redux'
import ProductReducer from './product/productReducer';

const rootReducer = combineReducers({
  product: ProductReducer
})

export default rootReducer