// import React, { useState } from "react";
// import styled from "styled-components";

// function MenuContainerComponent({ activeTab, onTabClick }) {
//   // const [activeTab, setActiveTab] = useState("All");

//   // const handleTabClick = (tab) => {
//   //   setActiveTab(tab);
//   // };

//   return (
//     <MenuContainer>
//       <Div2>
//         <Div3>MENU:</Div3>
//         <Div4>
//           <Div5>
//             <Div6Styled
//               onClick={() => onTabClick("All")}
//               active={activeTab === "All"}
//             >
//               All
//             </Div6Styled>
//             <Div7Styled
//               onClick={() => onTabClick("Vegan")}
//               active={activeTab === "Vegan"}
//             >
//               Vegan
//             </Div7Styled>
//             <Div8Styled
//               onClick={() => onTabClick("Gluten free")}
//               active={activeTab === "Gluten free"}
//             >
//               Gluten free
//             </Div8Styled>
//             <Div9Styled
//               onClick={() => onTabClick("Allergy Free menu")}
//               active={activeTab === "Allergy Free menu"}
//             >
//               Allergy Free menu
//             </Div9Styled>
//           </Div5>
//         </Div4>
//       </Div2>
//     </MenuContainer>
//   );
// }

// // Styled components for MenuContainer
// const MenuContainer = styled.div`
//   align-items: center;
//   border-radius: 30px 30px 0px 0px;
//   background-color: #fff;
//   display: flex;
//   justify-content: center;
//   padding: 80px 60px;

//   @media (max-width: 991px) {
//     padding: 0 20px;
//   }
// `;

// const Div2 = styled.div`
//   display: flex;
//   margin-top: 23px;
//   width: 100%;
//   max-width: 1187px;
//   flex-direction: column;

//   @media (max-width: 991px) {
//     max-width: 100%;
//   }
// `;

// const Div3 = styled.div`
//   color: #000;
//   letter-spacing: -0.75px;
//   font:
//     400 50px/72% Habibi,
//     -apple-system,
//     Roboto,
//     Helvetica,
//     sans-serif;

//   @media (max-width: 991px) {
//     max-width: 100%;
//     font-size: 40px;
//   }
// `;

// const Div4 = styled.div`
//   align-items: start;
//   border-radius: 12px 12px 0px 0px;
//   background-color: #000;
//   display: flex;
//   margin-top: 72px;
//   flex-direction: column;
//   font-size: 18px;
//   color: var(--Dark, #222);
//   font-weight: 500;
//   justify-content: center;

//   @media (max-width: 991px) {
//     max-width: 100%;
//     padding-right: 20px;
//     margin-top: 40px;
//   }
// `;

// const Div5 = styled.div`
//   display: flex;
//   gap: 0px;

//   @media (max-width: 991px) {
//     flex-wrap: wrap;
//   }
// `;

// const DivStyled = styled.div`
//   font-family:
//     DM Sans,
//     sans-serif;
//   justify-content: center;
//   border-radius: 12px 12px 0px 0px;
//   border-color: rgba(0, 0, 0, 0.1);
//   border-style: solid;
//   border-top-width: 1px;
//   border-right-width: 1px;
//   border-left-width: 1px;
//   white-space: nowrap;
//   padding: 20px 32px;
//   cursor: pointer;

//   ${(props) =>
//     props.active &&
//     `
//     background-color: #fb1818;
//     color: #fff;
//   `}

//   @media (max-width: 991px) {
//     white-space: initial;
//     padding: 0 20px;
//   }
// `;

// const Div6Styled = styled(DivStyled)`
//   background-color: ${(props) => (props.active ? "#fb1818" : "#f3f3f3")};
//   color: ${(props) => (props.active ? "#fff" : "#000")};
// `;

// const Div7Styled = styled(DivStyled)`
//   background-color: ${(props) => (props.active ? "#fb1818" : "#f2f2f2")};
//   color: ${(props) => (props.active ? "#fff" : "#000")};
// `;

// const Div8Styled = styled(DivStyled)`
//   background-color: ${(props) => (props.active ? "#fb1818" : "#f3f3f3")};
//   color: ${(props) => (props.active ? "#fff" : "#000")};
// `;

// const Div9Styled = styled(DivStyled)`
//   background-color: ${(props) => (props.active ? "#fb1818" : "#f2f2f2")};
//   color: ${(props) => (props.active ? "#fff" : "#000")};
// `;

// export default MenuContainerComponent;
// <div className="flex py-4 rounded-full px-6 md:px-8 text-lg font-medium cursor-pointer bg-blue-500 text-white items-center justify-center">
//   Button Text
// </div>

import React from "react";

function MenuContainerComponent({ activeTab, onTabClick }) {
  return (
    <div className="rounded-t-3xl flex justify-center items-center py-20 px-10 md:px-0">
      <div className="flex flex-col items-center w-full max-w-xl">
        <h2 className="text-black text-4xl font-bold">MENU:</h2>
        <div className="bg-pink-200 rounded-tl-3xl flex flex-col gap-0 md:gap-4 mt-8">
          <div className="flex gap-0 md:gap-4">
            <div
              onClick={() => onTabClick("All")}
              className={`flex py-4 rounded-full px-6 md:px-8 text-lg font-medium cursor-pointer bg-blue-500 text-white items-center justify-center ${
                activeTab === "All"
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              All
            </div>
            <div
              onClick={() => onTabClick("Vegan")}
              className={`py-4 px-6 md:px-8 text-lg font-medium cursor-pointer ${
                activeTab === "Vegan"
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              Vegan
            </div>
            <div
              onClick={() => onTabClick("Gluten free")}
              className={`py-4 px-6 md:px-8 text-lg font-medium cursor-pointer ${
                activeTab === "Gluten free"
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              Gluten free
            </div>
            <div
              onClick={() => onTabClick("Allergy Free menu")}
              className={`py-4 px-6 md:px-8 text-lg font-medium cursor-pointer ${
                activeTab === "Allergy Free menu"
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              Allergy Free menu
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuContainerComponent;
