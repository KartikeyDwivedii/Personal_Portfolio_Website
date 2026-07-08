import styles from '../styles/Sections.module.css';

const PROJECTS = [
  {
    title: 'Hotel Management Data Warehousing System',
    subtitle: 'ETL Pipeline · Data Warehouse · Analytics',
    tags: ['Python', 'ETL', 'Data Modeling', 'Data Warehousing', 'Apache Spark', 'MySQL'],
    desc: 'A data warehousing project built around the hospitality domain, designed to turn scattered, day-to-day hotel operations data — room bookings, guest check-ins/check-outs, billing, and inventory — into a single, analytics-ready source of truth. Raw operational data from multiple sources is extracted, cleaned, and transformed using Python and Pandas, then loaded into a star-schema warehouse optimized for reporting. Apache Spark handles distributed processing for larger historical datasets, while fact and dimension tables make it possible to analyze occupancy trends, revenue, and guest behavior far faster than querying transactional tables directly.',
    github: 'https://github.com/KartikeyDwivedii/Hotel-Management-Data-Warehousing-Project',
    icon: '🏨',
    highlights: [
      'Multi-source ETL pipeline for hotel operations data',
      'Star-schema data warehouse design (fact & dimension tables)',
      'Apache Spark for distributed processing of large datasets',
      'Analytics-ready reporting on occupancy, revenue & bookings',
      'Automated data quality validation and cleaning',
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className={`${styles.section} ${styles.altBg}`}>
      <div className={styles.inner}>
        <p className={styles.sectionLabel}>Projects</p>
        <h2 className={styles.sectionHeading}>Featured Work</h2>
        <div className={styles.projectsGrid}>
          {PROJECTS.map(({ title, subtitle, tags, desc, github, icon, highlights }) => (
            <div key={title} className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <div className={styles.projectIcon}>{icon}</div>
                <div>
                  <h3 className={styles.projectTitle}>{title}</h3>
                  <p className={styles.projectSubtitle}>{subtitle}</p>
                </div>
              </div>
              <div className={styles.projectTags}>
                {tags.map(t => <span key={t} className={styles.projectTag}>{t}</span>)}
              </div>
              <p className={styles.projectDesc}>{desc}</p>
              <ul className={styles.projectHighlights}>
                {highlights.map(h => <li key={h}>{h}</li>)}
              </ul>
              <a href={github} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
