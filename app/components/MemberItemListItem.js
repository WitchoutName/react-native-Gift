import React, { useContext } from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import { Button } from "react-native-paper";

import Color from "../classes/Color";
import appContext from "../context/appContext";
import Activityuser from "./ActivityUser";
import Containeredimage from "./common/ContaineredImage";
import IconButton from "./common/IconButton";

const noImage =
  "https://lh3.googleusercontent.com/proxy/PtpPLE4CCGxFdkLHzhONJDXw5NVwbGT9LfNCcjr1nXkcPC6Jb1Bz6w2OXbPb6TA5jc3ndBcY9q5LR1JzBrvoZGYIP7eaT9hdnLRxJ6U8ce6tG27vh35vnftHo2qrnMwbAhAYthCVkq8eBQpaopfewnMFLeJBGmz697YMk6AgBWqYeBb_tSOmH60k-QhIt2ZpOdv4mdV4n_p7lvjhqnhRo9E4pkpIKe11UPbOoTlV3ymMNexXVc6g7HHEbDFQ5u0sJ5RdOqNaKJDIt8-YgngZuUAhRP7BuAfZC-72M10kD5R_0_nn0rK33ShHVu31ldu4Hxv_99nonR_A9h-Wh1NYN333_N7ZX7veZRemcH7GZfjBWG17p51ilbQQH6MAvm--NjVW2hwUTvOMP8CH9hY9_Dkp4KRAblKNBV8UNXeCQT_FvhBMJCaMsYiMP89rDaE6AhJhQiU3onmDAP-Fp4rIaTXGQwascLo1_8rC2spPAjB2fBCIgeZTK251Qz3xKimfD8Ugmy5P-B8S20-dozF7ZzdMxa1Yce5ZvuoN1r7Xl3T0EsspCgyFM92F7qVdCSztQQzhCxg";
const width = Dimensions.get("window").width - 20;

const IMAGE_SIZE = { height: width / 2, width: width / 2 };

const Memberitemlistitem = ({ item, members }) => {
  const { user } = useContext(appContext);
  return (
    <View style={styles.container}>
      <View style={styles.avliabilityContainer}>
        {item.checked_by ? (
          <Activityuser
            user={members.filter((m) => m.id == item.checked_by)[0]}
          />
        ) : (
          <Text>AVALIABLE</Text>
        )}
      </View>
      <View style={styles.contentContainer}>
        <Containeredimage
          imageUri={item.image_link || noImage}
          dimensions={IMAGE_SIZE}
        />
        <View style={styles.infoContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>
              {JSON.parse(item.description)}
            </Text>
          </View>
          <View style={styles.buttonGroup}>
            {item.buy_link && (
              <Button
                color={Color.successGreen}
                compact={true}
                // mode="contained"
                onPress={async () => {}}
              >
                Buy link
              </Button>
            )}
            {!item.checked_by && (
              <Button
                color={"dodgerblue"}
                compact={true}
                // mode="contained"
                onPress={async () => {}}
              >
                Tick off
              </Button>
            )}
            {item.checked_by == user.id && (
              <Button
                color={"dodgerblue"}
                compact={true}
                // mode="contained"
                onPress={async () => {}}
              >
                Cancel tick off
              </Button>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: 400,
    width: "100%",
    // alignItems: "center",
    // backgroundColor: Color.lightGray,

    padding: 10,
    // borderBottomWidth: 1,
    borderColor: Color.darkGray,
    paddingVertical: 15,
    flex: 1,
  },
  avliabilityContainer: {
    height: 30,
    width: "100%",
    backgroundColor: Color.successGreen,
  },
  contentContainer: {
    flexDirection: "row",
  },

  infoContainer: {
    width: "40%",
    flex: 1,
    marginHorizontal: 5,
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    borderBottomWidth: 2,
    paddingBottom: 5,
    borderColor: Color.lightGray,
  },
  description: {
    color: Color.darkGray,
    paddingBottom: 5,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
export default Memberitemlistitem;
