const UserReducer = (
    state = {
        isLoggedIn: false,
    }, action) => {
        switch (action.type) {
            case "SET_LOGIN_STATE_FULFILLED":
                state = {
                    ...state,
                    isLoggedIn: true,
                };
                break;
            default:
                state = {
                    ...state,
                    isLoggedIn: false,
                }
        }

        return state;
};

export default UserReducer;