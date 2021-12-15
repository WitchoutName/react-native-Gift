import Color from "../classes/Color";

export const getUserImage = (user) => {
  if (!user.username) return null;
  return user.image_url
    ? user.image_url
    : `https://avatars.dicebear.com/api/bottts/${
        user.email + user.username
      }.png?translateY=-7`;
};

export const getUserName = (user) => {
  if (!user || !user.username) return "name";
  if (!user.username.includes(" ")) return user.username;
  else return user.username.slice(0, user.username.indexOf(" ") + 2) + ".";
};
