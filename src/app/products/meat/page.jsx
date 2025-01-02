import React from "react";
import Link from "next/link";
export default function page() {
  const meat = [
    {
      id: 1,
      meatName: "chicken",
    },
    {
      id: 2,
      meatName: "eggs",
    },
    {
      id: 3,
      meatName: "sausages",
    },
  ];

  return (
    <>
      <h1> meat items</h1>
      {/* hard code */}
      {/* <ul>
        <li><Link href="/products/meat/chicken">chicken</Link></li>
        <li><Link  href="/products/meat/eggs">eggs</Link></li>
        <li><Link  href="/products/meat/sausages">sausages</Link></li>
      </ul> */}

      <ul>
        {meat.map((id) => {
          return (
            <Link href={`/products/meat/${id.meatName}`}><li>{id.meatName}</li></Link>
          );
        })}
      </ul>
    </>
  );
}
