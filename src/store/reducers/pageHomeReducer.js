export default function pageHomeReducer(state = { comments: [], loading: false }, action) {
  switch (action.type) {

    // case 'UPLOADING_COMMENT':
    //   return { ...state, loading: true };

    // case 'ADDING_COMMENT':
    //   return { comments: [...state.comments, action.payload], loading: false }

    // case 'LOADING_COMMENTS':
    //   return { ...state, loading: true };

    // case 'FETCHING_COMMENTS':
    //   return { comments: action.payload, loading: false }
    
    default:
      return state;
  }
}
