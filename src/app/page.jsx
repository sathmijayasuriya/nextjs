import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import mountain from '../../public/mountain.png';
import logo from '../../public/nextjslogo.jpeg';
export default function Home() {

  console.log("image ----------- ",mountain);
  //we can't see output on the browser because of server component rendering
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
      {/* It automatically optimizes images by resizing and compressing them to deliver faster load times. 
      Next.js creates optimized images on demand and stores them temporarily in its server cache. */}
      <Image alt="image optimization" style={{width:"100%",objectFit:"cover"}} src={mountain}/>  
      <img style={{width:"50%"}} src={logo.src} alt="nextJS Logo" />
      <Image
      src="https://image.cdn2.seaart.me/2024-09-19/crlp9b5e878c73f1uflg/0304057175d2d0fea4795ebab810347c_high.webp"
      alt="remote Image"
      width={700}
      height={900}
    />
      </div>
    </div>
  );
}
