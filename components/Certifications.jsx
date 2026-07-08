import styles from '../styles/Sections.module.css';

const CERTS = [
  {
    title: 'Data Engineering for Beginners: Learn SQL, Python & Spark',
    issuer: 'Udemy',
    desc: 'A foundational data engineering course covering the core toolkit used in real-world pipelines — SQL for querying and transforming structured data, Python for scripting and automation, and Apache Spark for distributed data processing. It walks through building simple ETL workflows end-to-end, from reading raw data to producing clean, query-ready datasets, giving a solid base for designing and maintaining data pipelines.',
    link: 'https://www.udemy.com/certificate/UC-1de4d7c3-ecb4-447b-b293-71dd5ba22555/',
    badge: 'SQL · Python · Spark',
    logo: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg',
  },
  {
    title: 'Big Data Engineering Bootcamp with GCP and Azure Cloud',
    issuer: 'Udemy',
    desc: 'A cloud-focused big data bootcamp covering how to design and run data engineering workloads on Google Cloud Platform and Microsoft Azure. It covers cloud storage and compute services, building scalable data pipelines, and processing large datasets in a distributed cloud environment — bridging the gap between on-premise data engineering skills and modern cloud-native data platforms.',
    link: 'https://www.udemy.com/certificate/UC-7bed6f5e-1802-40f2-b41f-d25d57563f2d/',
    badge: 'GCP · Azure · Big Data',
    logo: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.sectionLabel}>Certifications</p>
        <h2 className={styles.sectionHeading}>Credentials & Learning</h2>
        <div className={styles.certsGrid}>
          {CERTS.map(({ title, issuer, desc, link, badge, logo }) => (
            <div key={title} className={styles.certCard}>
              <div className={styles.certHeader}>
                <div className={styles.certBadge}>{badge}</div>
              </div>
              <h3 className={styles.certTitle}>{title}</h3>
              <p className={styles.certIssuer}>{issuer}</p>
              <p className={styles.certDesc}>{desc}</p>
              <a href={link} target="_blank" rel="noopener noreferrer" className={styles.certLink}>
                View Certificate →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
