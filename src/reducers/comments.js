// Here we're performing a reducer composition

// A subreducer
function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, {
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ];
    default:
      return state;
  }
}

// The main reducer
function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      // current state
      ...state,
      // overrides this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    };
  }

  return state;
}

export default comments;