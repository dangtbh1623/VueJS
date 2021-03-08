import { createApp } from 'vue';
import { createStore } from 'vuex'

import App from './App.vue';

const app = createApp(App);

const counterModule = {
    namespaced: true,
    state() {
        return {
            counter: 0,
        }
    },
    mutations: {
        increment(state) {
            state.counter = state.counter + 3;
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value;
        },
    },
    getters: {
        finalCounter(state) {
            return state.counter * 2;
        },
        normalizedCounter(state, getters) {
            if (getters.finalCounter > 100)
                return 100;
            else
                return getters.finalCounter;
        },
    },
    actions: {
        increment(context) {
            setTimeout(function () {
                context.commit('increment')
            }, 2000);
        },
        increase(context, payload) {
            context.commit('increase', payload);
        },
    }
}

const store = createStore({
    modules: {
        numbers: counterModule, 
    },
    state() {
        return {
            isLoggedIn: false,
        };
    },
    mutations: {
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth;
        },
    },
    getters: {
        userIsAuthenticated(state) {
            return state.isLoggedIn;
        }
    },
    actions: {
        logIn(context) {
            context.commit('setAuth', { isAuth: true });
        },
        logOut(context) {
            context.commit('setAuth', { isAuth: false });
        }
    }
});

app.use(store);

app.mount('#app');
