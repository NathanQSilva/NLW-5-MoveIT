import Head from 'next/head'

import { CompletedChallenges } from '../components/CompletedChallenges';
import { Contdown } from '../components/Countdown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <head>
        <title>Inicio | move.it</title>
      </head>

      <ExperienceBar />

      <section>
        <div >
          <Profile />
          <CompletedChallenges />
          <Contdown />
        </div>
        <div>
          
        </div>
      </section>
    </div>
  )
}
