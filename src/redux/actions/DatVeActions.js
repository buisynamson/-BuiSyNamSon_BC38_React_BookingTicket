import {BOOKING, CANCEL} from "../types/BookingType";

export const bookingSeatAction =(ghe) => {
    return {
        type: BOOKING,
        ghe
    }
}

export const cancelSeatAction = (soGhe) => {
    return {
        type: CANCEL,
        soGhe
    }
}