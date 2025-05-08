import React from 'react';
import { Analytics } from "@vercel/analytics/react";
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Economy from '../components/Economy';
import Roadmap from '../components/Roadmap';

import styles from './index.module.css';


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <Analytics />
      <main>
        <section className={styles.hero}>
          <h1>Welcome to InFlora 🌱</h1>
          <p>A sustainable simulation crypto game where your actions build the economy.</p>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="#how-to-play">Start Playing</Link>
            <Link className="button button--secondary button--lg" to="/docs/overview/what-is-inflora">Read Documentation</Link>
          </div>
        </section>
        <HomepageFeatures />
        <Economy />
        <Roadmap />
      </main>
    </Layout>
  );
}
