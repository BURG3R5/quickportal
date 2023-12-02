export default interface Arguments {
  from: number;
  as: string | undefined;
  to: string;
  open: boolean;
  alias: string;
  log: boolean;
  _: string[];
  $0: string;
  [x: string]: unknown;
}
