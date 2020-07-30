//import axios from 'axios';
import {axiosWithAuth} from '../../utils/axiosWithAuth.js';
// import { ACCESS_KEY } from './../../config';

// export const NEW_REQUEST = 'NEW_REQUEST';

// export function  newRequest(newUrl) {
//   console.log('action', newUrl);
//   return {
//     type: NEW_REQUEST,
//     payload: newUrl 
//   }
// }

export const GET_FAVORITES_START = 'GET_FAVORITES_START';
export const GET_FAVORITES_SUCCESS = 'GET_FAVORITES_SUCCESS';
export const GET_FAVORITES_FAILURE = 'GET_FAVORITES_FAILURE';

export const getFavorites = () => {
  return dispatch => {
    dispatch({ type: GET_FAVORITES_START });
    axiosWithAuth()
      .get('https://hackernewsbw31.herokuapp.com/api/favorites')
      .then(res => {
        dispatch({ type: GET_FAVORITES_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_FAVORITES_FAILURE, payload: err.message });
      });
  };
};

export const ADD_FAVORITES_START = 'ADD_FAVORITES_START';
export const ADD_FAVORITES_SUCCESS = 'ADD_FAVORITES_SUCCESS';
export const ADD_FAVORITES_FAILURE = 'ADD_FAVORITES_FAILURE';

export const addFavorites = (props) => {
  return dispatch => {
    dispatch({ type: ADD_FAVORITES_START });
    axiosWithAuth()
      .put('https://hackernewsbw31.herokuapp.com/api/favorites', props)
      .then(res => {
        dispatch({ type: ADD_FAVORITES_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ADD_FAVORITES_FAILURE, payload: err.message });
      });
  };
};

export const DELETE_FAVORITES_START = 'DELETE_FAVORITES_START';
export const DELETE_FAVORITES_SUCCESS = 'DELETE_FAVORITES_SUCCESS';
export const DELETE_FAVORITES_FAILURE = 'DELETE_FAVORITES_FAILURE';

export const deleteFavorites = (props) => {
  return dispatch => {
    dispatch({ type: DELETE_FAVORITES_START });
    axiosWithAuth()
      .delete('https://hackernewsbw31.herokuapp.com/api/favorites', props)
      .then(res => {
        dispatch({ type: DELETE_FAVORITES_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: DELETE_FAVORITES_FAILURE, payload: err.message });
      });
  };
};