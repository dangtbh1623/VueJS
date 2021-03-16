export default {
    async contactCoach(context, payload) {
        const newRequest = {
            userEmail: payload.email,
            message: payload.message,
        };

        const response = await fetch(`https://vuejs-dang-app-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`, {
            method: 'POST',
            body: JSON.stringify(newRequest),
        });

        const responseData = await response.json();

        console.log(responseData);
        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to send requests!');
            throw error;
        }

        newRequest.id = responseData.name;
        newRequest.coachId = payload.coachId;

        context.commit('addRequests', newRequest);
    },
    async fetchRequests(context) {
        const userId = context.rootGetters.userId;
        const response = await fetch(`https://vuejs-dang-app-default-rtdb.firebaseio.com/requests/${userId}.json`);

        const responseData = await response.json();
        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch requests!');
            throw error;
        }
        const requests = [];
        for (const key in responseData) {
            const request = {
                id: key,
                coachId: userId,
                message: responseData[key].message,
                userEmail: responseData[key].userEmail,
            };

            requests.push(request);
        }
        context.commit('setRequests', requests);
    }
};