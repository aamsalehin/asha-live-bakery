import { Suspense } from "react";
import OrderSuccessClient from "./order-success-client";

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={null}>
      <OrderSuccessClient />
    </Suspense>
  );
}
