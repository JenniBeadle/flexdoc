import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate, {translate} from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img className={styles.featureImage} src='img/FLEx.png' alt="Easy to Use"/>
        <h1 className="hero__title"><Translate>
        	FLEx Documentation</Translate></h1>
        <p className="hero__subtitle"><Translate>
        Software tools for language and cultural data, with support for complex scripts.
        </Translate></p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://software.sil.org/fieldworks/download/demo-movies/">
            FLEx Demo Videos ⏱️
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
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
<main>
  <div className={clsx('col-*-9', styles.feature)}>
    <div className="text--center">
      <p>
      <Translate>
      FieldWorks consists of software tools that help you manage linguistic and cultural data. FieldWorks supports tasks ranging from the initial entry of collected data through to the preparation of data for publication, including dictionary development, interlinearization of texts, morphological analysis, and other publications.
      </Translate>
      </p>
    </div>
  </div>
</main>    </Layout>
  );
}
