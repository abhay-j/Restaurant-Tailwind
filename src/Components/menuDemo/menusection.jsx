

import React, { useState } from "react";
import MenuItem from "../menupage/menuitem";
import { Select, Option } from "@material-tailwind/react";
 

function MenuSection() {
  const menuItems = {
    "Combos": [
      { name: "Chicken sandwich combo", description: "1 chicken sandwich with fries", price: "$11.99", location: "123 random street" },
      { name: "2 Chicken sandwiches combo", description: "2 chicken sandwiches with fries", price: "$14.99", location: "456 unrandom street" },
      { name: "Tenders and fries", description: "3 Piece tenders/ Fries", price: "$11.99", location: "478 lee hwy" },
      { name: "Wings and fries", description: "6 Wings and Fries", price: "$10.99", location: "123 random street" },
      { name: "10 Wings and Fries", description: "10 Wings and Fries", price: "$13.99", location: "456 unrandom street" },
      { name: "Loaded Fries", description: "Loaded Fries", price: "$10.99", location: "478 lee hwy" }
    ],
    "Drinks": [
      { name: "Strawberry Drink", description: "Description of Item 1", price: "$6.99", location: "123 random street" },
      { name: "Banana Drink", description: "Description of Item 1", price: "$6.99", location: "456 unrandom street" },
      { name: "Mango Drink", description: "Description of Item 1", price: "$6.99", location: "478 lee hwy" },
      { name: "Pine Apple Drink", description: "Description of Item 1", price: "$6.99", location: "123 random street" },
      { name: "Mixed berry Drink", description: "Description of Item 1", price: "$2.99", location: "456 unrandom street" },
      { name: "Soda fountain small", description: "Description of Item 1", price: "$2.99", location: "478 lee hwy" },
      { name: "Soda fountain large", description: "Description of Item 1", price: "$3.99", location: "123 random street" },
      { name: "Water - Bottled Soda", description: "Description of Item 1", price: "$2.25", location: "456 unrandom street" },
      { name: "Soda bottle", description: "Description of Item 1", price: "$3.00", location: "478 lee hwy" }
    ],
    "Sides": [
      { name: "Fries", description: "Description of Item 1", price: "$2.25", location: "123 random street" },
      { name: "Mash Potatoes and Gravy", description: "Description of Item 1", price: "$4.99", location: "456 unrandom street" },
      { name: "Macaroni and cheese", description: "Description of Item 1", price: "$4.99", location: "478 lee hwy" },
      { name: "Corn on the cob", description: "Description of Item 1", price: "$4.99", location: "123 random street" },
      { name: "Chicken Donut", description: "Description of Item 1", price: "$2.99", location: "456 unrandom street" },
      { name: "Chicken Sandwich", description: "Description of Item 1", price: "$5.99", location: "478 lee hwy" }
    ],
    "Desserts": [
      { name: "Fried Cheesecake", description: "Description of Allergy Free Item 1", price: "$6.99", location: "123 random street" }
    ]
  };
  
  // Add more items as needed
  const [selectedLocation, setSelectedLocation] = useState("")
  const [activeTab, setActiveTab] = useState("Combos");


  const handleLocationSelection = (location) => {
  setSelectedLocation(location)
  }


  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  const filteredMenuItems = selectedLocation
  ? menuItems[activeTab].filter(item => item.location === selectedLocation)
  : menuItems[activeTab];


  return (
    <div className="mt-10">
      <h2 className="text-black text-4xl font-bold font-habibi m-10">MENU:</h2>
      <div className="w-full flex justify-center mb-10">
  <div className="w-72">
    <Select label="Select location" value={selectedLocation} onChange={(value)=>handleLocationSelection(value)}>
      <Option value="123 random street">123 random street</Option>
      <Option value="456 unrandom street">456 unrandom street</Option>
      <Option value="478 lee hwy">478 lee hwy</Option>
     
    </Select>
  </div>
</div>
<div className="flex  justify-center mb-10 ">
        {Object.keys(menuItems).map((tabName) => (
          <div
            key={tabName}
            className={`cursor-pointer px-4 py-2 sm:px-6 sm:py-3 sm:mx-2 my-1 sm:my-0 text-sm sm:text-base ${
              activeTab === tabName
              ? "bg-red-600 text-white"
              : "bg-gray-200 text-black"
            }`}
            onClick={() => handleTabClick(tabName)}
          >
            {tabName}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {filteredMenuItems.map((item, index) => (
          <div key={index} className="py-4">
           <MenuItem item={item}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuSection;
