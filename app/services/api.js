import authService from "./authService";
import listService from "./listService";
import itemService from "./itemService";
import memberService from "./memberService";
import cacheService from "./cacheService";

export default {
  auth: authService,
  list: listService,
  item: itemService,
  member: memberService,
  cache: cacheService,
};
