import Homepage from "./components/homepage";
import GetStartedPage from "./components/user/getStartedPage";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

function getData() {
  return useLoaderData();
}

function App() {
  const data = getData();
  const [user, setUser] = useState(null);

  return <>{!user ? <GetStartedPage /> : <Homepage data={data} />}</>;
}

export default App;
