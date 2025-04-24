import React from 'react';

import Link from '@docusaurus/Link';
import styles from './styles.module.css';

import economyCycle from '@site/static/img/economy-cycle.png'

export default function Economy() {
    return(
        <section id='economy' className={styles.economic}>
            <h2>The $FLORA Economy Flow</h2>
            <img src={economyCycle} alt="InFlora Economy Flow" className={styles.graphic} />
            <p className={styles.description}>
                InFlora's economy is driven by real utility and sustainability. The $FLORA token flows through mining, jobs,
                upgrades, staking, and community treasury systems that aim to balance growth and scarcity.
            </p>
        </section>
    )
}