import { Image } from "react-native";

export interface SliderType {
  appName: string;
  appVolume: number;
  appIcon: Image;
}

export type SlidersType = SliderType[];
