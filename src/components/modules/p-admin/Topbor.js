import styles from "./topbar.module.css";
import { IoIosSearch, IoIosNotifications } from "react-icons/io";
const Topbar = () => {
  return (
    <>
      <div className={styles.topbar}>
        <div className={styles.profile}>
          <div>
            <p>ادمین</p>
        
          </div>
          <img src="/images/shahin.jpg" alt="" />
        </div>
        <section>
          
          
        </section>
      </div>
    </>
  );
};

export default Topbar;
