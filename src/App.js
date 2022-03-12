import Box from "@mui/material/Box";
import classes from "./App.module.css";
import Header from './components/Header/Header';
import Jokes from './components/Jokes/Jokes';
function App() {
  return (
    <>
      <Box className={classes.App}>
        <Header />
        <Jokes />
      </Box>
    </>
  );
}

export default App;
