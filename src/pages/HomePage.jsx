import { Link } from "react-router-dom"

const HomePage = ()=>{
    return(
        <>
        <h1>HomePage</h1>
        <Link to={'/about'} >Go To AboutPage</Link>
        </>
    )
}

export default HomePage