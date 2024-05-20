

import React, { useState } from "react";
import MenuItem from "../menupage/menuitem";

function MenuSection() {
  const menuItems = {
    "Combos": [
      { name: "Chciken sandwich combo", description: "1 chicken sandwhihc with fries", price:"$11.99" },
      { name: "2 Chicken sandwiches combo", description: "2 chicken sandwhihc with fries", price:"$14.99" },
      { name: "Tenders and fries", description: "3 Piece tenders/ Fries", price:"$11.99" },
      { name: "Wings and fries", description: "6 Wings and Fries" , price:"$10.99" },
      {
        name: "10 Wings and Fries",
        description: "10 Wings and Fries",
        price: "$13.99",
      },
      {
        name: "Loaded Fries",
        description: "Loaded Fries",
        price: "$10.99",
      }
      
      // Add more items as needed
    ],
    "Drinks": [
      { name: "Strawberry Drink", description: "Description of  Item 1", price:"$6.99" },
      { name: "Banana Drink", description: "Description of  Item 1", price:"$6.99" },
      { name: "Mango Drink", description: "Description of  Item 1", price:"$6.99" },
      { name: "Pine Apple Drink", description: "Description of  Item 1", price:"$6.99" },
      { name: "mixed berry Drink", description: "Description of  Item 1", price:"$2.99" },
      { name: "Soda fountain small", description: "Description of  Item 1", price:"$2.99" },
      { name: "Soda fountain large", description: "Description of  Item 1", price:"$3.99" },
      { name: "Water - Bottled Soda", description: "Description of  Item 1", price:"$2.25" },
      { name: "Soda bottle", description: "Description of  Item 1", price:"$3.00" },
      
      // Add more items as needed
    ],
    "Sides": [
      { name: "Fries", description: "Description of  Item 1", price:"$2.25" },
      { name: "Mash Potatos and Gravy", description: "Description of  Item 1", price:"$4.99" },
      { name: "Macaroni and chesse", description: "Description of  Item 1", price:"$4.99" },
       { name: "Corn on the cob", description: "Description of  Item 1", price:"$4.99" },
       { name: "Chicken Donut", description: "Description of  Item 1", price:"$2.99" },
       { name: "Chicken Sandwhich", description: "Description of  Item 1", price:"$5.99" }
      // Add more items as needed
    ],
    "Desserts": [
      {
        name: "Fried Cheesecake",
        description: "Description of Allergy Free Item 1",
        price:"$6.99"
      },
      
      // Add more items as needed
    ],
  };
  const [activeTab, setActiveTab] = useState("Combos");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="mt-10">
      <h2 className="text-black text-4xl font-bold font-habibi m-10">MENU:</h2>
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
        {menuItems[activeTab].map((item, index) => (
          <div key={index} className="py-4">
           <MenuItem item={item}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuSection;
