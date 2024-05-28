import { StyleSheet } from "react-native";
import { height, width } from "../../constants/measures";


export const styles = StyleSheet.create({
    generic: {
      width: width * 0.8,
      marginBottom: 12,
    },
    form: {
      justifyContent: "flex-start",
    },
    title: {
      fontSize: 32,
      marginBottom: 16,
    },
    boxError: {
      width: width*0.8,
      height: height*0.07,
      borderRadius: 15,
      borderColor: "transparent",
      borderWidth: 5,
      elevation: 15,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row-reverse",
    },
    buttonError: {
      alignContent: "flex-end",
      marginRight: -width*0.05,
    }
  });