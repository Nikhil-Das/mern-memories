import { useSelector } from "react-redux";
import Post from "./Post";
import useStyles from "./styles";
import { Grid, CircularProgress } from "@mui/material";

const Posts = () => {
  const classes = useStyles();
  const { posts = [] } = useSelector((state) => state.posts);
  // console.log(data.posts);
  return (
    <>
      {!posts.length ? (
        <CircularProgress />
      ) : (
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {posts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </Grid>
      )}
    </>
  );
};

export default Posts;
