import React from "react";
import Image from "next/image";
import mountain from "../../../public/mountain.png";
import logo from "../../../public/nextjslogo.jpeg";

export default function page() {
  return (
    <>
      <h1>Images</h1>
      <div style={{ height: "50%" }}>
        {/* It automatically optimizes images by resizing and compressing them to deliver faster load times. 
              Next.js creates optimized images on demand and stores them temporarily in its server cache. */}
        <Image
          alt="image optimization"
          style={{ width: "100%", objectFit: "cover" }}
          src={mountain}
        />
        <img style={{ width: "50%" }} src={logo.src} alt="nextJS Logo" />
        <Image
          src="https://image.cdn2.seaart.me/2024-09-19/crlp9b5e878c73f1uflg/0304057175d2d0fea4795ebab810347c_high.webp"
          alt="remote Image"
          width={700}
          height={900}
        />
        <Image
          src="https://img.freepik.com/free-photo/fantasy-style-scene-international-day-education_23-2151040298.jpg?t=st=1736190369~exp=1736193969~hmac=5a84d259e9cb51bb66d958bbeff6a27257e24b9596977bbbfa9aa1ea9145bea6&w=826"
          alt="remote Image2"
          width={700}
          height={900}
        />
      </div>
    </>
  );
}
