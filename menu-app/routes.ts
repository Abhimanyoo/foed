// const myRoutes = require('next-routes')();
// myRoutes.add('organization', '/organization/:id');

// module.exports = myRoutes;

import nextRoutes from '@volst/next-routes';
const myRoutes = nextRoutes({});
myRoutes.add('organization', '/organization/:id');

export default myRoutes;
