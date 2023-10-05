
import { Link } from "react-router-dom";

const Home = ()=>{
	return <>

<div className="design-pages">
<h1> Gwamps Accomodation Finder </h1>


<div id = "home-buttons-container">

<Link to = "/tenants">
<button className="home-buttons" >
Get a room </button>
</Link>

<Link to="landlords">
<button className="home-buttons" > Get a tenant </button>
</Link>

</div>


</div>

	</>
}
export default Home;