import { createStore } from 'vuex'

import coachesModule from './coaches/index';
import requestsModule from './requests/index';
import AuthModule from './auth/index';

const store = createStore({
    modules: {
        coaches: coachesModule,
        requests: requestsModule,
        auth: AuthModule,
    },
});

export default store;