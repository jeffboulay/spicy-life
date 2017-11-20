
const Hapi = require('hapi');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/spicyLife', { useMongoClient: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error(err));

// Create Sauce Model
const Sauce = mongoose.model('Sauce', {text:String});

// Init Server
const server = new Hapi.Server();

// Add Connection
server.connection({
    port: 8000,
    host:'localhost',
    routes: { cors: true }
});

// mock Sauce Route
server.route({
    method:'GET',
    path:'/',
    handler: (request, reply) => {
        //reply('<h1>Hello World</h1>');
        reply([
            {
                "id": 1,
                "name": "Awesome Sauce",
                "rating": 5
            },
            {
                "id": 2,
                "name": "Bad Ass Sauce",
                "rating": 4
            }
        ]);
    }
});

// GET Sauces Route
server.route({
    method:'GET',
    path:'/sauces',
    handler: (request, reply) => {
        let sauces = Task.find((err, sauces) => {
            reply({sauces:sauces});
        });
    }
});

// POST suaces Route
server.route({
    method:'POST',
    path:'/suaces',
    handler: (request, reply) => {
        let text = request.payload.text;
        let newSuace= new suace({text:text});
        newSuace.save((err, suace) => {
            if(err) return console.log(err);
            return reply.redirect().location('suaces');
        });
    }
});

// Start Server
server.start((err) => {
    if(err){
        throw err;
    }

    console.log(`Server started at: ${server.info.uri}`);
});