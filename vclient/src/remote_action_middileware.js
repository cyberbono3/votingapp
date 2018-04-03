

//Currying, we can call (function(store, next, action) { })
export default socket => store => next => action => {
    if (action.meta && action.meta.remote) {
      socket.emit('action', action);
    }
    return next(action);
  }