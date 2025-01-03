import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import mountain from '../../public/mountain.png';
export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Next.js concepts</h1>
      <ul>
        <li><a href="/" className={styles.link}> Home</a></li>
        <li><a href="/services"> Services</a></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/products">Prodcuts</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
        {/* external sites open */}
        <li><Link id={styles.specialId} href = "https://nextjs.org/" target="_blank"> NextJS </Link></li>
        <li><Link href="/products/meat">meat page</Link></li>

      </ul>
      <div style={{height:"50%"}}>
      <Image style={{width:"100%"}} src={mountain}/>
      </div>
    </div>
  );
}
