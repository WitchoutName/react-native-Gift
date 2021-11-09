import AsyncStorage from "@react-native-async-storage/async-storage";

const cacheKey = "CACHE";

let liveCache = {};
async function initCache(wipe = false) {
  // wipe = true;
  if (wipe) {
    await AsyncStorage.setItem(cacheKey, "{}");
    return;
  }
  liveCache = { ...JSON.parse(await AsyncStorage.getItem(cacheKey)) } || {};
  // console.log("liveCache: ", liveCache);
}
initCache();

async function setCache(key, value) {
  // console.log("setCahce: ", key);
  try {
    liveCache[key] = value;
    await AsyncStorage.setItem(cacheKey, JSON.stringify(liveCache));
    // console.log("liveCache: ", liveCache);
  } catch (error) {
    throw new Error("Error storing cache.");
  }
}

function getCache(key) {
  try {
    // console.log("live key:", key, liveCache[key]);
    return liveCache[key];
  } catch (error) {
    console.log("Error getting cache: ", error);
    // throw new Error("Error getting cache: ", error);
  }
}

const setObject = async (object, objectName, del = false) => {
  let c = getCache(objectName);
  // console.log("cacheObject: ", c && c.map((i) => i.id));
  let objects = c || [];
  // console.log(
  //   "objects: ",
  //   objects.map((i) => i)
  // );
  // console.log("object: ", object);
  // console.log(
  //   "object in objects: ",
  //   !!objects.filter((l) => l.id == object.id).length,
  //   del
  // );
  if (!!objects.filter((l) => l.id == object.id).length) {
    for (let l of objects) {
      if (l.id == object.id) {
        const newObject = del ? {} : { ...l, ...object };
        objects[objects.indexOf(l)] = newObject;
        const same = JSON.stringify(l) === JSON.stringify(newObject);
        // console.log(JSON.stringify(l), JSON.stringify(newObject));
        // console.log("old:", l);
        if (!same) {
          // console.log("oldo: ", l);
          // console.log("newo: ", newObject);
        }
        // console.log("updated: ", objects[objects.indexOf(newObject)]);
      }
    }
  } else {
    // console.log("new: ", object);
    objects.push(object);
  }
  setCache(
    objectName,
    objects.filter((l) => !!Object.keys(l).length)
  );
};

const mapAndUpdateListAttrs = (oldObject, newObject, attrs, set = true) => {
  attrs.forEach((attr) => {
    let buffer = [];
    for (let item of newObject[attr.name]) {
      attr.set(item);
      // console.log("upd: ", item);
      buffer.push(item.id);
    }
    newObject[attr.name] = [...buffer];
  });
};

const setObjectWithListAttr = async (object, objectMethods, attrs) => {
  const oldObject = await objectMethods.get();
  // console.log("oldObject: ", oldObject);
  if (!oldObject) {
    mapAndUpdateListAttrs({ ...object }, object, attrs);
    await objectMethods.set(object);
    return;
  }
  let newObject = { ...object };

  mapAndUpdateListAttrs(oldObject, newObject, attrs);

  await objectMethods.set(newObject);
  attrs.forEach((attr) => {
    oldObject[attr.name]
      .filter((i) => !newObject[attr.name].includes(i.id))
      .forEach((i) => {
        attr.set({ id: i.id }, true);
      });
  });
};

const getObjectsByAttr = (groupName, attr, value) => {
  return (getCache(groupName) || []).filter((l) => l[attr] == value);
};
const getObjectById = (groupName, id) => {
  const obj = getObjectsByAttr(groupName, "id", id);

  if (obj instanceof Array && obj.length) return obj[0];
  return null;
};

const setList = async (list, del = false) => {
  // console.log("updated: ", list);
  if (del) return await setObject(list, "lists", true);
  setObjectWithListAttr(
    list,
    {
      get: async () => getDetailedList(list.id),
      set: async (n) => {
        await setObject(n, "lists");
      },
    },
    [
      {
        name: "item_set",
        set: setItem,
      },
      {
        name: "members",
        set: setMember,
      },
    ]
  );
  // console.log("liveCache: ", liveCache);
  // console.log("setCache", JSON.parse(await AsyncStorage.getItem(cacheKey)));

  // const item_set = list.item_set.map((i) => {
  //   setItem(i);
  //   return i.id;
  // });
  // const members = list.members.map((m) => {
  //   setMember(m);
  //   return m.id;
  // });
  // setObject({ ...list, item_set, members }, "lists", del);
};

const setItem = async (item, del = false) => {
  setObject(item, "items", del);
};

const setMember = async (member, del = false) => {
  setObject(member, "members", del);
};

const getLists = async () => {
  return getCache("lists");
};

const getDetailedList = (id) => {
  let list = getObjectById("lists", id);
  //console.log("looking for cached list");
  if (list) {
    const item_set = list.item_set.map((i) => getObjectById("items", i));
    const members = list.members.map((m) => getObjectById("members", m));
    return { ...list, item_set, members };
  }
  return null;
};

const setUser = async (user) => {
  setObjectWithListAttr(
    user,
    {
      get: async () => getCache("user"),
      set: async (n) => {
        await setCache("user", n);
      },
    },
    [
      {
        name: "item_set",
        set: setItem,
      },
    ]
  );
  //   const oldUser = getCache("user");
  //   const newUser = {
  //     ...user,
  //     item_set: user.item_set.map((i) => {
  //       setItem(i);
  //       return i.id;
  //     }),
  //   };
  //   setCache("user", newUser);
  //   oldUser.item_set
  //     .filter((i) => !newUser.item_set.includes(i))
  //     .forEach((i) => {
  //       setItem({ id: i }, true);
  //     });
};

export default {
  setList,
  getLists,
  getDetailedList,
  setItem,
  setMember,
  setUser,
};
