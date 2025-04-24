// src/components/HomepageFeatures/index.js
import React from 'react';
import { Pickaxe, Map, Coins, BookOpen } from 'lucide-react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';


export default function HomepageFeatures() {
  return (
    <section id="how-to-play" className={styles.section}>
      <h2 className={styles.title}>How to Play</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <Pickaxe className={styles.icon} />
          <h3>Mining & Jobs</h3>
          <p>Start your career, mine $FLORA, or take on other roles in the economy.</p>
        </div>
        <div className={styles.card}>
          <Map className={styles.icon} />
          <h3>Land & Upgrades</h3>
          <p>Buy land, improve your tools, and grow your impact over time.</p>
        </div>
        <div className={styles.card}>
          <Coins className={styles.icon} />
          <h3>Earn & Trade</h3>
          <p>Get rewards, trade assets, and participate in a living economy.</p>
        </div>
        <div className={styles.card}>
          <BookOpen className={styles.icon} />
          <h3>Full Guide</h3>
          <p>
            <Link to="/docs/getting-started/how-to-play" className={styles.link}>
              Read more in the documentation →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
