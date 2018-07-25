import nextRoutes from '@volst/next-routes';
const myRoutes = nextRoutes({});
myRoutes.add('login', '/login');
myRoutes.add('restaurant', '/restaurant/:id');

export default myRoutes;
