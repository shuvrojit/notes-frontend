import { useLoaderData } from "react-router-dom"


function data () {
  return useLoaderData()
}

const Homepage = () => {
  console.log(data())
  return (
    <>
      <p>{data()}</p>
      nice
    </>
  )
}

export default Homepage
