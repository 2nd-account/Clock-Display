import React, { Suspense, lazy } from "react";

const ClockIndex = lazy(() => import("./ClockIndex"));

function Clock() {
  return (
    <div>
      <Suspense fallback={<p>Loading Clock...</p>}>
        <ClockIndex />
      </Suspense>
    </div>
  );
}

export default Clock;
