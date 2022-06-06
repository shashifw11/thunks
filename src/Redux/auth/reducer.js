import { authaction } from "./action";

const initial={

login:{
    isLoding:false,

    isError:false,
    data:[]
}
}
export const LoginReducer = (state=initial, action) => {
    console.log(action.payload)

    switch (action.type) {
     
      case authaction.LOGIN_SUCCESS: {
        return {
            ...state,
            login: {
              isLoading: false,
              isError: false,
              data: action.payload
            },
          };
      }
      case authaction.LOGIN_REQUEST: {
        return {
          ...state,
          login: {
            isLoading: true,
            isError: false,
            data: [],
          },
        };
      }
      case authaction.LOGIN_ERROR: {
        return {
          ...state,
          login: {
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
  