import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './swap.module.css';
import floraCoin from '@site/static/img/token_logo.png';



export default function Swap() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Swap" description="Convert your crypto to $FLORA">
      <div className={styles.container}>
        <div className={styles.header}>
          <img src={floraCoin} alt="$FLORA Coin logo" className={styles.coiniconlarge} />
          <h1>Swap to $FLORA</h1>
        </div>

        <p className={styles.subtitle}>Exchange your crypto to the native InFlora token</p>
        
        <div className={styles.card}>
          <label htmlFor="network">Select Network</label>
          <select id="network">
            <option>BNB Chain</option>
            <option>Polygon</option>
            <option>Base</option>
            <option>Solana</option>
          </select>

          <label htmlFor="amount">Amount to Swap</label>
          <input id="amount" type="number" placeholder="0.00" />

          <div className={styles.conversiondisplay}>= ~0 $FLORA</div>

          <button disabled>Swap Now (Coming Soon)</button>
        </div>
      </div>
    </Layout>
  );
}
