import styles from '../styles/Sections.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.sectionLabel}>About Me</p>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <h2 className={styles.sectionHeading}>Building the future<br />of data, one pipeline at a time.</h2>
            <p className={styles.para}>
              I'm Kartikey Dwivedi — a B.Tech Computer Science graduate from Dr. Abdul Kalam Technical University,
              Lucknow, Uttar Pradesh, India (2025) with a strong foundation in Python, data engineering, and database
              technologies. I'm passionate about building efficient, scalable data solutions and transforming raw
              data into actionable insights.
            </p>
            <p className={styles.para}>
              With hands-on experience in ETL pipelines, data warehousing, and big data tools like Apache Spark,
              I bring a detail-oriented approach and a quick-learner mindset to every challenge. Currently
              available for data engineering roles in Delhi, India.
            </p>
          </div>
          <div className={styles.statsGrid}>
            {[
              { num: '1', label: 'Project Completed' },
              { num: '2', label: 'Certifications Earned' },
              { num: '2025', label: 'B.Tech Graduate' },
              { num: 'Delhi', label: 'Based in India' },
            ].map(({ num, label }) => (
              <div key={label} className={styles.statCard}>
                <span className={styles.statNum}>{num}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
