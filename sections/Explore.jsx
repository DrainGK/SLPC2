'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';
import axios from 'axios';

const Explore = () => {
  const [active, setActive] = useState({});
  const [computer, setComputer] = useState([]);
  const [cat, setCat] = useState([]);
  const [selectedCat, setSelectedCat] =useState("gaming");
  
  useEffect(() => {

    const fetchComputer = async () => {
      const res = await axios.get("http://localhost:5000/api/post/");
      const computerFiltered = res.data.filter(
        (item) => item.categories[0] === selectedCat
      );
      setComputer(computerFiltered);
      setActive(computerFiltered[1]._id)
    };
    fetchComputer();
  }, [selectedCat]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("http://localhost:5000/api/categories")
        setCat(res.data);
    };
    fetchCategories();
  })



  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="show"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Les projets" textStyles="text-center" />
        <TitleText
          title={<>comme seule limite <br className="md:block hidden" /> Votre imagination</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {computer.slice(0,6).map((pc) => (
            <ExploreCard
              key={pc._id}
              pc={pc}
              index={pc._id}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
        <div className="mt-[50px] flex items-center justify-center flex-row gap-5">
          {cat.slice(0,4).map((category) => (
              <button data-id={category.name} type="button" className="flex items-center justify-center w-[100px]  py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px] text-white"
              onClick={(e) => setSelectedCat(category.name)}>
                  {category.name}
              </button>
            ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;