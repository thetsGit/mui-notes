import "./App.css";
import React, { useState } from "react";
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
  const [notes, setNotes] = useState([
    {
      title: "Yoshi's birthday bash",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      category: "reminders",
      id: 1,
    },
    {
      title: "Complete my ninja training",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      category: "work",
      id: 2,
    },
    {
      title: "Order a pizza!",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      category: "todos",
      id: 3,
    },
    {
      title: "Buy Yoshi's Birthday Gift",
      details:
        "Mario ipsum RGB mushroom 1-up. Cloud lakitu slide fire flower pipe jump swim, lava slide koopa troopa side-scrolling starman fire bar koopa paratroopa! Pipe cloud buzzy beetle koopa troopa game over, goomba invincible Mario green shell slide koopa paratroopa fire bar question block 1985 koopa troopa fireball Mushroom Kingdom. Lava Mushroom Kingdom.",
      category: "todos",
      id: 4,
    },
    {
      title: "Pay the milkman",
      details:
        "Mario ipsum RGB mushroom 1-up. Cloud lakitu slide fire flower pipe jump swim, lava slide koopa troopa side-scrolling starman fire bar koopa paratroopa! Pipe cloud buzzy beetle koopa troopa game over, goomba invincible Mario green shell slide koopa paratroopa fire bar question block 1985 koopa troopa fireball Mushroom Kingdom. Lava Mushroom Kingdom. Mario ipsum RGB mushroom 1-up. Cloud lakitu slide fire flower pipe jump swim, lava slide koopa troopa side-scrolling starman fire bar koopa paratroopa! Pipe cloud buzzy beetle koopa troopa game over, goomba invincible Mario green shell slide koopa paratroopa fire bar question block 1985 koopa troopa fireball Mushroom Kingdom. Lava Mushroom Kingdom.",
      category: "money",
      id: 5,
    },
    {
      title: "Check my promo codes",
      details:
        "Mario ipsum RGB mushroom 1-up. Cloud lakitu slide fire flower pipe jump swim, lava slide koopa troopa side-scrolling starman fire bar koopa paratroopa! Pipe cloud buzzy beetle koopa troopa game over, goomba invincible Mario green shell slide koopa paratroopa fire bar question block 1985 koopa troopa fireball Mushroom Kingdom. Lava Mushroom Kingdom.",
      category: "reminders",
      id: 6,
    },
    {
      title: "Make a new website banner",
      details:
        "Mario ipsum RGB mushroom 1-up. Cloud lakitu slide fire flower pipe jump swim, lava slide koopa troopa side-scrolling starman fire bar koopa paratroopa! Pipe cloud buzzy beetle koopa troopa game over, goomba invincible Mario green shell slide koopa paratroopa fire bar question block 1985 koopa troopa fireball Mushroom Kingdom. Lava Mushroom Kingdom.",
      category: "work",
      id: 7,
    },
    {
      title: "Mario go wild",
      details:
        "Two assure edward whence the was. Who worthy yet ten boy denote wonder. Weeks views her sight old tears sorry. Additions can suspected its concealed put furnished. Met the why particular devonshire decisively considered partiality. Certain it waiting no entered is. Passed her indeed uneasy shy polite appear denied. Oh less girl no walk. At he spot with five of view.",
      category: "reminders",
      id: 8,
    },
    {
      title: "Withdraw the salary",
      details:
        "Dashwood contempt on mr unlocked resolved provided of of. Stanhill wondered it it welcomed oh. Hundred no prudent he however smiling at an offence. If earnestly extremity he he propriety something admitting convinced ye. Pleasant in to although as if differed horrible. Mirth his quick its set front enjoy hoped had there. Who connection imprudence middletons too but increasing celebrated principles joy. Herself too improve gay winding ask expense are compact. New all paid few hard pure she.",
      category: "money",
      id: 9,
    },
  ]);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={<Notes notes={notes} setNotes={setNotes} />}
            />
            <Route
              path="/create"
              element={<Create notes={notes} setNotes={setNotes} />}
            />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
