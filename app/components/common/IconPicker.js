import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import Color from "../../classes/Color";
import UrlIcon from "../UrlIcon";

const selectedStyle = {
  backgroundColor: Color.lightGray,
  borderRadius: 5,
};

const IconPicker = ({
  icons,
  onSelectItem,
  selectedItem,
  color = "dodgerblue",
}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        // contentContainerStyle={}
        style={styles.scroll}
        horizontal={true}
      >
        {icons.map((icon) => (
          <TouchableWithoutFeedback
            onPress={() => onSelectItem(icon)}
            key={icon.id}
          >
            <View
              style={[
                styles.button,
                selectedItem.id == icon.id ? selectedStyle : {},
              ]}
            >
              <UrlIcon icon={icon} color={icon.hex || color} size={40} />
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
    width: "80%",
    marginTop: 15,
    // borderLeftWidth: 0.5,
    // borderRightWidth: 0.5,
    // borderWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: Color.darkGray,
  },
  scroll: { padding: 5 },
  button: {
    padding: 10,
    width: 50,
    height: 50,
    paddingHorizontal: 10,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default IconPicker;
