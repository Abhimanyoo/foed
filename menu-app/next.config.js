const withTypescript = require('@zeit/next-typescript');

// This feels like a hack, yet I like it more than setting NODE_PATH=. before every next cli command
process.env.NODE_PATH = '.';

module.exports = withTypescript();
