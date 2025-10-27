import { useSelector } from "react-redux";
import Post from "./Post";
// import useStyles from "./styles";

const Posts = () => {
  // const classes = useStyles();
  const data = useSelector((state) => state.posts);
  console.log(data);
  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
      <Post />
    </>
  );
};

export default Posts;
