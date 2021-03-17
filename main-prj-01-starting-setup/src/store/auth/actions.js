let timer;

export default {
    async logIn(context, payload) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'logIn',
        });
    },
    async signUp(context, payload) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'signUp',
        });
    },
    async auth(context, payload) {
        const mode = payload.mode;
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCM7P8-7nD9sFt0ZsdYk9XDr8_MLRk3xJE';
        if (mode === 'signUp') {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCM7P8-7nD9sFt0ZsdYk9XDr8_MLRk3xJE';
        }
        const response = await fetch(url, {
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

        const expirationIn = +responseData.expiresIn * 1000;
        const expirationDate = new Date().getTime() + expirationIn;

        localStorage.setItem('token', responseData.idToken);
        localStorage.setItem('userId', responseData.localId);
        localStorage.setItem('tokenExpiration', expirationDate);

        timer = setTimeout(function () {
            context.dispatch('autoLogOut');
        }, expirationIn);

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
        });
    },
    tryLogIn(context) {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const tokenExpiration = localStorage.getItem('tokenExpiration');
        const expiresIn = +tokenExpiration - new Date().getTime();       
        if (token && userId) {
            if ( expiresIn <= 0) {  
                return;
            }
            timer = setTimeout(function () {
                context.dispatch('autoLogOut');
            }, expiresIn);
            context.commit('setUser', {
                token: token,
                userId: userId,
            });
        }

    },
    logOut(context) {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('tokenExpiration');
        clearTimeout(timer);
        context.commit('setUser', {
            token: null,
            userId: null,
        })
    },
    autoLogOut(context){
        context.dispatch('logOut');
        context.commit('setAutoLogOut');
    }
};