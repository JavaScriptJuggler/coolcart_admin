import { createWebHistory, createRouter } from "vue-router";
/* imports of components */

// import ExampleComponent from './components/ExampleComponent.vue';
import login from './pages/auth/login.vue'
import register from './pages/auth/register.vue'
import DashboardLay from "./layouts/dashboardLay.vue";
import inventory from './pages/inventory.vue';
import addproducts from './pages/addproducts.vue';
import page404 from './pages/errors/404.vue'
/* routes */

const routes = [

    /* frontend routes */

    {
        path: '/login',
        name: 'login',
        component: login,
        meta: {
            checkIfLoggedIn: true,
        }
    },
    {
        path: '/register',
        name: 'register',
        component: register,
        meta: {
            checkIfLoggedIn: true,
        }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: DashboardLay,
        meta: {
            'needAuth': true
        },
        children: [
            {
                path: '/inventory',
                name: 'inventory',
                component: inventory,
                meta: {
                    'needAuth': true,
                    'pagename': 'Manage Inventory'
                }
            },
            {
                path: '/add-products',
                name: 'add-products',
                component: addproducts,
                meta: {
                    'needAuth': true,
                    'pagename': 'Add Products'
                }
            },
        ]
    },
    {
        path: '/:pathMatch(.*)',
        name: 'not-found',
        component: page404
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})
router.beforeEach((to, form, next) => {
    if (to.meta.needAuth) {
        if (sessionStorage.getItem('AUTHTOKEN') != null && typeof sessionStorage.getItem('AUTHTOKEN') != 'undefined') {
            next();
        } else {
            router.push('/login');
        }
    } else if (to.meta.checkIfLoggedIn) {
        if (sessionStorage.getItem('AUTHTOKEN') != null && typeof sessionStorage.getItem('AUTHTOKEN') != 'undefined') {
            router.push('/dashboard');
        } else {
            next()
        }
    } else {
        next();
    }
})
export default router;
