const Initial_State={
    currentClick: false,
    currentJson: {}
}

const userReducer=(state=Initial_State,action)=>{
    switch(action.type){
        case 'SET_CLICK':
            return{
                ...state,
                currentClick: action.payload
            }
        case 'SET_JSON':
            return {
                ...state,
                currentJson: action.payload
            }
        default:
            return state
    }
}
export default userReducer