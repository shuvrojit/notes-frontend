import ShowNotes from "./notes/ShowNotes";

const Homepage = ({ data }) => {
  return (
    <>
      {data.map((d) => {
        return <ShowNotes title={d.title} body={d.body} key={d.id} />;
      })}
    </>
  );
};

export default Homepage;
