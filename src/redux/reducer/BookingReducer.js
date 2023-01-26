import {BOOKING, CANCEL} from "../types/BookingType";

const stateDefault = {
    danhSachGheDat: [

    ]
}

const BookingReducer =(state=stateDefault, action) => {
    switch(action.type) {
        case BOOKING: {
            let gheDatUpdate= [...state.danhSachGheDat];
            let index= gheDatUpdate.findIndex(gheDat =>gheDat.soGhe===action.ghe.soGhe);
            if (index !== -1) {
                gheDatUpdate.splice(index,1);
            } else {
                gheDatUpdate.push(action.ghe)
            }
            state.danhSachGheDat = gheDatUpdate;
            return {...state}
        }
        case CANCEL: {
            let gheDatUpdate=[...state.danhSachGheDat];
            let index = gheDatUpdate.findIndex(gheDat => gheDat.soGhe===action.soGhe);
            if(index !== -1) {
                gheDatUpdate.splice(index,1);
            }
            state.danhSachGheDat = gheDatUpdate;
            return {...state};
    }
    default: return {...state}
}
}
export default BookingReducer;