import { createContext, ReactNode, useState } from 'react';

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
}


interface CartProps{
  id: number;
}
export const cartContext = createContext({} as CartContextData)