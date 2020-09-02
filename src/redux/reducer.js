import { combineReducers } from "redux"

const initialState= {
    name: "Rhobbi Khaidir",
}

const initialState1= (state= initialState, action) => {
   return state
}
const initialStateRegister={
    title: "Register Page",
    desc: "Ini adalah desc untuk Register "
}

const RegisterReducer= (state = initialStateRegister, action) => {
    return state
}


const initialStateLogin={
    info: 'Tolong Masukan password anda',
    isLogin: true,
}



const LoginReducer= (state=initialStateLogin , action) => {
    return state
}


const reducer = combineReducers({
    LoginReducer,
    RegisterReducer,
    initialState1
})


export default reducer;