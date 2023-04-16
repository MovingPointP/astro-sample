type Color = "white" | "black" | "gray";

export interface Product {
  id: number;
  title: string;
  price: number;
  color: Color[];
}

export interface ApiResults {
  count: number;
  data: Product[];
}

export async function getNewArrivals() {
  const response = await fetch(
    "https://next-api-mock-git-main-thirosue.vercel.app/api/products/new",
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = (await response.json()) as ApiResults;
  return data;
}