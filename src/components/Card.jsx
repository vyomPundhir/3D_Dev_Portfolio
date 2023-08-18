import React from 'react'

const Card = () => {
  return (
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://dummyimage.com/720x400" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Title</h2>
    <p>Description</p>
    <div className="card-actions">
      <span className="btn btn-primary">Tag</span>
      <span className="btn btn-primary">Tag</span>
      <span className="btn btn-primary">Tag</span>
    </div>
  </div>
</div>  )
}

export default Card