import React from "react";
import Link from "next/link";
export default function page() {
  return (
    <>
      <h1> meat items</h1>
      <ul>
        <li><Link href="/products/meat/chicken">chicken</Link></li>
        <li><Link  href="/products/meat/eggs">eggs</Link></li>
        <li><Link  href="/products/meat/sausages">sausages</Link></li>
      </ul>
    </>
  );
}
