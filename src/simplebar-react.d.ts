declare module "simplebar-react" {
  import { ComponentType, HTMLAttributes, ReactNode } from "react";
  export interface SimpleBarProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    autoHide?: boolean;
    scrollbarMinSize?: number;
    // You can add more SimpleBar props here if needed
  }
  const SimpleBar: ComponentType<SimpleBarProps>;
  export default SimpleBar;
}
