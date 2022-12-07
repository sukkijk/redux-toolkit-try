import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducer'
const store = configureStore({
    reducer:{
        addstates:rootReducer
    }
})
export default store;