import nextRoutes from '@volst/next-routes';
const myRoutes = nextRoutes({});
myRoutes.add('organization', '/organization/:slug');
myRoutes.add('restaurant', '/restaurant/:slug/:categoryId?');
myRoutes.add('payment', '/payment');
myRoutes.add('service-worker', '/service-worker.js');

export default myRoutes;
