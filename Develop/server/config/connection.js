// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });

// module.exports = mongoose.connection;

// const mongoose = require('mongoose');

// mongoose.set('useCreateIndex', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useUnifiedTopology', true);
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useCreateIndex', true);

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks');

// module.exports = mongoose.connection;
// const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   createIndexes: true
// });

// mongoose.set('useFindAndModify', false);
// module.exports = mongoose.connection;

// const mongoose = require('mongoose');

// mongoose.set('useNewUrlParser', true);
// mongoose.set('useUnifiedTopology', true);

// mongoose.connect('mongodb://localhost/googlebooks');


// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });

// module.exports = mongoose.connection;

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/googlebooks', {
//   useNewUrlParser: true, // enable new MongoDB connection string parser
//   useUnifiedTopology: true, // enable new MongoDB Server Discovery and Monitoring engine
//   useCreateIndex: true, // create indexes using createIndex() instead of ensureIndex()
//   useFindAndModify: false // use findOneAndUpdate() instead of findAndModify()
// });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('Connected to MongoDB!');
//   // Your code here
// });

// const mongoose = require('mongoose');

// mongoose.set('debug', true);

// mongoose.set('strictQuery', false);

// mongoose
//   .connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('Successfully connected to MongoDB.'))
//   .catch((err) => console.log('Error connecting to MongoDB:', err));

const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/book-search-engine",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Connected to the database!"));

module.exports = db;
