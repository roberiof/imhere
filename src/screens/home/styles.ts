import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
  title: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48
  },
  subtitle: { 
    fontSize: 16,
    color: "#6B6B6B"
  },
  input: { 
    backgroundColor: "#1F1E25", 
    height: 56, 
    borderRadius: 5, 
    color: "#FFF",
    fontSize: 16,
    paddingHorizontal: 16,
    flex: 1
  },
  buttonText: {
    fontSize: 20, 
    color: "#FFF"
  },
  button: {
    borderRadius: 5,
    width: 56, 
    height: 56,
    backgroundColor: "#31cf67",
    alignItems: "center",
    justifyContent: "center"
  },
  form: { 
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  participants: {
    marginTop: 50
  }
});


export default styles;