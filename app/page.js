"use client";

import { useEffect, useState } from "react";
import { Footer, Navbar } from "../components";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "../sections";
import axios from "axios";

const Page = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchContent = async () => {
      const res = await axios.get("http://localhost:5000/api/post/");
      const contentFiltered = res.data.filter(
        (item) => item.categories[0] === "site"
      );
      setContent(contentFiltered);
    };
    fetchContent();
  }, []);

  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero content={content} />
      <div className="raltive">
        <About content={content} />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="raltive">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <World />
      <div className="raltive">
        <Insights />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
