import { makeStyles } from "@mui/styles";

export default makeStyles({
  root: {
    "& .MuiTextField-root": {
      margin: "8px",
    },
  },
  paper: {
    padding: "16px",
    background: "linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.1)",
    borderRadius: "15px",
    animation: "$slideIn 0.6s ease-in-out",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
    padding: "12px",
    border: "2px dashed rgba(102, 126, 234, 0.3)",
    borderRadius: "8px",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      borderColor: "rgba(102, 126, 234, 0.8)",
      backgroundColor: "rgba(102, 126, 234, 0.05)",
    },
  },
  buttonSubmit: {
    marginBottom: 10,
    background: "linear-gradient(45deg, #667eea 30%, #764ba2 90%)",
    color: "white",
    fontWeight: "600",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 20px rgba(102, 126, 234, 0.4)",
    },
  },
  "@keyframes slideIn": {
    from: {
      opacity: 0,
      transform: "translateX(30px)",
    },
    to: {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
});
