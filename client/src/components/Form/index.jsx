import { useState } from "react";
import { TextField, Button, Typography, Paper, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";
// import { createPost } from "../../api";

const Form = () => {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(postData);
    dispatch(createPost(postData));
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
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <Paper
      sx={{
        padding: 2, // theme.spacing(2)
      }}
    >
      <form
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
          sx={{ margin: 1 }}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          sx={{ margin: 1 }}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
          sx={{ margin: 1 }}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          sx={{ margin: 1 }}
        />
        <Box sx={{ width: "97%", margin: "10px 0" }}>
          <input
            type="file"
            onChange={async (e) => {
              const file = e.target.files[0];
              if (file) {
                const base64 = await toBase64(file);
                setPostData({ ...postData, selectedFile: base64 });
              }
            }}
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
          sx={{ marginBottom: 2 }}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          fullWidth
          onClick={clear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
