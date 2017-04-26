import {combineReducers} from 'redux';

const myReducer = (state={i1: 0, i2: 99}, action) => {
    switch (action.type) {
    case 'ACTION_A':
        return {
            i1: state.i1 + 1,
            i2: state.i2
        };
    default:
        return state;
    }
};

const myRouteReducer = (state=0, action) => {
    switch (action.type) {
    case 'ACTION_ROUTE':
        return state+1;
    default:
        return state;
    }
};

const rootReducer = combineReducers({
    stateA: myReducer,
    stateAbout2: myRouteReducer
});

export {rootReducer};