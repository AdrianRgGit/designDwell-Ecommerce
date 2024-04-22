export interface ProductType {
  id: string;
  image: string;
  name: string;
  category: string[];
  price: number;
  new: boolean;
  userLike: boolean;
  likes: number;
}

export interface ProductCardProps {
  products: ProductType[];
}
