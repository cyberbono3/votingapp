import Server from 'socket.io';

//using socket.io library to utilize websocket api

export default function startServer(store) {
  const io = new Server().attach(8090);


// we assign a listener to a store, that grabs currecnt state and passes it to the server as state in JSON format (toJS)
store.subscribe(
    () => io.emit('state', store.getState().toJS())
  );



// we assign a listener to a store, that grabs currecnt state and passes it to the server as state in JSON format (toJS)
store.subscribe(
    () => io.emit('state', store.getState().toJS())
  );
  


// clients get state opun connection to the server

///io listens 'connection' at the server
io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS());
    
    //dispatch sent the actionmthis is only way to change the state
    socket.on('action', store.dispatch.bind(store));
  });
  
  
}
  
