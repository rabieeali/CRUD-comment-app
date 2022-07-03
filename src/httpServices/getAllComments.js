import http from "./httpService";

export const getAllComments = () => http.get("/comments");
