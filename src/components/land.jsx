'use client';

import React from 'react';
import {useEffect, useRef } from 'react';
import styles from '@/app/styles/main.css';
import Typed from 'typed.js';

// use props in Next.JS

const Land = ({ fixed }) => {
  const typer = useRef(null);
  useEffect(() => {
    const typed = new Typed(typer.current, {
      strings: ["TheYeezyGuy", "WorldHatesD", "a Developer", "an Editor", "an Aviationist"],
      startDelay: 300,
      typeSpeed: 75,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,

    });

    return () => {
      typed.destroy();
    };
    }, []);
  return (
    <div
    className=" mx-auto px-4 py-4 h-[25vh] bg-slate-900"
    >
      <h1 className="text-3xl font-bold titleName " styles={styles.titleName}>{fixed}<span ref={typer} className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent
      "></span></h1>
      
      
      

      
    </div>
  )
}

export default Land
