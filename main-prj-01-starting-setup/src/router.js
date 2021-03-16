import { createRouter, createWebHistory } from 'vue-router'
import CoachDetail from './pages/coaches/CoachDetail'
import CoachesList from './pages/coaches/CoachesList'
import CoachRegistation from './pages/coaches/CoachRegistation'
import ContactCoach from './pages/requests/ContactCoach'
import RequestsReceived from './pages/requests/RequestsReceived'
import NotFound from './pages/NotFound'
import UserAuth from './pages/auth/UserAuth'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachesList },
        {
            path: '/coaches/:id',
            component: CoachDetail,
            props: true,
            children: [
                { path: 'contact', component: ContactCoach }]
        },
        { path: '/register', component: CoachRegistation },
        { path: '/requests', component: RequestsReceived },
        { path: '/auth', component: UserAuth },
        { path: '/:notFound(.*)', component: NotFound },
    ],
});

export default router;