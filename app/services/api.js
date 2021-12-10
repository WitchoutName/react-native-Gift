import httpService from "./httpService";
import authService from "./authService";
import listService from "./listService";
import itemService from "./itemService";
import memberService from "./memberService";
import cacheService from "./cacheService";
import iconService from "./iconService";

export default {
  http: httpService,
  auth: authService,
  list: listService,
  item: itemService,
  member: memberService,
  cache: cacheService,
  icon: iconService,
};
