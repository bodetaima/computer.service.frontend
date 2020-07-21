import { API_URL } from "../constants";

function f(path, options) {
    const _e = API_URL;
    return new Promise((resolve, reject) => {
        fetch(`${_e}${path}`, options)
            .then(res => resolve(res.json()))
            .catch(e => reject(e));
    });
}

export default {
    get(path, options) {
        return f(path, options);
    },

    post(path, options) {
        return f(path, options);
    },
};
