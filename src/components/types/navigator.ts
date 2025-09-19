import { BaseProps } from ".";

export type NavigatorItem = {
  name: string;
  path?: string;
  disabled?: boolean;
};
export interface NavigatorProps extends BaseProps {}
