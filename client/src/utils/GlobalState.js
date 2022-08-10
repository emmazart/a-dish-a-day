import React, { createContext, useContext } from 'react';
import { useProductReducer } from './reducers';

// instantiate new Context object
const UserContext = createContext();
const { Provider } = UserContext;

// UserProvider func intantiates initial global state 
const UserProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        loggedIn: false, 
        userID: ''
    });

    // use this to confirm it works
    // console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
};

const useUserContext = () => {
    return useContext(UserContext);
};

export { UserProvider, useUserContext };