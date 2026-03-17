import { makeStyles } from "@mui/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "75%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
    transition: "transform 0.3s ease-in-out",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
    background: "linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.1)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      transform: "translateY(-8px) scale(1.02)",
      boxShadow: "0 16px 48px 0 rgba(31, 38, 135, 0.3)",
      "& $media": {
        transform: "scale(1.05)",
      },
    },
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: "8px 12px",
    borderRadius: "8px",
    backdropFilter: "blur(4px)",
    animation: "$fadeInDown 0.5s ease-in-out",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
    animation: "$fadeInUp 0.5s ease-in-out",
  },
  editButton: {
    "&:hover": {
      backgroundColor: "rgba(102, 126, 234, 0.9) !important",
    },
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
    borderRadius: "8px",
    flexWrap: "wrap",
    gap: "8px",
  },
  title: {
    padding: "0 16px",
    fontWeight: "600",
    background: "linear-gradient(45deg, #667eea 30%, #764ba2 90%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
    gap: "8px",
    "& button": {
      transition: "all 0.3s ease-in-out",
      fontWeight: 500,
      "&:hover": {
        transform: "scale(1.08)",
        backgroundColor: "rgba(102, 126, 234, 0.1)",
      },
    },
  },
  "@keyframes fadeInDown": {
    from: {
      opacity: 0,
      transform: "translateY(-10px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  "@keyframes fadeInUp": {
    from: {
      opacity: 0,
      transform: "translateY(10px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
});
