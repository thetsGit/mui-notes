import React from "react";
// import axios from "axios";
import Container from "@material-ui/core/Container";
import NoteCard from "../NoteCard";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1200: 2,
  900: 1,
};

const Notes = ({ notes, setNotes }) => {
  // const [notes, setNotes] = useState([]);
  const deleteHandler = async (id) => {
    // await axios.delete("http://localhost:3001/notes/" + id);
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  // useEffect(() => {
  //   axios.get("http://localhost:3001/notes").then((res) => {
  //     setNotes(res.data);
  //   });
  // }, []);

  return (
    <Container>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} deleteHandler={deleteHandler} />
        ))}
      </Masonry>
    </Container>
  );
};
export default Notes;
