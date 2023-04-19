import { ACTION_TYPE } from "../ActionType/ActionType";

export const inittialState = {
    loading:false,
    products:[],
    error:false,
    cart:[],
    whislist:[],
} 
export const ProductReducer=(state,action)=>{
    switch (action.type) {
        case ACTION_TYPE.FETCHING_START:
          return{
            ...state,
            loading:true,
          }
          case ACTION_TYPE.FETCHING_SUCCESS:
            return{
                ...state,
                loading:false,
                products:action.payload
            }
            case ACTION_TYPE.FETCHING_ERROR:
                return{
                    ... state,
                    loading:false,
                    error:true
                }
            case ACTION_TYPE.ADD_TO_CARD:
                return{
                    ... state,
                   cart:[...state.cart,action.payload]
                }
    
        default:
            state;
    }
}