const range = (min: number, max: number): number =>
  Math.round(Math.random() * (max - min + 1) + min);

export type ProductType = {
    name: string;
    productId: string;
    quantity: number;
    price: number;
    toBePurchased: number;
    toBeSold: number;
}

export const generateMarket = (): Array<ProductType> => {
  const market = [
    {
      name: "Gum Drops",
      productId: "gumDrops",
      quantity: range(25, 80),
      price: range(2, 8),
      toBePurchased: 0,
      toBeSold: 0,
    },
    {
      name: "Laffy Taffy",
      productId: "laffyTaffy",
      quantity: range(10, 35),
      price: range(10, 50),
      toBePurchased: 0,
      toBeSold: 0,
    },
    {
      name: "Pixie Stix",
      productId: "pixieStix",
      quantity: range(5, 50),
      price: range(5, 25),
      toBePurchased: 0,
      toBeSold: 0,
    },
    {
      name: "Gobstoppers",
      productId: "gobstoppers",
      quantity: range(10, 40),
      price: range(10, 40),
      toBePurchased: 0,
      toBeSold: 0,
    },
    {
      name: "Mars Bars",
      productId: "marsBars",
      quantity: range(5, 20),
      price: range(20, 80),
      toBePurchased: 0,
      toBeSold: 0,
    },
    {
      name: "Jelly Beans",
      productId: "jellyBeans",
      quantity: range(10, 60),
      price: range(25, 100),
      toBePurchased: 0,
      toBeSold: 0,
    },
    {
      name: "Peanut Butter Cups",
      productId: "peanutButterCups",
      quantity: range(5, 65),
      price: range(35, 85),
      toBePurchased: 0,
      toBeSold: 0,
    },
  ];
  return market;
};
