import TYPES from './appTypes';
import Constants from '../Constants';

const initalState = {
    page: Constants.CHOICE_HOME_SCREEN,
}


const reducer = (state = initalState, action) => {
    switch (action.type) {
        case TYPES.SET_PAGE:
            return {
                ...state,
                page: action.data.newPage
            }

        default:
            return state
    }
}

export default reducer;
