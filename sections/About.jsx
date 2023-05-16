'use client';

import {motion} from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles"
import { fadeIn, navVariants } from "../utils/motion"
import { FadeIn, staggerContainer} from "../utils/motion";
import { useEffect, useState } from "react";

const About = ({content}) => {
  const [desc, setDesc] = useState([])
  
  useEffect(() => {
    const filteredContent = content.filter(
      (item) => item.title === "About"
    );
  
    if (filteredContent.length > 0) {
      const about = filteredContent[0];
      setDesc(about)
    } else {
      console.log(
        "Aucune catégorie avec le titre 'About' n'a été trouvée."
      );
    }
  })
  return (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
        <TypingText title="| About SLPC" textStyles="text-center"/>
        <motion.p variants={fadeIn("up","tween", 0.2, 1)} className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white">
          {
            desc.length === 0 ? (<span>SLspanC, Second Life Performance Computer a été créée en 2018. Comme son nom l’indique, c’est une entreprise qui fait ou refait vivre des ordinateurs en tout genre : station de travail pour de la bureautique, configuration pour du jeu vidéo, du développement logiciel, du traitement d’image etc.

            SLPC s’engage dans la qualité de ses produits et garanti son service sans limite dans le temps.
            
            L’expert en question, Laurent Dubost est le gérant de SLPC et se bat tous les jours pour permettre à une large clientèle d’acquérir un matériel informatique de qualité qui répondra au mieux aux performances souhaitées tout en maitrisant le coût financier inhérent. Son savoir faire est né de l’union entre l’ingénierie en système de sécurité et l’électronique. Rigueur et transparence sont les mots d’ordre chez SLPC.</span>) : desc.desc
          }
        </motion.p>
        <motion.img src="/arrow-down.svg" alt="arrow down" 
         variants={fadeIn("up", "tween", 0.3,1)}
         className="w-[18px] h-[28px] object-contain mt-[28px]"/>
      </motion.div>
  </section>
  )
};

export default About;
