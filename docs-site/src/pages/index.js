import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Documentation for the TLBX-1 Audio Toolbox">
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 120px)', // Adjust based on header/footer height
      }}>
        <div style={{ textAlign: 'center' }}>
          <img 
            src="/img/logo.svg" 
            alt="TLBX-1 Logo" 
            style={{ width: '200px', height: '200px', marginBottom: '20px' }} 
          />
          <h1 style={{ fontSize: '3rem' }}>{siteConfig.title}</h1>
          <p style={{ fontSize: '1.5rem' }}>{siteConfig.tagline}</p>
        </div>
      </main>
    </Layout>
  );
}
