import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Chip,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import moment from "moment";
import { useDispatch } from "react-redux";

import { likePost, deletePost } from "../../../actions/posts";
import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          post.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {post.creator}
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{
            color: "white",
            backgroundColor: "rgba(102, 126, 234, 0.6)",
            borderRadius: "50%",
            minWidth: "40px",
            height: "40px",
            padding: 0,
            transition: "background-color 0.3s ease-in-out",
          }}
          size="small"
          onClick={() => setCurrentId(post._id)}
          className={classes.editButton}
        >
          <EditIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        {Array.isArray(post.tags) &&
          post.tags.map((tag) => (
            <Chip
              key={tag}
              label={`#${tag.trim()}`}
              size="small"
              sx={{
                backgroundColor: "rgba(102, 126, 234, 0.2)",
                color: "#667eea",
                fontWeight: 500,
              }}
            />
          ))}
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {post.title}
      </Typography>
      <CardContent sx={{ paddingBottom: 0 }}>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likePost(post._id))}
          startIcon={<ThumbUpAltIcon fontSize="small" />}
        >
          Like ({post.likeCount || 0})
        </Button>
        <Button
          size="small"
          color="error"
          onClick={() => dispatch(deletePost(post._id))}
          startIcon={<DeleteIcon fontSize="small" />}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
