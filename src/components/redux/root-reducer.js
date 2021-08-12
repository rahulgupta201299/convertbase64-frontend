import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import JsonReducer from './Json/Json-reducer'
const persistConfig={
    key: 'root',
    storage,
    blacklist: [] ,
    whitelist: ['user']
}

const rootReducer = combineReducers({
    user: JsonReducer,
})

export default persistReducer(persistConfig,rootReducer)