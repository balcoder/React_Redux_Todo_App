This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React Redux Todo App

Simple todo app demonstrating how to connect up redux to react. Very basic UI, but was concentrating on showing the connection process with react and redux.

### Start up script
npm start


### todos-backend
To see the backend working just run it `npx nodemon index.js` and this will start up the server on localhost:3001 then you can use httpie to make requests to it. Just install it from   [httpie](https://github.com/jakubroztocil/httpie "httpie on github")

*Note: if using windows you will have to use powershell for httpie as gitbash has some issues.*


Then run your requests like below
`http GET localhost:3001/api/todos`
