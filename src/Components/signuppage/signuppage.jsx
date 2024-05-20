// import React from "react";
// import { useState } from "react";

// function SignUpPage() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function handleFirstNameChange(event) {
//     setFirstName(event.target.value);
//   }

//   function handleLastNameChange(event) {
//     setLastName(event.target.value);
//   }
//   function handleEmailChange(event) {
//     setEmail(event.target.value);
//   }

//   function handlePasswordChange(event) {
//     setPassword(event.target.value);
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log("First Name:", firstName);
//     console.log("Last Name:", lastName);
//     console.log("Email:", email);
//     console.log("Password:", password);
//     setFirstName("");
//     setLastName("");
//     setEmail("");
//     setPassword("");
//   }

//   return (
//     <>
//       <div className="div">
//         <div className="div-2">Sign Up:</div>
//         <div className="div-3">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="div-4">
//             <div className="div-5">
//               Sign up to get deliciousness delivered to your door
//             </div>
//             <div className="div-6">
//               <div>
//                 <input
//                   className="div-7"
//                   type="text"
//                   value={firstName}
//                   onChange={handleFirstNameChange}
//                   placeholder="first name"
//                 />
//               </div>
//               <div>
//                 <input
//                   className="div-8"
//                   type="text"
//                   value={lastName}
//                   onChange={handleLastNameChange}
//                   placeholder="last name"
//                 />
//               </div>
//             </div>
//             <div>
//               <input
//                 className="div-9"
//                 type="email"
//                 value={email}
//                 onChange={handleEmailChange}
//                 placeholder="Email address"
//               />
//               Email address
//             </div>
//             <div>
//               <input
//                 className="div-10"
//                 type="password"
//                 value={password}
//                 onChange={handlePasswordChange}
//                 placeholder="Password"
//               />
//               Create password
//             </div>
//             <div className="div-11">
//               <button className="div-12">Register</button>
//             </div>
//           </div>
//         </form>
//       </div>
//       <style jsx>{`
//         .div {
//           align-items: center;
//           border-radius: 30px 30px 0px 0px;
//           background-color: #fff;
//           display: flex;
//           width: 100%;
//           flex-direction: column;
//           color: rgba(0, 0, 0, 0.8);
//           font-weight: 400;
//           padding: 80px;
//         }
//         @media (max-width: 991px) {
//           .div {
//             max-width: 100%;
//             padding: 0 20px;
//           }
//         }
//         .div-2 {
//           color: #000;
//           text-align: center;
//           letter-spacing: -0.75px;
//           margin-top: 93px;
//           font:
//             50px/72% Habibi,
//             sans-serif;
//         }
//         @media (max-width: 991px) {
//           .div-2 {
//             margin-top: 40px;
//             font-size: 40px;
//           }
//         }
//         .div-3 {
//           text-align: center;
//           letter-spacing: -0.54px;
//           align-self: stretch;
//           margin-top: 61px;
//           font:
//             36px/50px Habibi,
//             sans-serif;
//         }
//         @media (max-width: 991px) {
//           .div-3 {
//             max-width: 100%;
//             margin: 40px 4px 0 0;
//           }
//         }
//         .div-4 {
//           border-color: rgba(0, 0, 0, 0.5);
//           border-style: solid;
//           border-width: 1px;
//           background-color: #fff;
//           display: flex;
//           width: 737px;
//           max-width: 100%;
//           flex-direction: column;
//           align-items: start;
//           font-size: 15px;
//           letter-spacing: -0.22px;
//           line-height: 160%;
//           margin: 57px 0 111px;
//           padding: 68px 79px;
//         }
//         @media (max-width: 991px) {
//           .div-4 {
//             margin: 40px 0;
//             padding: 0 20px;
//           }
//         }
//         .div-5 {
//           color: #000;
//           letter-spacing: -0.36px;
//           align-self: stretch;
//           margin-right: 35px;
//           font:
//             24px/150% Habibi,
//             sans-serif;
//         }
//         @media (max-width: 991px) {
//           .div-5 {
//             max-width: 100%;
//             margin-right: 10px;
//           }
//         }
//         .div-6 {
//           display: flex;
//           margin-top: 46px;
//           width: 545px;
//           max-width: 100%;
//           gap: 20px;
//           justify-content: space-between;
//         }
//         @media (max-width: 991px) {
//           .div-6 {
//             flex-wrap: wrap;
//             margin-top: 40px;
//           }
//         }
//         .div-7 {
//           font-family: Montserrat, sans-serif;
//           border-color: rgba(0, 0, 0, 0.5);
//           border-style: solid;
//           border-width: 1px;
//           background-color: #fff;
//           align-items: start;
//           justify-content: center;
//           width: 100%;
//           padding: 15px 14px;
//         }
//         @media (max-width: 991px) {
//           .div-7 {
//             padding-right: 20px;
//           }
//         }
//         .div-8 {
//           font-family: Montserrat, sans-serif;
//           border-color: rgba(0, 0, 0, 0.5);
//           border-style: solid;
//           border-width: 1px;
//           background-color: #fff;
//           width: 100%;
//           align-items: start;
//           justify-content: center;
//           padding: 15px 14px;
//         }
//         @media (max-width: 991px) {
//           .div-8 {
//             padding-right: 20px;
//           }
//         }
//         .div-9 {
//           font-family: Montserrat, sans-serif;
//           border-color: rgba(0, 0, 0, 0.5);
//           border-style: solid;
//           border-width: 1px;
//           background-color: #fff;
//           margin-top: 24px;
//           width: 545px;
//           max-width: 100%;
//           align-items: start;
//           justify-content: center;
//           padding: 15px 14px;
//         }
//         @media (max-width: 991px) {
//           .div-9 {
//             padding-right: 20px;
//           }
//         }
//         .div-10 {
//           font-family: Montserrat, sans-serif;
//           border-color: rgba(0, 0, 0, 0.5);
//           border-style: solid;
//           border-width: 1px;
//           background-color: #fff;
//           margin-top: 24px;
//           width: 545px;
//           max-width: 100%;
//           align-items: start;
//           justify-content: center;
//           padding: 13px 14px;
//         }
//         @media (max-width: 991px) {
//           .div-10 {
//             padding-right: 20px;
//           }
//         }
//         .div-11 {
//           display: flex;
//           margin-top: 24px;
//           width: 130px;
//           max-width: 100%;
//           flex-direction: column;
//           color: #fff;
//           white-space: nowrap;
//           text-align: center;
//           justify-content: center;
//         }
//         @media (max-width: 991px) {
//           .div-11 {
//             white-space: initial;
//           }
//         }
//         .div-12 {
//           font-family: Habibi, sans-serif;
//           border-radius: 6px;
//           background-color: #fb1818;
//           justify-content: center;
//           padding: 13px 39px;
//         }
//         @media (max-width: 991px) {
//           .div-12 {
//             white-space: initial;
//             padding: 0 20px;
//           }
//         }
//       `}</style>
//     </>
//   );
// }

