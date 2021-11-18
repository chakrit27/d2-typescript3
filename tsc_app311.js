var role = 'user', message = '';
switch (role) {
    case 'admin':
        console.log('Welcome, admin');
        break;
    case 'user':
        //console.log('Welcome, user');
        message = 'Welcome, user';
        break;
    default:
        //console.log('You are not login');
        message = 'You are not login';
}
console.log(message);
