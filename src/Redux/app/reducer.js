import { actionType } from "./action";
const initial={

    Postdata:{
    isLoding:false,

    isError:false,
    data:[]
}
}
export const PostReducer = (state=initial, action) => {
   

    switch (action.type) {
     
      case actionType.GET_DATA_SUCCESS: {
        return {
            ...state,
            Postdata: {
              isLoading: false,
              isError: false,
              data: action.payload
            },
          };
      }
      case actionType.GET_DATA_REQUEST: {
        return {
          ...state,
          Postdata: {
            isLoading: true,
            isError: false,
            data: [],
          },
        };
      }
      case actionType.GET_DATA_ERROR: {
        return {
          ...state,
          Postdata: {
            isLoading: false,
            isError: true,
            data: []
          },
        };
      }
      default: {
        return { ...state };
      }
    }
  };