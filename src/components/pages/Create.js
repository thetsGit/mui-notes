import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "skyblue",
    "&:hover": {
      opacity: 0,
    },
  },
  header: {
    fontSize: 30,
    marginBottom: 20,
    marginTop: 20,
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

const Create = ({ notes, setNotes }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todos");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    title ? setTitleError(false) : setTitleError(true);
    details ? setDetailsError(false) : setDetailsError(true);

    if (title && details) {
      // axios
      //   .post("http://localhost:3001/notes", { title, details, category })
      //   .then((res) => navigate("/"));
      const id = Math.floor(Math.random() * 10000);
      const newNotes = [...notes, { id, title, details, category }];
      setNotes(newNotes);
      navigate("/");
    }
  };

  const classes = useStyles();
  return (
    <Container>
      <Typography
        variant="h5"
        component="h1"
        gutterBottom
        className={classes.header}
      >
        Create a New Note
      </Typography>
      <form autoComplete="off" noValidate onSubmit={submitHandler}>
        <TextField
          variant="outlined"
          label="title"
          color="primary"
          fullWidth
          className={classes.field}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          error={titleError}
        />
        <TextField
          variant="outlined"
          label="details"
          color="primary"
          fullWidth
          className={classes.field}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          multiline
          rows={3}
          error={detailsError}
        />
        <FormControl className={classes.field}>
          <FormLabel>Category</FormLabel>
          <RadioGroup
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel
              label="todos"
              value="todos"
              control={<Radio color="primary" />}
            />
            <FormControlLabel
              label="work"
              value="work"
              control={<Radio color="primary" />}
            />
            <FormControlLabel
              label="reminders"
              value="reminders"
              control={<Radio color="primary" />}
            />
            <FormControlLabel
              label="money"
              value="money"
              control={<Radio color="primary" />}
            />
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};
export default Create;
