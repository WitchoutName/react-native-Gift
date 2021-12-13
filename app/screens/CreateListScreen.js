import React, { useState, useEffect, useRef, useContext } from "react";
import { View, StyleSheet, Button, Image } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/common/forms";
import appContext from "../context/appContext";
import Color from "../classes/Color";
import FormIconPicker from "../components/common/forms/FormIconPicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  icon: Yup.object().required().nullable().label("Icon"),
  color: Yup.object().required().nullable().label("Color"),
});

const Createlistscreen = ({ navigation, route }) => {
  const ctx = useContext(appContext);

  const isEditMode = route.params.mode == "edit";
  const list = isEditMode
    ? ctx.lists.filter((l) => l.id == route.params.id)[0]
    : {};
  const initialValues = {
    title: isEditMode ? list.title : "",
    color: isEditMode
      ? list.theme_color
      : ctx.theme.themeColors[0] || { id: 1 },
    icon: isEditMode ? list.icon : ctx.theme.listIcons[0] || { id: 1 },
  };

  const [color, setColor] = useState(
    isEditMode
      ? list.theme_color.hex
      : ctx.theme.themeColors[0]
      ? ctx.theme.themeColors[0].hex
      : "#B76E5F"
  );

  const handleOnSubmit = async (values, { setFieldError }) => {
    const nonEditableAttrs = isEditMode ? { id: list.id } : {};
    const { data, status } = await ctx.listMethods.manageList({
      title: values.title,
      icon: values.icon.id,
      theme_color: values.color.id,
      ...nonEditableAttrs,
    });
    if (status === 400)
      Object.keys(data.errors).map((x) => {
        setFieldError(x, data.errors[x]);
      });
    else navigation.goBack();
  };

  return (
    <View style={styles.form}>
      <AppForm
        initialValues={initialValues}
        onSubmit={handleOnSubmit}
        enableReinitialize
        validationSchema={validationSchema}
        style={styles.form}
      >
        <AppFormField
          placeholder="Title"
          autoCapitalize="none"
          autoCorrect={false}
          name="title"
        />
        <FormIconPicker
          items={ctx.theme.themeColors}
          name="color"
          setColor={setColor}
        />
        <FormIconPicker items={ctx.theme.listIcons} name="icon" color={color} />
        <SubmitButton title={isEditMode ? "Update" : "Create"} />
      </AppForm>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    alignItems: "center",
    padding: 0,
    paddingTop: 20,
    margin: 0,
    width: "100%",
    flex: 1,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: Color.white,
  },
  close: {
    // position: "absolute",
    left: 0,
    margin: 5,
  },
  closeWrap: {
    width: "100%",
  },
  heading: {
    fontSize: 24,
    color: Color.blueText,
    paddingBottom: 10,
  },
});

export default Createlistscreen;
