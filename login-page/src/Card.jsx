/* eslint-disable no-unused-vars */
import React from "react";
import { useInView } from "react-intersection-observer";
function Card({ data }) {
  // data = {
  //   imgUrl: "./assets/image.png",
  //   title: "The Whispering Breeze",
  //   author: "Aayush Sharma",
  //   content: "",
  //   category: " ",
  // },
  const { imgUrl, title, author, content, category } = data;
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div
      ref={ref}
      className={`mx-auto max-w-sm overflow-hidden rounded-xl border border-orange-200/40 bg-gradient-to-br from-white/40 via-orange-100/50 to-white/30 shadow-lg backdrop-blur-md transition-all duration-700 ease-in-out hover:bg-orange-50/60 ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} `}
    >
      {/* Image Section */}
      <img
        src={`${imgUrl}`}
        alt="Poem Visual"
        className="z-1000 h-48 w-full object-cover"
      />

      {/* Poem Content */}
      <div className="p-6">
        <h2 className="mb-2 text-xl font-semibold text-orange-900">
          {}
          {title}
        </h2>
        <p className="text-sm leading-relaxed text-gray-800 italic">
          “The wind hums a melody, soft yet free, Dancing through valleys,
          whispering to me...”
        </p>

        {/* Author Name */}
        <p className="mt-3 text-sm font-medium text-gray-600">
          — <span className="text-orange-700">Aayush Singh</span>
        </p>

        {/* Read More Button */}
        <button className="mt-4 w-full rounded-lg bg-orange-400 px-4 py-2 font-medium text-white transition-colors duration-500 hover:bg-orange-500">
          Read More
        </button>
      </div>
    </div>
  );
}
function ContentArray() {
  const data = [
    {
      imgUrl: "./assets/image.png",
      title: "The Whispering Breeze",
      author: "Aayush Sharma",
      content: "",
      category: " ",
    },
    {
      imgUrl: "./assets/image.png",
      title: "The Whispering Breeze",
      author: "Aayush Sharma",
      content: "",
      category: " ",
    },
    {
      imgUrl: "./assets/image.png",
      title: "The Whispering Breeze",
      author: "Aayush Sharma",
      content: "",
      category: " ",
    },
    {
      imgUrl: "./assets/image.png",
      title: "The Whispering Breeze",
      author: "Aayush Sharma",
      content: "",
      category: " ",
    },
    {
      imgUrl: "./assets/image.png",
      title: "The Whispering Breeze",
      author: "Aayush Sharma",
      content: "",
      category: " ",
    },
    {
      imgUrl: "./assets/image.png",
      title: "The Whispering Breeze",
      author: "Aayush Sharma",
      content: "",
      category: " ",
    },
    {
      imgUrl: "./assets/image.png",
      title: "The Whispering Breeze",
      author: "Aayush Sharma",
      content: "",
      category: " ",
    },
    {
      imgUrl: "./assets/image.png",
      title: "The Whispering Breeze",
      author: "Aayush Sharma",
      content: "",
      category: " ",
    },
    {
      imgUrl: "./assets/image.png",
      title: "The Whispering Breeze",
      author: "Aayush Sharma",
      content: "",
      category: " ",
    },
    {
      imgUrl: "./assets/image.png",
      title: "The Whispering Breeze",
      author: "Aayush Sharma",
      content: "",
      category: " ",
    },
    {
      imgUrl: "./assets/image.png",
      title: "The Whispering Breeze",
      author: "Aayush Sharma",
      content: "",
      category: " ",
    },
    {
      imgUrl: "./assets/image.png",
      title: "The Whispering Breeze",
      author: "Aayush Sharma",
      content: "",
      category: " ",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-5">
      {data.map((card, index) => {
        return <Card key={index} data={card}></Card>;
      })}
    </div>
  );
}
// function Card() {
//   return (
//     <div className="mx-auto max-w-sm overflow-hidden rounded-xl border border-orange-200/40 bg-gradient-to-br from-white/40 via-orange-100/50 to-white/30 shadow-lg backdrop-blur-md transition-colors duration-500 ease-in-out hover:bg-orange-50/60">
//       {/* Image Section */}
//       <img
//         src="https://source.unsplash.com/400x250/?poetry,autumn"
//         alt="Poem Visual"
//         className="h-48 w-full object-cover"
//       />

//       {/* Poem Content */}
//       <div className="p-6">
//         <h2 className="mb-2 text-xl font-semibold text-orange-900">
//           The Whispering Breeze
//         </h2>
//         <p className="text-sm leading-relaxed text-gray-800 italic">
//           “The wind hums a melody, soft yet free, Dancing through valleys,
//           whispering to me...”
//         </p>

//         {/* Read More Button */}
//         <button className="mt-4 w-full rounded-lg bg-orange-400 px-4 py-2 font-medium text-white transition-colors duration-500 hover:bg-orange-500">
//           Read More
//         </button>
//       </div>
//     </div>
//   );
// }
// function Card(data) {
//   return (
//     <div className="mx-auto max-w-sm overflow-hidden rounded-xl bg-white/30 shadow-lg backdrop-blur-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
//       {/* Image Section */}
//       <img
//         src="./assets/photo.png"
//         alt="Poem Image"
//         className="h-48 w-full object-cover"
//       />

//       {/* Poem Content */}
//       <div className="p-6">
//         <h2 className="mb-2 text-xl font-bold text-gray-900">
//           The Whispering Breeze
//         </h2>
//         <p className="text-sm text-gray-700 italic">
//           "The wind hums a melody, soft yet free, Dancing through valleys,
//           whispering to me..."
//         </p>

//         {/* Read More Button */}
//         <button className="mt-4 w-full rounded-lg bg-orange-500 px-4 py-2 font-medium text-white transition-all duration-500 ease-in-out hover:bg-red-500">
//           Read More
//         </button>
//       </div>
//     </div>
//   );
// }

export default ContentArray;
