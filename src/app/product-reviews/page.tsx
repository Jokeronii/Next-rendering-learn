import { Product } from '@/components/product';
import { Reviews } from '@/components/reviews';
import { Suspense } from 'react';

export default function ProductReviewsPage() {
  return (
    <>
      <h1>Product review</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Product />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Reviews />
      </Suspense>
    </>
  );
}
