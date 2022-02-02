import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core";
import { red, blue, yellow, green } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: ({ category }) =>
      category === "money"
        ? green[500]
        : category === "todos"
        ? blue[500]
        : category === "reminders"
        ? yellow[600]
        : red[600],
  },
});

const NoteCard = ({
  note: { id, title, details, category },
  deleteHandler,
}) => {
  // const classes = useStyles("work");
  const { avatar } = useStyles({ category });
  return (
    <Grid>
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={avatar}>
              {category[0].toUpperCase()}
            </Avatar>
          }
          title={title}
          subheader={category}
          action={
            <IconButton onClick={() => deleteHandler(id)}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          }
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {details}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default NoteCard;
