import Link from "next/link";
import styles from "./product.module.css";
import { FaRegStar, FaStar } from "react-icons/fa";
import { CiSearch, CiHeart } from "react-icons/ci";

const Card = ({ name, price, img }) => {
  console.log("Product Name ->", name);
  console.log("Product Price ->", price);
  return (
    <div className={styles.card}>
      <div className={styles.details_container}>
        <img src='/images/coffee.jpg' alt='' />
      </div>

      <div className={styles.details}>
        <Link href={"/"}>{name}</Link>
        <div>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
          <FaRegStar />
        </div>
        <span>{price?.toLocaleString()} تومان</span>
      </div>
    </div>
  );
};

export default Card;
