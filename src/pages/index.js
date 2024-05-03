import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <Heading as="h2">
         Kompendium wiedzy
        </Heading>
        <p className="hero__subtitle">Wszystko czego potrzebujesz w jednym miejscu</p>
        <p></p>
        <div className={styles.buttons} style={{gap:'32px'}}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/wstęp">
           Zaczynajmy!
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://www.youtube.com/@marekgacekdev">
            YouTube
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Kompendium wiedzy o PHP`}
      description="PHP Mistrz: Najlepsze kompendium wiedzy o PHP!">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
