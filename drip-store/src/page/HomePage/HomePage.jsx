import React from "react";
import Gallery from "../../components/Gallery/Gallery";
import Layout from "../Layout";

const HomePage = () => {
  const slides = [
    { src: "/home-slide-1.jpeg" },
    { src: "/home-slide-2.jpeg" },
    { src: "/home-slide-3.jpeg" }
  ];

  return (
    <Layout>
      <Gallery
        images={slides}
        width="1440px"
        height="681px"
        radius="4px"
        showThumbs
        className="mx-auto mt-6"
      />
      {/* outras seções virão aqui */}
    </Layout>
  );
};

export default HomePage;
