import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export default function MaxWidthWrapper({
  className,
  children,
  style,
  large = false,
}: {
  className?: string;
  large?: boolean;
  style?: any;
  children: ReactNode;
}) {

  const _style = !! style && typeof style === 'object' ? style : {}

  return (
    <div
      className={cn(
        "container",
        large ? "max-w-screen-2xl" : "max-w-6xl",
        className,
      )}
      style={_style}
    >
      {children}
    </div>
  );
}
