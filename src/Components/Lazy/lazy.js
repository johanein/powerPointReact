import React, { memo, Suspense } from "react";

const Loading = () => (<div style={{ color: "black" }}>Loading.....</div>);
const Lazy = memo((props) => {

  return <Suspense fallback={<Loading />}>{props.children}</Suspense>;
});

export default Lazy;
