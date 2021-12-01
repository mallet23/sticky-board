import { WithPosition } from "./WithPosition";
import { WithSize } from "./WithSize";

export interface Note extends WithPosition, WithSize {
  id: string;
  title: string;
  description: string;
  color: string;
}