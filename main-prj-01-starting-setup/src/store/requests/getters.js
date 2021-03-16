export default {
    requests(state, getters, rootState, rootGetters) {
        const userId = rootGetters.userId;
        return state.requests.filter(req => req.coachId === userId);
    },
    hasRequests(state, getters) {
        return getters.requests && getters.requests.length > 0;
    },
};