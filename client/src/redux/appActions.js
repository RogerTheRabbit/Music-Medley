import TYPES from './appTypes';

export const setPage = (newPage) => {
    return {
        type: TYPES.SET_PAGE,
        data: {
            newPage
        }
    }
}
