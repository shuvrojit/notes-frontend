import { Notes } from "../../../data";

const ShowNotes = (props: Notes) => {
  return (
    <>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </>
  );
};

export default ShowNotes;
