import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.topwrapper}>
     <div className={styles.wrapper}>
    <div className={styles.statictxt}>Lynshia Helps You</div>
    <ul className={styles.dynamictxts}>
      <li><span>Manage Periods.</span></li>
      <li><span>Reduce Pain.</span></li>
      <li><span>Track Your Cycles.</span></li>
      <li><span>Relieve PMS.</span></li>
    </ul>
  </div>
    </div>
  )
}
