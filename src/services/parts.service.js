import req from "../utils/request";

class PartService {
    async getPartTypes() {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        return req.get("/types/frontend", options);
    }

    async getParts(type, size, page, sort) {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        return req.get(`/parts/frontend?types=${type}&size=${size}&page=${page}&sort=${sort}`, options);
    }
}

export default new PartService();
