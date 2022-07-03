import http from "./httpService";

export const postComment = (data) => http.post("/comments", data);
    