export interface ProductType {
  id: string;
  image: string;
  name: string;
  category: string[];
  price: number;
  description: string;
  new: boolean;
  userLike: boolean;
  likes: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProductCardProps {
  products: ProductType[];
}
