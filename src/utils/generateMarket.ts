const range = (min: number, max: number): number =>
  Math.round(Math.random() * (max - min + 1) + min);

export type ProductType = {
  name: string;
  productId: string;
  quantity: number;
  price: number;
  toBePurchased: number;
  toBeSold: number;
};

export const generateMarket = (): Array<ProductType> => {
  const productInfo: Array<Array<string>> = [
    ["Gum Drops", "gumDrops"],
    ["Pixie Stix", "pixieStix"],
    ["Gobstoppers", "gobstoppers"],
    ["Mars Bars", "marsBars"],
    ["Jelly Beans", "jellyBeans"],
    ["Laffy Taffy", "laffyTaffy"],
  ];

  const market: Array<ProductType> = productInfo.map((product: string[]) => {
    console.log("some logic to generate high and lows");
    return {
      name: product[0],
      productId: product[1],
      quantity: range(10, 20),
      price: range(5, 25),
      toBePurchased: 0,
      toBeSold: 0,
    };
  });

  return market;
};
