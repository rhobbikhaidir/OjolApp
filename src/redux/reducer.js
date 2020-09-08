import { combineReducers } from "redux"

const initialState= {
    name: "Rhobbi Khaidir",
}

const initialState1= (state= initialState, action) => {
    return state
}
const initialStateRegister={
    form:{
        fullName: '',
        email: '',
        password: ''
    },
    title: "Register Page",
    desc: "Ini adalah desc untuk Register "
}

const RegisterReducer= (state = initialStateRegister, action) => {
    if(action.type === 'SET_TITLE'){
        return{
            ...state,
            title: 'Register ganti title'
        }
    };

    if(action.type === 'SET_FORM'){
        return{
            ...state,
                form: {
                    ...state.form,
                    [action.inputType]: action.inputValue
                }
        };
    };
    

    return state
}


const initialStateLogin={
    info: 'Tolong Masukan password anda',
    isLogin: true,
    form:{
        email: '',
        password: ''
    },
}



const LoginReducer= (state=initialStateLogin , action) => {
    if(action.type === 'SET_FORM'){
        return{
            ...state,
                form: {
                    ...state.form,
                    [action.inputType]: action.inputValue
                }
        };
    };
    
    return state
}


const reducer = combineReducers({
    LoginReducer,
    RegisterReducer,
    initialState1
})


export default reducer;