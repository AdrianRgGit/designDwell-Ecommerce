import React from 'react'

const ProductNotFound = () => {
  return (
    <section className="flex h-screen flex-col items-center justify-center space-y-6">
      <p className="font-inter text-9xl">SORRY</p>
      <p className="text-3xl">
        This product is no longer available or has not been found. We apologize
        for any inconvenience
      </p>
    </section>
  );
}

export default ProductNotFound