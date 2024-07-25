// import React, { useContext, useState } from 'react'
// import './Search.css'
// import FoodItem from '../FoodItem/FoodItem'
// import { StoreContext } from '../../Context/StoreContext'
// import axios from 'axios'

// const Search = () => {
//  const [name ,setName]= useState("");
//   const {food_list} = useContext(StoreContext);
  
//   var ans;
//   const hendelSubmit =()=>{
//     let url = "http://localhost:4000/api/product/search";
//     axios.post(url,{nam:name}).then((res)=>{
//       console.log(res.data);
//      food_list(res.data);
//     })
// }

// if(food_list.length >= 1){
//   ans = food_list.map((item)=>{
//     return <FoodItem key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item._id}/> 
//   })
// }  
// else{
//   ans = <font> no record </font>;
// }
  
//   return (
//     <div className='search' id='search'>
//       <h2 style={{alignItems:"center",justifyContent:"center",display:"flex",}}>Top dishes Search you</h2>
//       <div className='search-grid'>
//         <input placeholder="Enter Your Product Name" type="text"  style={{ width: "300px" , fontSize:"24px"}} value={name} onChange={(e)=>{setName(e.target.value)}}/>
//         <button onClick={hendelSubmit}>Search Data</button>
//       </div>
//       <div className='food-display-list'>
//         {/* {food_list.map((item)=>{ 
//             return <FoodItem key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item._id}/>    
//         })} */}
//         {ans}
//       </div>

//     </div>
//   )
// }

// export default Search




import React, { useContext, useState } from 'react';
import './Search.css';
import FoodItem from '../FoodItem/FoodItem';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';

const Search = () => {
  const [name, setName] = useState("");
  const { food_list, setFoodList } = useContext(StoreContext);

  const handleSubmit = () => {
    const url = "http://localhost:4000/api/product/search";
    axios.post(url, { nam: name })
      .then((res) => {
        console.log(res.data);
        setFoodList(res.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  };

  let ans;
  if (food_list.length >= 1) {
    ans = food_list.map((item) => (
      <FoodItem
        key={item._id}
        image={item.image}
        name={item.name}
        desc={item.description}
        price={item.price}
        id={item._id}
      />
    ));
  } else {
    ans = <font>No records found</font>;
  }

  return (
    <div className='search' id='search'>
      <h2 style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
        Top dishes Search you
      </h2>
      <div className='search-grid'>
        <input
          placeholder="Enter Your Product Name"
          type="text"
          style={{ width: "300px", fontSize: "24px" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleSubmit}>Search Data</button>
      </div>
      <div className='food-display-list'>
        {ans}
      </div>
    </div>
  );
};

export default Search;



































// import React, { useState, useEffect } from 'react';

// function Search() {
//   const [items, setItems] = useState([]); // Array of items to be filtered
//   const [searchText, setSearchText] = useState(''); // User's search query
//   const [filteredItems, setFilteredItems] = useState([]); // Filtered results

//   // Fetch data (replace with your actual data fetching logic)
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('https://your-api-endpoint.com/data');
//       const data = await response.json();
//       setItems(data);
//     };
//     fetchData();
//   }, []);

//   // Handle search input change
//   const handleSearchChange = (event) => {
//     setSearchText(event.target.value.toLowerCase()); // Convert to lowercase for case-insensitive search
//   };

//   // Filter items based on search text
//   useEffect(() => {
//     const filtered = items.filter((item) => {
//       // Customize filtering logic based on your item properties
//       const searchTextLower = searchText.toLowerCase();
//       return (
//         item.name.toLowerCase().includes(searchTextLower) ||
//         item.description.toLowerCase().includes(searchTextLower) ||
//         // Add more properties to search if needed
//       );
//     });
//     setFilteredItems(filtered);
//   }, [searchText, items]);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchText}
//         onChange={handleSearchChange}
//       />
//       <ul>
//         {filteredItems.length > 0 ? (
//           filteredItems.map((item) => (
//             <li key={item.id}>{item.name}</li> // Customize display based on your items
//           ))
//         ) : (
//           <li>No results found.</li>
//         )}
//       </ul>
//     </div>
//   );
// }

// export default Search;
