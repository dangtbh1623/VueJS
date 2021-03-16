export default {
    async logIn(context, payload) {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCM7P8-7nD9sFt0ZsdYk9XDr8_MLRk3xJE', {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true,
            }),
        });
        const responseData = await response.json();
        if (!response.ok) {
            const error = new Error(responseData.error.message || 'Failed to authenticate!!!');
            throw error;
        }
        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn,
        });
    },
    async signUp(context, payload) {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCM7P8-7nD9sFt0ZsdYk9XDr8_MLRk3xJE', {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true,
            }),
        });
        const responseData = await response.json();
        if (!response.ok) {
            const error = new Error(responseData.error.message || 'Failed to authenticate!!!');
            throw error;
        }
        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn,
        });
    }

};