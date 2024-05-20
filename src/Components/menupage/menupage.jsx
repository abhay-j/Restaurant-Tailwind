
import React, { useState } from "react";
import MenuItem from "./menuitem";
import MenuContainerComponent from "./menuContainerComponent";
import MenuSection from "../menuDemo/menusection";



// Functional components
function CoverImage() {
  return (
    <div className="max-w-full">
      <img
        className="w-full"
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/78a9a96eee8849d5cbc1b797ed88deb8b3a318e010f7a8c0289bc95fe56c28da?apiKey=a3c25f6e54a54eb681ff737ee21ae812&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/78a9a96eee8849d5cbc1b797ed88deb8b3a318e010f7a8c0289bc95fe56c28da?apiKey=a3c25f6e54a54eb681ff737ee21ae812&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/78a9a96eee8849d5cbc1b797ed88deb8b3a318e010f7a8c0289bc95fe56c28da?apiKey=a3c25f6e54a54eb681ff737ee21ae812&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/78a9a96eee8849d5cbc1b797ed88deb8b3a318e010f7a8c0289bc95fe56c28da?apiKey=a3c25f6e54a54eb681ff737ee21ae812&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/78a9a96eee8849d5cbc1b797ed88deb8b3a318e010f7a8c0289bc95fe56c28da?apiKey=a3c25f6e54a54eb681ff737ee21ae812&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/78a9a96eee8849d5cbc1b797ed88deb8b3a318e010f7a8c0289bc95fe56c28da?apiKey=a3c25f6e54a54eb681ff737ee21ae812&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/78a9a96eee8849d5cbc1b797ed88deb8b3a318e010f7a8c0289bc95fe56c28da?apiKey=a3c25f6e54a54eb681ff737ee21ae812&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/78a9a96eee8849d5cbc1b797ed88deb8b3a318e010f7a8c0289bc95fe56c28da?apiKey=a3c25f6e54a54eb681ff737ee21ae812&"
        alt="Cover Image"
      />
    </div>
  );
}



 


function MenuPage() {
  

  return (
    <>
      <CoverImage />
      
      <MenuSection />
    </>
  );
}

export default MenuPage;
