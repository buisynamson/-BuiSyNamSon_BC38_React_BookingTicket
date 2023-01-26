import {combineReducers} from 'redux';

import BookingReducer from './BookingReducer';

const rootReducer = combineReducers({ //store tổng của ứng dụng

    BookingReducer//state bài tập đặt vé
})

export default rootReducer;