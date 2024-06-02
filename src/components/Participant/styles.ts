import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
 container: {
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#1F1E25",
  borderRadius: 5, 
  marginBottom: 10
 }, 
 name: { 
  color: "#FFF", 
  flex: 1,
  fontSize: 16,
  marginLeft: 20
 },
 buttonText: {
  fontSize: 20, 
  color: "#FFF",
},
button: {
  borderRadius: 5,
  width: 56, 
  height: 56,
  backgroundColor: "#E23C44",
  alignItems: "center",
  justifyContent: "center"
},
});


export default styles;