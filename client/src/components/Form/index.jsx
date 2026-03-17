import { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  Divider,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import useStyles from "./styles";

const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null,
  );

  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  function toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  const clear = () => {
    setCurrentId(0);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
        className={classes.form}
      >
        <Typography
          variant="h6"
          sx={{
            width: "100%",
            marginBottom: 2,
            fontWeight: 600,
            background: "linear-gradient(45deg, #667eea 30%, #764ba2 90%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {currentId ? `Editing "${post?.title}"` : "Creating a Memory"}
        </Typography>
        <Divider sx={{ width: "100%", marginBottom: 2 }} />
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
          sx={{
            margin: 1,
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                borderColor: "#667eea",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#667eea",
              },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#667eea",
            },
          }}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          sx={{
            margin: 1,
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                borderColor: "#667eea",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#667eea",
              },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#667eea",
            },
          }}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
          sx={{
            margin: 1,
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                borderColor: "#667eea",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#667eea",
              },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#667eea",
            },
          }}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (comma separated)"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
          sx={{
            margin: 1,
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                borderColor: "#667eea",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#667eea",
              },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#667eea",
            },
          }}
        />
        <Box className={classes.fileInput}>
          <input
            type="file"
            onChange={async (e) => {
              const file = e.target.files[0];
              if (file) {
                const base64 = await toBase64(file);
                setPostData({ ...postData, selectedFile: base64 });
              }
            }}
            style={{
              width: "100%",
              padding: "8px",
              cursor: "pointer",
            }}
          />
        </Box>
        <Button
          variant="contained"
          className={classes.buttonSubmit}
          size="large"
          type="submit"
          fullWidth
        >
          {currentId ? "Update Memory" : "Create Memory"}
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          fullWidth
          onClick={clear}
          sx={{
            marginTop: 1,
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: "rgba(244, 67, 54, 0.1)",
              transform: "translateY(-2px)",
            },
          }}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
