module.exports = function(app){
    const user = require('./userController');
    const jwtMiddleware = require('../../../config/jwtMiddleware');

    // 회원

    app.get('/app/test', user.getTest);


    app.post('/app/users', user.postUsers);

    app.get('/app/users',user.getUsers); 


    app.get('/app/users/:userId', user.getUserById);


    // TODO

    app.post('/app/login', user.login);

    app.post('/app/todos/p', user.postTodo);

    app.get('/app/todos/g', user.getTodo);

    app.patch('/app/todos/:id', user.patchTodo);

    app.delete('/app/todos/:id', user.deleteTodo);
};


