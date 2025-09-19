import { BaseProps } from ".";

export type NavigatorItemProps = {
  label: string;
  path?: string;
  disabled?: boolean;
  children?: NavigatorItemProps[];
};
export interface NavigatorProps extends BaseProps {}
