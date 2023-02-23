import IncreDecrementno from "./incDec";
import MulDivno from "./MulDiv";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    IncreDecrementno,
    MulDivno
})

export default rootReducer