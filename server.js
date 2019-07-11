const app = require('./backend/app');

const port = process.env.PORT | 3000;

app.set('port', port);
app.listen(port, ()=> {
    console.log('listen to the port');
});
