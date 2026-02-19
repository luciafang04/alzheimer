// components/ui/card.tsx
import React, { FC, PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren<{}> {
  className?: string;
}

export const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-2xl shadow-md ${className || ""}`}>
      {children}
    </div>
  );
};
