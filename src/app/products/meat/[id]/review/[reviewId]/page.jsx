import React from 'react'

export default function page({params}) {
  return (
    <div>
         {/* //manual review */}
        <h1>meat item 1 review 1 </h1> 
        {/* //mested dunamic routing  */}
        <h1>mean item {params.id} review {params.reviewId}</h1>
    </div>
  )
}
