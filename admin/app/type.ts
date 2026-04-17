export type PlantType = "indoor" | "outdoor" | "regular tree" | "fruit tree";

export interface Plant {
  id: string;
  name: string;
  price: number;
  img: string;
  description: string;
  care: string;
  type: PlantType;
}
