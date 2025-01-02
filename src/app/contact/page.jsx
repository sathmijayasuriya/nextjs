import React from 'react'
import Link from 'next/link'
import styles from './page.module.css'

export default function page() {
  return (
    <>
      <h1 className={styles.heading}>Contact Us</h1>
      <button style={{padding:"7px",margin:"15px"}}><Link href="/">go back to home page</Link></button>
    </>
  )
}
