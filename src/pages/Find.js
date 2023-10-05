
import places from "./../data/places";


const Find = ()=>{
	return<div className="pages">

<h2> Search for a room </h2>

<input type="search" />


<div id="filtering">

 <h3>Filters</h3>

<section>

<select>

<option> Rooms </option>
<option> 1 </option>
<option> 2</option>
<option>3</option>
<option>4</option>
</select>

<select>

<option> Price </option>
</select>

<select>

<option> Parking </option>
<option>Yes</option>
<option>No</option>

</select>

</section>

 </div>
<div id="all-houses">

 {places.map((elem)=>{
 	let parking ="Yes";
 	if(elem.parking == false){
 		parking = "No"
 	}
 	return 	<section className="single-ad">
<h2>{elem.address} </h2>
<img src="" alt="ooops"/>
<h3> Rooms: {elem.number_of_rooms} </h3>
<h3> Parking Available: {parking} </h3>
<h3> ${elem.price} </h3>
<button onClick ={()=>{
    
    window.open(`https://wa.me/${elem.phone}`,"_blank")
}}> Talk to agent </button>
 	</section>
 	

 })}


</div>

	</div>
}

export default Find;