// export default SignUpPage;
import React, { useState } from "react";

function SignUpPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col items-center bg-white rounded-t-[30px] p-8 md:p-20">
      <div className="text-black text-center mt-24 md:mt-10 text-4xl md:text-5xl font-habibi leading-tight">
        Sign Up:
      </div>
      <div className="text-black/80 text-center mt-12 md:mt-10 text-xl md:text-3xl font-habibi leading-tight">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      </div>
      <form onSubmit={handleSubmit} className="border border-black/50 bg-white flex flex-col items-start w-full max-w-3xl p-8 mt-12 md:mt-10">
        <div className="text-black text-2xl font-habibi mb-4">
          Sign up to get deliciousness delivered to your door
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-4 w-full">
          <input
            className="w-full border border-black/50 p-4 text-black/80 placeholder-gray-500"
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            placeholder="First name"
          />
          <input
            className="w-full border border-black/50 p-4 text-black/80 placeholder-gray-500"
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            placeholder="Last name"
          />
        </div>
        <div className="w-full mb-4">
          <input
            className="w-full border border-black/50 p-4 text-black/80 placeholder-gray-500"
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email address"
          />
        </div>
        <div className="w-full mb-4">
          <input
            className="w-full border border-black/50 p-4 text-black/80 placeholder-gray-500"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
        </div>
        <div className="flex justify-center w-full">
          <button className="bg-red-600 text-white py-2 px-8 rounded-md font-habibi">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;
