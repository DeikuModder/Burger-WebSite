export interface BurgerInterface {
  _id?: string;
  name: string;
  ingredients: string[];
  price: number;
  combos?: {
    content: string[] | null | undefined;
    price: number | null | undefined;
  };
}

export interface BurgerCard {
  name: string;
  price: number;
  ingredients: string[];
  image: string;
}

export interface Logeduser {
  username: string;
  email: string;
  token: string;
}

export type UserPublicData = Omit<Logeduser, "token">;
