import { parts } from "./types";
import PartService from "../../services/parts.service";

function actionCreators(type, payload) {
    return {
        type,
        payload,
    };
}

export function getPartTypes() {
    return (dispatch) => {
        dispatch(actionCreators(parts.GET_PART_TYPES));
        return PartService.getPartTypes().then(
            (result) => {
                dispatch(actionCreators(parts.GET_PART_TYPES_SUCCESS, result));
            },
            (error) => {
                dispatch(actionCreators(parts.GET_PART_TYPES_FAILURE, error));
            }
        );
    };
}

export function getParts(type, size, page, sort) {
    return (dispatch) => {
        dispatch(actionCreators(parts.GET_PARTS));
        return PartService.getParts(type, size, page, sort).then(
            (result) => {
                dispatch(actionCreators(parts.GET_PARTS_SUCCESS, result));
            },
            (error) => {
                dispatch(actionCreators(parts.GET_PARTS_FAILURE, error));
            }
        );
    };
}
