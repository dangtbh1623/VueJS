import { createRouter, createWebHistory } from 'vue-router'
import TeamsList from './components/pages/TeamsList'
import UsersList from './components/pages/UsersList'
import TeamMembers from './components/teams/TeamMembers'
import NotFound from './components/pages/NotFound'
import TeamFooter from './components/footer/TeamFooter'
import UserFooter from './components/footer/UserFooter'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { name: 'home', path: '/', redirect: '/teams' },
        { name: 'teams', meta: { needAuth: true }, path: '/teams', components: { default: TeamsList, footer: TeamFooter }, children: [{ name: 'teams-member', path: ':teamId', component: TeamMembers, props: true }] },
        { name: 'users', path: '/users', components: { default: UsersList, footer: UserFooter } },
        { name: 'notfound', path: '/:notFound(.*)', component: NotFound },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        return { left: 0, top: 0 };

    }
});

router.beforeEach(function (to, from, next) {
    if(to.meta.needAuth){

        next();
    }
    next();
});

router.beforeEach(function (to, from, next) {
    next(true);
});

export default router;