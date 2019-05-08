// Define routes to component
import Home from './components/Home';

const User = resolve => {
    require.ensure(['./components/users/User'], () => {
        resolve(require('./components/users/User'))
    }, 'user');
}

const UserIndex = resolve => {
    require.ensure(['./components/users/UserIndex'], () => {
        resolve(require('./components/users/UserIndex'))
    }, 'user');
}

const UserDetails = resolve => {
    require.ensure(['./components/users/UserDetails'], () => {
        resolve(require('./components/users/UserDetails'))
    }, 'user');
}

const UserEdit = resolve => {
    require.ensure(['./components/users/UserEdit'], () => {
        resolve(require('./components/users/UserEdit'))
    }, 'user');
}
import themeHeader from './components/layouts/Header';
import ErrorPage from './components/404';

export const routes = [
    {
        path: '/', name: 'homePage', components: {
            default: Home,
            'theme-header': themeHeader
        }
    },
    {
        path: '/user', name: 'user', component: User, children: [
            { path: '', name: 'Index', component: UserIndex },
            { path: ':id', name: 'userDetails', component: UserDetails, beforeEnter: (to, from, next) => {
                console.log('Action route guards!')
                next();
            } },
            { path: ':id/edit', name: 'userEdit', component: UserEdit }
        ]
    },
    { path: '/404', name: '404ErrorPage', component: ErrorPage },
    { path: '*', redirect: '/404' }
]
