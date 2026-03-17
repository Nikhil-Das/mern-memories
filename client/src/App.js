import { Container, AppBar, Typography, Grow, Grid, Box } from "@mui/material";
import memories from "./assets/memories.png";
import Posts from "./components/Posts";
import Form from "./components/Form";
import "./App.scss";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getPosts } from "./actions/posts";

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        minHeight: "100vh",
        paddingBottom: 4,
      }}
    >
      <Container maxWidth="lg">
        <AppBar className="appBar" position="static" color="inherit">
          <Typography variant="h2" align="center" className="heading">
            Memories
          </Typography>
          <img className="image" src={memories} alt="memories" height="60" />
        </AppBar>
        <Grow in timeout={800}>
          <Container>
            <Grid
              container
              justifyContent="space-between"
              alignItems="stretch"
              spacing={3}
              sx={{
                animation: "fadeInUp 0.8s ease-in-out",
                "@keyframes fadeInUp": {
                  from: {
                    opacity: 0,
                    transform: "translateY(20px)",
                  },
                  to: {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                },
              }}
            >
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </Box>
  );
};

export default App;
