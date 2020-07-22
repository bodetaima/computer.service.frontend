import { parts } from "../actions/types";

function partReducers(state = {}, action) {
    const { payload, type } = action;
    switch (type) {
        case parts.GET_PART_TYPES:
            return {
                ...state,
                pending: true,
            };
        case parts.GET_PART_TYPES_SUCCESS:
            return {
                ...state,
                pending: false,
                partTypes: payload,
            };
        case parts.GET_PART_TYPES_FAILURE:
            return {
                ...state,
                pending: false,
                error: payload,
            };
        case parts.GET_PARTS:
            return {
                ...state,
                pending: true,
            };
        case parts.GET_PARTS_SUCCESS:
            return {
                ...state,
                pending: false,
                parts: payload.parts,
                size: payload.size,
                page: payload.page,
                totalPages: payload.totalPages,
            };
        case parts.GET_PARTS_FAILURE:
            return {
                ...state,
                pending: false,
                error: payload,
            };
        default:
            return state;
    }
}

export { partReducers };
