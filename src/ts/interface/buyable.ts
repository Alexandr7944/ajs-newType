interface IBuyable {
  id: number;
  name: string;
  readonly price: number;
  discount: number;
  count: number;
  singleСopy: boolean;
}

export default IBuyable;
