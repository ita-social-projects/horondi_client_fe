import { useContext } from 'react';
import { CartContext } from '../context/cart-context';
import { CurrencyContext } from '../context/currency-context';
import { calcPriceForCart } from '../utils/priceCalculating';
import { useCurrency } from './use-currency';

export const useCart = () => {
  const { getPriceWithCurrency, getCertificatePriceInUSD } = useCurrency();

  const { cart, setCart } = useContext(CartContext);

  const { currency } = useContext(CurrencyContext);

  const addToCart = (item) => {
    setCart((prevCart) => [item, ...prevCart]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartItem = (id) =>
    cart.find((cartItem) => cartItem.id === id || cartItem.productId === id);

  const getTotalPriceWithCertificate = (certificate) => {
    const { value } = certificate.getCertificateByParams;
    if (currency === 'USD') {
      return getTotalPrice() - getCertificatePriceInUSD(value);
    }
    return getTotalPrice() - value;
  };

  const getTotalPricesWithPromoCode = (promoCode) => {
    const { discount, categories } = promoCode.getPromoCodeByCode;
    const newArr = cart.map((item) => {
      const { price } = item.sizeAndPrice;

      const isAllowCategory = categories.find(
        (el) => el.toLowerCase() === item.category.code.toLowerCase()
      );
      if (isAllowCategory) {
        return [getPriceWithCurrency(Math.round(price - (price / 100) * discount)), item.quantity];
      }
      return [getPriceWithCurrency(price), item.quantity];
    });
    return newArr.reduce((acc, item) => {
      const [itemPrice, itemQuantity] = item;
      return acc + calcPriceForCart(itemPrice, itemQuantity);
    }, 0);
  };

  const getProductPriceWithPromoCode = (id, promoCode) => {
    const product = getCartItem(id);
    const { discount, categories } = promoCode.getPromoCodeByCode;
    const isAllowCategory = categories.find(
      (item) => item.toLowerCase() === product.category.code.toLowerCase()
    );
    const { price } = product.sizeAndPrice;

    if (isAllowCategory) {
      return getPriceWithCurrency(Math.round(price - (price / 100) * discount));
    }

    return getPriceWithCurrency(price);
  };

  const getProductPrice = (id) => getPriceWithCurrency(getCartItem(id).sizeAndPrice.price);

  const setCartItem = (id, item) => {
    const newCart = cart.map((cartItem) => (cartItem.id === id ? item : cartItem));
    setCart(newCart);
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== item.id));
  };

  const isInCart = (productId, sizeId = null) =>
    cart.find(
      (cartItem) =>
        productId === cartItem.productId &&
        (sizeId ? sizeId === cartItem.sizeAndPrice.size._id : true)
    );

  const changeQuantity = (id, count) => {
    setCart((prevCart) =>
      prevCart.map((el) => {
        if (el.id === id) el.quantity = count;
        return el;
      })
    );
  };

  const getTotalPrice = () =>
    cart.reduce(
      (acc, item) =>
        acc + calcPriceForCart(getPriceWithCurrency(item.sizeAndPrice.price), item.quantity),
      0
    );

  const changeSize = (id, sizeAndPrice) => {
    setCart((prevCart) =>
      prevCart.map((el) => {
        if (el.id === id) {
          el.sizeAndPrice = sizeAndPrice;
        }
        return el;
      })
    );
  };

  const changeSizeConstructor = (id, size) => {
    setCart((prevCart) =>
      prevCart.map((el) => {
        if (el.id === id) {
          el.sizeAndPrice.size = size;
        }
        return el;
      })
    );
  };

  const cartOperations = {
    addToCart,
    setCartItem,
    removeFromCart,
    changeQuantity,
    changeSize,
    getTotalPrice,
    getCartItem,
    clearCart,
    changeSizeConstructor,
    getProductPriceWithPromoCode,
    getTotalPricesWithPromoCode,
    getTotalPriceWithCertificate,
    getProductPrice
  };

  return {
    isInCart,
    cart,
    cartOperations
  };
};
