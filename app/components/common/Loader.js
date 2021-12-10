import React, { useEffect, useRef, useState, useContext } from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet, Animated } from "react-native";
import appContext from "../../context/appContext";

const Loader = ({ duration }) => {
  const { loader } = useContext(appContext);
  const visible = loader.get;
  const [active, setActive] = useState(false);
  const sizeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  function fadeIn() {
    Animated.timing(sizeAnim, {
      toValue: 1,
      duration: duration === undefined ? 250 : duration,
      useNativeDriver: true,
    }).start();

    Animated.timing(fadeAnim, {
      toValue: 0.7,
      duration: duration === undefined ? 250 : duration,
      useNativeDriver: true,
    }).start();
  }
  function fadeOut() {
    Animated.timing(sizeAnim, {
      toValue: 0,
      duration: duration === undefined ? 250 : duration,
      useNativeDriver: true,
    }).start(() => {
      setActive(false);
    });

    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: duration === undefined ? 250 : duration,
      useNativeDriver: true,
    }).start();
  }

  useEffect(() => {
    if (visible) {
      setActive(true);
      fadeIn();
    } else fadeOut();
  }, [visible]);

  return (
    active && (
      <Animated.View style={[styles.wrap, { opacity: fadeAnim }]}>
        <Animated.View style={[{ transform: [{ scale: sizeAnim }] }]}>
          <LottieView
            autoPlay
            loop
            style={styles.loader}
            source={require("../../assets/loader.json")}
            visible={active}
          />
        </Animated.View>
      </Animated.View>
    )
  );
};

const styles = StyleSheet.create({
  wrap: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    top: 0,
    left: 0,
  },
  loader: {
    width: 150,
    height: 150,
    marginBottom: "20%",
  },
});

export default Loader;
