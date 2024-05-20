
import React from "react";

function AboutPage() {
  return (
    <main className="bg-gray-200 flex flex-col">
      <section className="relative flex flex-col items-center justify-center text-center text-white px-4 py-16 md:py-40 min-h-screen mix-blend-plus-darker overflow-hidden">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d92783ec40c24087567185ad449b1126808c534451723e30ea2a3fa92c0668f?apiKey=a3c25f6e54a54eb681ff737ee21ae812&"
          alt="Hero Image"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <blockquote className="relative text-lg md:text-2xl lg:text-4xl font-habibi leading-normal">
          "One cannot think well, love well, sleep well, if one has not dined
          well."
          <br />
          - Virginia Woolf
        </blockquote>
      </section>
      <section className="bg-white rounded-t-[30px] flex flex-col px-4 md:px-20 py-16 md:py-20">
        <header className="flex flex-col md:flex-row text-black">

          <h1 className="text-3xl md:text-4xl font-habibi tracking-tighter md:ml-4 text-left">
              Welcome to Blue Moon
          </h1>
        </header>
        <div className="flex flex-col md:flex-row gap-4 mt-8 md:mt-12">
          <div className="flex-1 flex items-center justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ec0b83591e55c1c7cde09d354763afb5eb0275408a1e5baeef92424f1c7995b?apiKey=a3c25f6e54a54eb681ff737ee21ae812&"
              alt="About Us Image"
              className="w-full border border-gray-300"
              style={{ aspectRatio: '1.22' }}
            />
          </div>
          <p className="flex-1 text-lg md:text-xl font-habibi text-black leading-relaxed mt-4 md:mt-0 md:ml-4">
            Welcome to Blue Moon, where the serene beauty of nature meets the
            artistry of culinary delight. Nestled amidst lush greenery and
            overlooking breathtaking vistas, Blue Moon offers an unparalleled
            dining experience for nature enthusiasts and food connoisseurs
            alike.
            <br />
            <br />
            At Blue Moon, we believe in harnessing the freshest ingredients from
            local farms and markets to craft dishes that celebrate the essence
            of seasonal flavors. Our menu is a harmonious fusion of contemporary
            cuisine with a rustic charm, curated by our talented team of chefs
            who are passionate about creating memorable dining moments.
            <br />
            <br />
            As you dine beneath the open skies and bask in the gentle glow of
            moonlight, each dish at Blue Moon is not just a meal but a journey—a
            journey that transports you to the heart of nature, where every bite
            tells a story of sustainability, authenticity, and culinary mastery.
            <br />
            <br />
            Whether you're savoring our signature wood-fired pizzas, indulging
            in our seafood delicacies, or delighting in our farm-to-table
            salads, every dish at Blue Moon is a testament to our commitment to
            excellence and our reverence for the natural world.
            <br />
            <br />
            Come join us at Blue Moon, where every meal is a celebration of good
            food, great company, and the beauty of the great outdoors.
          </p>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
