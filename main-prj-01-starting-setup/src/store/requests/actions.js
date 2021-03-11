export default {
    contactCoach(context,payload){
        const newRequest = {
            requestId: new Date().toISOString(),
            coachId: payload.coachId,
            userEmail: payload.email,
            message: payload.message,
        }
        context.commit('addRequests',newRequest);
    }
};