import { parts } from "./types";
import PartService from "../../services/parts.service";

function actionCreators(type, payload) {
    return {
        type,
        payload,
    };
}

export function getPartTypes() {
    console.log("hello");
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

export function getParts(size, page, sort) {
    return (dispatch) => {
        dispatch(actionCreators(parts.GET_PARTS));
        return PartService.getParts(size, page, sort).then(
            (result) => {
                dispatch(actionCreators(parts.GET_PARTS_SUCCESS, result));
            },
            (error) => {
                dispatch(actionCreators(parts.GET_PARTS_FAILURE, error));
            }
        );
    };
}
