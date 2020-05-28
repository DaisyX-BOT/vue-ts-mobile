import Vue, { AsyncComponent } from 'vue';
import Router, { RouteConfig, Route, NavigationGuard } from 'vue-router';
const Home: AsyncComponent = (): any => import('@/components/home.vue');
const Content: AsyncComponent = (): any => import('@/components/child/content.vue');
const Index: AsyncComponent = (): any => import('@/components/child/index.vue');

Vue.use(Router);

const routes: RouteConfig[] = [

    {
        path: '/home',
        name: 'home',
        component: Home,
        children: [
            {
                path: '/content',
                name: 'content',
                component: Content,
                children: [
                    {
                        path: 'index',
                        name: 'index',
                        component: Index
                    },
                    {path: '*', redirect: '/index'}
                ]
            },
            {path: '*', redirect: '/content/index'}
        ]
    },
    {
        path: '*',
        redirect: '/home/content'
    }
];

const router: Router = new Router({
    routes
});

export default router;
