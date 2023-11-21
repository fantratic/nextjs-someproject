import React from 'react'
import styles from '@/app/styles/main.css'

// use props in Next.JS


const Land = ({ title }) => {
  return (
    <div
    className="flex flex-col justify-center items-center h-screen w-screen bg-gradient-to-r from-blue-200 to-cyan-200"
    >
      <p className="text-3xl font-bold titleName " styles={styles.titleName}>{title}</p>
      
    </div>
  )
}

export default Land
