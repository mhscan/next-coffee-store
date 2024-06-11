import styles from "./footer.module.css";
import { MdOutlineCopyright } from "react-icons/md";

import { FaRegHeart } from "react-icons/fa";
import Article from "./Article";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <main className='container'>
        <div className={styles.con}>
          <ul className={styles.links}>
            <li>
              <Link href={"/contact-us"}>تماس با ما</Link>
            </li>
            <li>
              <Link href={"/about-us"}>درباره ما </Link>
            </li>
            <li>
              <Link href={"/rules"}>قوانین</Link>
            </li>

            <li>
              <Link href={"/category"}> فروشگاه </Link>
            </li>
            <li>
              <Link href={"/articles"}> مقالات </Link>
            </li>
            <li>
              <Link href={"/cart"}>سبد خرید</Link>
            </li>
            <li>
              <Link href={"/wishlist"}>علاقه مندی ها</Link>
            </li>
          </ul>

          <section className={styles.descriptions}>
            {/* <img src="/images/logo_light.png" alt="" /> */}

            <div className={styles.description}>
              <p>پیگیری سفارشات : 09170000000</p>
            </div>
            <div className={styles.description}>
              <p>support@gmail.com.com</p>
            </div>
          </section>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
