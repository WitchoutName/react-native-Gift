import Color from "../classes/Color";

export const getUserImage = (user) => {
  if (!user.username) return null;
  let color = Color.getProfileBg(user);
  return user.image_url
    ? user.image_url
    : `https://eu.ui-avatars.com/api/?background=${color.slice(
        1,
        color.length
      )}&color=fff&name=${user.username}&size=150`;
};

export const getUserName = (user) => {
  if (!user || !user.username) return "name";
  if (!user.username.includes(" ")) return user.username;
  else return user.username.slice(0, user.username.indexOf(" ") + 2) + ".";
};
