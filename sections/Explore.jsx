'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';
import axios from 'axios';

const Explore = () => {
  const [active, setActive] = useState({});
  const [computer, setComputer] = useState([])
  
  useEffect(() => {
    const fetchComputer = async () => {
      const res = await axios.get("http://localhost:5000/api/post/");
      const computerFiltered = res.data.filter(
        (item) => item.categories[0] === "gaming"
      );
      setComputer(computerFiltered);
      setActive(computerFiltered[1]._id)
    };
    fetchComputer();
  }, []);



  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={<>Choose the world you want <br className="md:block hidden" /> to explore</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {computer.map((pc) => (
            <ExploreCard
              key={pc._id}
              pc={pc}
              index={pc._id}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;