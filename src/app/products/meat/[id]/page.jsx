import React from "react";
import Link from "next/link";

export default function page({ params }) {
  return (
    <>
      <h1> meat item is {params.id}</h1>
      <div>
        <button style={{margin:"10px",padding:"7px"}}>
          <Link href="/products/meat">
          back to products
          </Link>
        </button>
      </div>
    </>
  );
}
