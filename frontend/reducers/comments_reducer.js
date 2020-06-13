import merge from "lodash/merge";

import {
    RECEIVE_COMMENTS,
    UPLOADING_COMMENT
} from "../actions/comment_actions";

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_COMMENTS:
            return {
                ...action.comments, ...newState
            };
        case UPLOADING_COMMENT:

        // case RECEIVE_BILL:
        //     const newBill = { [action.bill.id]: action.bill };
        //     return merge({}, state, newBill);
        // case REMOVE_BILL:
        //     delete newState[billId];
        //     return newState;
        default:
            return state;
    }
};

export default commentsReducer;
