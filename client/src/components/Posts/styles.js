import { makeStyles } from "@mui/styles";

export default makeStyles({
  mainContainer: {
    display: "flex",
    alignItems: "center",
  },
  smMargin: {
    margin: "8px",
  },
  actionDiv: {
    textAlign: "center",
  },
  container: {
    animation: "$fadeIn 0.6s ease-in-out",
    "& .MuiGrid-item": {
      animation: "$slideUp 0.5s ease-in-out both",
    },
    "& .MuiGrid-item:nth-child(1)": {
      animationDelay: "0.1s",
    },
    "& .MuiGrid-item:nth-child(2)": {
      animationDelay: "0.2s",
    },
    "& .MuiGrid-item:nth-child(3)": {
      animationDelay: "0.3s",
    },
    "& .MuiGrid-item:nth-child(4)": {
      animationDelay: "0.4s",
    },
    "& .MuiGrid-item:nth-child(5)": {
      animationDelay: "0.5s",
    },
    "& .MuiGrid-item:nth-child(6)": {
      animationDelay: "0.6s",
    },
  },
  "@keyframes fadeIn": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
  "@keyframes slideUp": {
    from: {
      opacity: 0,
      transform: "translateY(20px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
});
