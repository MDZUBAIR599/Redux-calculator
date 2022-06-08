import { X } from "./Action.types";
import { ADD, Decrement, Divide, Increment, Multiply, SUBTRACT } from "./Action.types";



export const reducer =(state, action)=>{
    switch(action.type){
        case Increment:{
            state.count++;
            return {...state}
        }case Decrement:{
            state.count--;
            return {...state}
        }
        case ADD :{
            state.count+=Number(state.payload)
            return{...state}
        }
        case SUBTRACT :{
            state.count-=Number(state.payload)
            return{...state}
        }
        case Multiply:{
            state.count=state.count*Number(state.payload)
          return{...state}
        }
        case X :{
            state.count=0
            state.payload=0
            return{...state}
        }
        case Divide:{
            state.count=state.count/Number(state.payload)      
            if (state.count === Infinity) {
              alert("Error in division");
              state.count = 0
              return {...state}
              } else {
                return { ...state };
              }
        }
        default:{
            return state;

        }
    }
    
};