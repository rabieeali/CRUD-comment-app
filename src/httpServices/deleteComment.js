import http from "./httpService";

export const deleteComment = (id) => http.delete(`/comments/${id}`);
