import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notes from "./components/pages/Notes";
import Create from "./components/pages/Create";
import Layout from "./components/Layout";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";
import { grey } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: deepOrange,
    secondary: grey,
  },

  typography: {
    fontFamily: "Titillium Web",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
