import { h } from "vue";
import { BaseProps } from ".";
import { IconProps } from "./icon";
import { IconsProp } from "@dbetka/vue-material-icons/dist/jscache/icons-names";

export type NavigatorItemProps = {
  label: string;
  to?: {
    path: string;
    target: string;
  };
  disabled?: boolean;
  icon?: IconsProp;
  iconRender?: ReturnType<typeof h>;
  children?: NavigatorItemProps[];
};
export interface NavigatorProps extends BaseProps {
  items: NavigatorItemProps[];
}
