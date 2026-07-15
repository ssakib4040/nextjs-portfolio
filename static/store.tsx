export interface StoreProduct {
  title: string;
  description: string;
  image: string;
  price: number;
  category: "templates" | "plugins" | "mobile";
  demoUrl?: string;
  tags?: string[];
}

export const storeProducts: StoreProduct[] = [];
