
var Hapi = require('hapi');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/spicyLife', { useMongoClient: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error(err));

// Create Sauce Model
var sauce = mongoose.model('Sauce', 
{
    name:String,
    rating:String
});

// Init Server
var server = new Hapi.Server();

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
    path:'/top-sauces',
    handler: (request, reply) => {
        var sauces = sauce.find((err, sauces) => {
            reply({sauces:sauces});
        });
    }
});

// POST suaces Route
server.route({
    method:'POST',
    path:'/top-sauces',
    handler: (request, reply) => {
        var newSauce= new sauce({
            name:request.payload.name,
            rating:request.payload.rating
        });
        newSauce.save((err, sauce) => {
            if(err) return console.log(err);
            return reply(sauce);
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