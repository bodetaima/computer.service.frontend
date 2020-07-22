import req from "../utils/request";

class PartService {
    async getPartTypes() {
        console.log("hihi");
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        return req.get("/types/frontend", options);
    }

    async getParts(size, page, sort) {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        return req.get(`/parts/frontend?size=${size}&page=${page}&sort=${sort}`, options);
    }
}

export default new PartService();
