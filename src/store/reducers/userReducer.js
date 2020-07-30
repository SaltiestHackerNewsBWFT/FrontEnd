import {
  GET_FAVORITES_START,
  GET_FAVORITES_SUCCESS,
  GET_FAVORITES_FAILURE
} from '../actions/index';

export const initialState = {
  getFavorites: {
    isLoading: false,
    favorites: [],
    error: ''
  }
};

export default function userReducer (state = initialState, action) {
  switch (action.type) {

    case GET_FAVORITES_START:
      return {
        ...state,
        isLoading: true
      };
    case GET_FAVORITES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        favorites: action.payload,
        error: ''
      };
    case GET_FAVORITES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
}