import React, { useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useHistory } from '@docusaurus/router';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
            <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/petstore/swagger-petstore-yaml">
                API Documentation
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <ThemedImage
              alt="API Documentation illustration"
              sources={{
                light: useBaseUrl('/img/api-illustration-light.svg'),
                dark: useBaseUrl('/img/api-illustration-dark.svg'),
              }}
              className={styles.featureImg}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const history = useHistory();

  useEffect(() => {
    // Redirect to the Petstore API documentation page
    history.replace('/docs/petstore/swagger-petstore-yaml');
  }, [history]);

  return (
    <Layout
      title={siteConfig.title}
      description="Moderne API-Dokumentation mit OpenAPI">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
