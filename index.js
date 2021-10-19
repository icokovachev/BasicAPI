const express= require('express')
const auth= require('express-basic-auth')
const app = express()

const port = 47;

app.listen(port, () => {
    console.log('App is listening at port 47')
});

app.use(express.urlencoded({
    extended: true
}));

app.use(
    auth({
        users: {
            'admin' : 'admin',
            'hkovachev' : '130301'
        },
        challenge: true
}));

app.get('/foo', function(req, res) {
    res.send('Hello, World!');
    console.log('"Hello, World!" request recieved...');
});

app.post('/bar', function(req, res) {
    var body = req.body;
    console.log(req.body.foo);
    res.send(req.body.foo);
});