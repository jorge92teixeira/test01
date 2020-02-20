require('dotenv').config();
const http = require('http');
const app = require('./app');

const server = http.createServer(app);

// Listen on PORT
server.listen(process.env.PORT || 3001, () => {
  console.log(`Server running on port ${process.env.PORT || 3001}`);
});
