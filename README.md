# Votingapp


## Overview 
Client-server voting app is contructed using Redux and Immutable-js. 
This project uses test driven developement approach. It dictates 
writing the tests at the first place and application code at the second. The client part  is implemented  using React and Redux. The back end is implemented  using Node.js and Redux. Besides, the app uses the following instruments: 

*[Babel ](https://babeljs.io/)compiler of new generation Javascript                
*[Socket.io ](https://socket.io/) enables reliable communication between client and server via websockets.
*[Webpack](https://webpack.js.org/) is Javascript building tool
*[Mocha ](https://mochajs.org/) is javascript test framework.
*[Chai](https://chaijs.com/) is assertion library that can be paired with test framework e.g Mocha
*[Redux](https://redux.js.org/) is the state container for Javascript apps

## Client workflow
1. User clicks vote button, the vote action is executed.
2. Middleware transfers the action to the via Socket.io connection to the server
3. After client's  Redux handles this action , the redux state is set to 'hasVote'.
4. As soon as action reaches the server, server's redux handles action and renders it in the current results. Query handles in server store broadcasts the state snapshot to all connected clients.
SET_STATE actions are put to the store of every Client Redux. They are handled relying on updated state sent from server.



## Server workflow
1. Client transfers an action to the server via Socket.io connection.
2. Server handles it and puts into Redux store
2. Store calls reducer that handles the logic associated with this action.
3. Store updates thestate relying on returned value from reducer 
4. Server generates state event.
5. The new state is boradcaset to all connected clients incudling the action initiator 
