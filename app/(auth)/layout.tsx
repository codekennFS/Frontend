import React from "react";

type Props = {};

export default function layout({
  children,
}: {
  children: React.ReactNode;
}): Props {
  return <div className="w-full">{children}</div>;
}
