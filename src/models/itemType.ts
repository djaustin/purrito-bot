import { WeightedDescriptor } from "./itemDescriptor";

export interface ItemType  {
    potentialMaterials?: MaterialType[]
    label: string
}

export interface MaterialType extends WeightedDescriptor {
    label: Material
}

export type Material = "METAL" | "WOOD" 