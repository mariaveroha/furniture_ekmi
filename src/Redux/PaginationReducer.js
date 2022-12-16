const PAGINATION_ACTION = 'PAGINATION_ACTION'
const CURRENT_PAGE_ACTION = 'CURRENT_PAGE_ACTION'
const PER_PAGE_ACTION = 'PER_PAGE_ACTION'
const initialState = {
    currentPage: 1,
    perPage: 9,
    totalCount: 0
}

export default function PaginationReducer(state = initialState, action) {
    switch (action.type) {
        case PAGINATION_ACTION:
            return {
                ...state,
                totalCount: action.payload
            }
        case CURRENT_PAGE_ACTION:
            return {
                ...state,
                currentPage: action.payload
            }
        default:
            return state
    }
}
export const paginationFunction = (count) => ({ type: PAGINATION_ACTION, payload: count })

export const CurrentPageFunction = (page) => ({type: CURRENT_PAGE_ACTION, payload: page})
