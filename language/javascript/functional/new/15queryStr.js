import { join, log, map, pipe, L } from "./fx.js";

const queryStr = pipe(
  Object.entries,
  L.map(([k, v]) => `${k}=${v}`),
  join("&")
);

let obj = {
  limit: 10,
  offset: 10,
  type: "notice",
};
log(queryStr(obj));
