export default {
    async registerCoach(context, data) {
        const id = context.rootGetters.userId;
        const coachData = {
            firstName: data.first,
            lastName: data.last,
            areas: data.areas,
            description: data.desc,
            hourlyRate: data.rate,
        };

        const response = await fetch(`https://vuejs-dang-app-default-rtdb.firebaseio.com/coaches/${id}.json`, {
            method: 'PUT',
            body: JSON.stringify(coachData),
        });

        if (!response.ok) {
            //
        }

        context.commit('registerCoach', {
            ...coachData,
            id: id,
        });
    },
    async loadCoaches(context,payload) {
        if (!payload.forceReload && !context.getters.shouldUpdate) {
            return;
        }
        const response = await fetch(`https://vuejs-dang-app-default-rtdb.firebaseio.com/coaches.json`);
        const responseData = await response.json();
        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to load Coaches');
            throw error;
        }
        const coaches = [];
        for (const key in responseData) {
            const coach = {
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                areas: responseData[key].areas,
                description: responseData[key].description,
                hourlyRate: responseData[key].hourlyRate,
                id: key,
            };
            coaches.push(coach);
        }
        context.commit('setCoaches', coaches);
        context.commit('setFetchTimestamp');
    }
};