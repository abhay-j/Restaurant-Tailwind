import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const quotes = [
  {
    text: "Cooking is like love. It should be entered into with abandon or not at all.",
    author: "– Harriet Van Horne",
  },
];

function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-screen text-white font-light text-center">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets/TEMP/55688e17583374787fe114a2831425e968eb62e9031d4811c65b071030deb1c9?apiKey=a3c25f6e54a54eb681ff737ee21ae812&')" }}></div>
      <div className="relative z-10 max-w-screen-lg mx-auto py-20 px-6 sm:px-8 lg:px-12">
        {quotes.map((quote, index) => (
          <div key={index} className="mb-20 md:mb-10">
            <p className="text-3xl md:text-4xl lg:text-5xl leading-10 md:leading-12 lg:leading-14 font-serif mb-6">{quote.text}</p>
            <p className="text-lg md:text-xl font-normal">{quote.author}</p>
          </div>
        ))}
        <Link to="/menu" className="inline-block px-8 py-4 bg-red-500 text-white font-semibold transition duration-300 hover:bg-red-600">View menu</Link>
      </div>
    </section>
  );
}




const data = [
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b9e9bd952144a837b8c8f4170e7721d7ad48700312b1d79a2ba2ba5a47050a2c?apiKey=a3c25f6e54a54eb681ff737ee21ae812&",
    title: "Steak Gets Its Name from Scandinavia",
    description:
      'When you\'re enjoying a delicious steak, the last thing you\'re probably thinking about is where its name comes from. But while steak is an American favorite, you might be surprised to learn that the term actually has Scandinavian roots. The Scandinavian word "steik," which refers to a thick cut of meat for roasting or grilling, dates back to about the mid-15th century. Eventually, the term evolved into the modern English "steak."',
  },
];

function SectionOne() {
  return (
    <article className="bg-white border-t-2 border-black rounded-t-lg py-10 md:py-20 px-8 md:px-16 lg:px-24">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center md:items-stretch space-y-10 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <div className="aspect-w-16 aspect-h-9 md:aspect-w-3 md:aspect-h-2">
              <img src={item.imageUrl} alt="Article" className="object-cover object-center w-full h-full" loading="lazy" />
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col items-center md:items-start space-y-6 md:space-y-8">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-center md:text-left">{item.title}</h2>
            <p className="font-serif text-base lg:text-lg text-center md:text-left">{item.description}</p>
          </div>
        </div>
      ))}
    </article>
  );
}




function SectionTwo() {
  return (
    <section className="bg-white  py-10 md:py-20 px-8 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row items-center md:items-stretch space-y-10 md:space-y-0 md:space-x-10">
        <div className="md:w-1/2">
          <div className="flex flex-col items-center md:items-start space-y-6 md:space-y-8">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-center md:text-left">A HISTORY OF THE TRADITION</h2>
            <p className="font-serif text-base lg:text-lg text-center md:text-left">The English breakfast is an iconic dish in British culinary culture, embodying a centuries-old breakfast tradition that has been passionately sustained and adapted throughout its history by successive generations of British society. The tradition of the English breakfast has journeyed down a long road, and I believe that the idea of an "English breakfast" began in the 11th century with Anglo-Saxon nobles who sought to preserve their culinary traditions in the face of the Norman invasion.</p>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="aspect-w-16 aspect-h-9 md:aspect-w-3 md:aspect-h-2">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/97a5de3b5a62e1caa12f42fc4326a72479f2efdfd8a408d51733565593c2f9db?apiKey=a3c25f6e54a54eb681ff737ee21ae812&" alt="English Breakfast" className="object-cover object-center w-full h-full" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}




const menuItems = [
  {
    name: "Ramen",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/40a14eb85373d95939b750814c22293cbe8d7a06eaddfd3d6d836b78044b7a6b?apiKey=a3c25f6e54a54eb681ff737ee21ae812&",
  },
  {
    name: "Sushi",
    description:
      "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/be960da1ba982bf0e62a04a49a34a31816533cef4d55883f4c33d95b42b39a44?apiKey=a3c25f6e54a54eb681ff737ee21ae812&",
  },
  {
    name: "Nemo enim ipsam",
    description:
      "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/34632121f56beff72a1989de13d405d82b0793b37d94ec6583333d977585f001?apiKey=a3c25f6e54a54eb681ff737ee21ae812&",
  },
];
function MenuSection() {
  return (
    <section className=" py-20 px-8 md:px-16 lg:px-20">
      <h2 className="text-black font-serif text-3xl md:text-4xl text-center md:text-left mb-20">Checkout our new Offerings</h2>
      <p className="text-black font-serif text-lg lg:text-xl text-center md:text-left mb-20">Explore our new dishes and embark on a adventure filled with tantalizing flavors, vibrant colors, and unforgettable culinary experiences that will delight your senses and leave you craving for more.</p>
        <div className="flex justify-around  flex-wrap gap-1 w-full">
        {menuItems.map((item, index) => (
          <div key={index} className="w-full md:w-1/4">
            <div className="border border-black bg-white flex flex-col h-full">
              <div className="flex justify-center">
                <img src={item.image} alt={item.name} className="object-cover h-72 w-full" loading="lazy" />
              </div>
              <div className="p-8">
                <h3 className="text-black font-semibold text-xl mb-6">{item.name}</h3>
                <p className="text-black font-normal text-base">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Link to="/menu" className="block mx-auto border border-red-500 text-red-500 font-serif text-xl px-10 py-4 mt-10 max-w-xs">View full menu</Link>
    </section>
  );
}


const footerData = [
  {
    title: "Quick Links",
    links: ["Home", "About Us", "Menu", "Events", "Contact"],
  },
  {
    title: "Get In Touch",
    content: "Email: contact@mysite.com\nPhone: 123-456-7890",
  },
];


const Footer = () => {
  return (
    <footer className=" flex flex-col items-center">
      <div className="flex justify-around  w-full px-4 md:px-8">
        <div className="flex flex-col capitalize">
          <h2 className="text-primary font-semibold text-xl md:text-2xl">Logo</h2>
          <p className="text-body mt-4">Summarize your business so the visitor can learn about your offerings from any page on your website.</p>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c8dd6853b54ca9e9a00d26370421fbb2621023ff34a1a3eedac754ed770a77b?apiKey=a3c25f6e54a54eb681ff737ee21ae812&"
            alt="Company"
            className="w-20 mt-8"
          />
        </div>
        <div className="flex  flex-wrap justify-between w-3/5 mt-8 md:mt-0">
          {footerData.map((section, index) => (
            <div key={index} className="w-full  pl-2 md:w-1/3 mb-8 md:mb-0 md:pl-8">
              <h3 className="text-primary font-semibold text-lg mb-4">{section.title}</h3>
              {section.links ? (
                section.links.map((link, i) => (
                  <a key={i} href="#" className="text-body block">{link}</a>
                ))
              ) : (
                <p className="text-body">{section.content}</p>
              )}
            </div>
          ))}
          <div className="w-full md:w-1/3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a79c88e9479931ebc4320665fad34af7717dd9580b999b5f408890a77123207?apiKey=a3c25f6e54a54eb681ff737ee21ae812&"
              alt="Footer"
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="bg-red-500 w-full text-white text-center text-base font-normal py-4 ">
        © All Rights Reserved.
      </div>
    </footer>
  );
};


function HomePage() {
  return (
    <>
      <HeroSection />
      <SectionOne />
      <SectionTwo />
      <MenuSection />
      <Footer />
    </>
  );
}
export default HomePage;
