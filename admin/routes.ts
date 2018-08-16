import nextRoutes from '@volst/next-routes';
const myRoutes = nextRoutes({});
myRoutes.add('userForgotPassword', '/login/forgot');
myRoutes.add('userResetPassword', '/login/reset-password/:email/:resetToken');
myRoutes.add('userRegister', '/register');
myRoutes.add('userRegisterInvite', '/register/:email/:inviteToken');
myRoutes.add('accountDetails', '/account/details');
myRoutes.add('accountChangePassword', '/account/password');
myRoutes.add('restaurantCreate', '/restaurant/add');
myRoutes.add('restaurantSettings', '/restaurant/:id/settings');
myRoutes.add('restaurantDetails', '/restaurant/:id');
myRoutes.add('restaurantCardOverview', '/restaurant/:restaurantId/card');
myRoutes.add('restaurantCardCreate', '/restaurant/:restaurantId/card/add');
myRoutes.add('restaurantCardEdit', '/restaurant/:restaurantId/card/:id/edit');
myRoutes.add('restaurantUserInvite', '/restaurant/:restaurantId/user/invite');
myRoutes.add('restaurantUserOverview', '/restaurant/:restaurantId/user');
myRoutes.add('organizationDetails', '/organization/:id');
myRoutes.add('organizationCreate', '/organization/add');
myRoutes.add('organizationSettings', '/organization/:id/settings');

export default myRoutes;
