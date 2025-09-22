import { IconsProp } from "@dbetka/vue-material-icons/dist/jscache/icons-names";
import { SizeOption } from ".";

export type IconProps = {
  name: IconsProp;
  size?: number | SizeOption;
  color?: string;
};
