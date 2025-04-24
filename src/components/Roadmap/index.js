import React from 'react';

import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const roadmapData = [
    {
      quarter: "Q2 2025",
      items: [
        "Whitepaper release",
        "Initial $FLORA token mining",
        "Landing page & docs online",
      ],
    },
    {
      quarter: "Q3 2025",
      items: [
        "Beta version of InFlora game",
        "NFT kits & jobs integration",
        "Community building phase 1",
      ],
    },
    {
      quarter: "Q4 2025",
      items: [
        "Token swap feature",
        "Governance voting system",
        "First staking pools",
      ],
    },
    {
      quarter: "Q1 2026",
      items: [
        "User-generated projects",
        "Marketplace live",
        "New roles & upgrades",
      ],
    },
    {
      quarter: "Q2 2026",
      items: [
        "Cross-chain compatibility",
        "Mobile-friendly version",
        "Team expansion",
      ],
    },
    {
      quarter: "Q3 2026",
      items: [
        "Partnerships & grants",
        "DAO integration improvements",
        "New gameplay mechanics",
      ],
    },
  ];

export default function Roadmap() {
    return(
        <section id='roadmap' className={styles.roadmap}>
            <h2 className={styles.title}>🌿 Roadmap Timeline</h2>
            <div className={styles.grid}>
                {roadmapData.map((q, idx) => (
                <div className={styles.card} key={idx}>
                    <div className={styles.quarter}>{q.quarter}</div>
                    <ul className={styles.items}>
                    {q.items.map((item, i) => (
                        <li key={i}>• {item}</li>
                    ))}
                    </ul>
                </div>
                ))}
            </div>
            </section>
    )
}