import {legacy_createStore} from "redux"
import { reducer } from "./reducer"

const Initialstate={
    count:0,
    payload:0
}

export const store =legacy_createStore(reducer,Initialstate)