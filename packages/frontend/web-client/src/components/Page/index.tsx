import { Loading } from "design-system";
import React from "react";

interface Props {
  load: () => Promise<{
    default: React.ComponentType
  }>;
}

const loading = (
  <div
    style={{
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      minHeight: "100vh",
    }}
  >
    <Loading />
  </div>
);

const Page = ({ load }: Props) => {
  const LazyComponent = React.lazy(load);
  return (
    <React.Suspense fallback={loading}>
      <LazyComponent />
    </React.Suspense>
  );
};

export default Page;
