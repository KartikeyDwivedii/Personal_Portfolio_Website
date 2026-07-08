import styles from '../styles/Sections.module.css';

const EDUCATION = [
  {
    degree: 'B.Tech — Computer Science & Engineering',
    institute: 'Dr. Abdul Kalam Technical University',
    year: '2021 – 2025',
    location: 'Lucknow, Uttar Pradesh, India',
    desc: 'Completed four-year undergraduate program in Computer Science, building a strong foundation in algorithms, data structures, databases, and software engineering. Focused on data engineering, big data technologies, and cloud computing during the final years.',
  },
  {
    degree: 'Senior Secondary (Class XII) — Science Stream (PCM)',
    institute: 'Saraswati Vidhya Mandir Intermediate College (UP Board)',
    year: '2020',
    location: 'Anandnagar, Uttar Pradesh, India',
    desc: 'Completed senior secondary education under the UP Board with Physics, Chemistry, and Mathematics as core subjects, building analytical and logical thinking skills that later supported a career in technology.',
  },
  {
    degree: 'High School (Class X)',
    institute: 'Smt. Draupadi Devi Tripathi Intermediate College (CBSE)',
    year: '2018',
    location: 'Gorakhpur, Uttar Pradesh, India',
    desc: 'Completed high school education under the CBSE board with a strong grounding in science and mathematics, developing the quantitative aptitude and disciplined work ethic that form the backbone of an engineering mindset.',
  },
];

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.sectionLabel}>Education</p>
        <h2 className={styles.sectionHeading}>Academic Journey</h2>
        <div className={styles.timeline}>
          {EDUCATION.map(({ degree, institute, year, location, desc }, i) => (
            <div key={i} className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              <div className={styles.timelineContent}>
                <div className={styles.timelineTop}>
                  <div>
                    <h3 className={styles.timelineDegree}>{degree}</h3>
                    <p className={styles.timelineInstitute}>{institute}</p>
                  </div>
                  <div className={styles.timelineMeta}>
                    <span className={styles.timelineYear}>{year}</span>
                    <span className={styles.timelineLocation}>{location}</span>
                  </div>
                </div>
                <p className={styles.timelineDesc}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
