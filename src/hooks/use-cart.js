import { useCallback, useContext } from 'react';
import { CartContext } from '../context/cart-context';
import { CurrencyContext } from '../context/currency-context';
import { calcPriceForCart } from '../utils/priceCalculating';
import { useCurrency } from './use-currency';

export const useCart = () => {
  const { getPriceWithCurrency, getCertificatePriceInUSD } = useCurrency();

  const { cartItems, setCartItems, promoCode, setPromocode, certificate, setCertificate } =
    useContext(CartContext);

  const { currency } = useContext(CurrencyContext);

  const addToCart = (item) => {
    setCartItems((prevCart) => [item, ...prevCart]);
  };

  const clearCart = () => {
    setCartItems([]);
    setPromocode(null);
    setCertificate(null);
  };

  const addPromocode = (promoCode) => {
    setPromocode(promoCode);
  };

  const addCertificate = (certificate) => {
    setCertificate(certificate);
  };

  const getCartItem = (id) =>
    cartItems.find((cartItem) => cartItem.id === id || cartItem.productId === id);

  const getTotalPriceWithCertificate = (certificate) => {
    const { value } = certificate.getCertificateByParams;
    const withCertificateValue = currency === 'USD' ? getCertificatePriceInUSD(value) : value;
    return getPriceWithCurrency(getTotalPrice() - withCertificateValue, 1);
  };

  const getTotalPricesWithPromoCode = (promoCode) => {
    const { discount, categories } = promoCode.getPromoCodeByCode;
    const newArr = cartItems.map((item) => {
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
    setCartItems((prev) => prev.map((cartItem) => (cartItem.id === id ? item : cartItem)));
  };

  const removeFromCart = (item) => {
    const newCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    newCartItems.length ? setCartItems(newCartItems) : clearCart();
  };

  const isInCart = (productId, sizeId = null) =>
    cartItems.find(
      (cartItem) =>
        productId === cartItem.productId &&
        (sizeId ? sizeId === cartItem.sizeAndPrice.size._id : true)
    );

  const changeQuantity = useCallback(
    (id, count) => {
      setCartItems((prevCart) =>
        prevCart.map((el) => {
          if (el.id === id) el.quantity = count;
          return el;
        })
      );
    },
    [setCartItems]
  );

  const getTotalPrice = () =>
    cartItems.reduce(
      (acc, item) =>
        acc + calcPriceForCart(getPriceWithCurrency(item.sizeAndPrice.price), item.quantity),
      0
    );

  const getConstructorPrice = (constructorData) => {
    const prices = [
      constructorData.pattern,
      constructorData.bottom,
      constructorData.basic,
      constructorData.sizeAndPrice.size
    ];

    return prices.reduce((acc, cur) => {
      if (cur.absolutePrice) {
        acc += cur.absolutePrice;
      }

      if (cur.relativePrice) {
        acc += constructorData.basePrice * (cur.relativePrice / 100);
      }

      return Math.round(acc);
    }, constructorData.basePrice);
  };

  const changeSize = (id, sizeAndPrice) => {
    setCartItems((prevCart) =>
      prevCart.map((el) => {
        if (el.id === id) {
          el.sizeAndPrice = sizeAndPrice;
        }
        return el;
      })
    );
  };

  const changeSizeConstructor = (id, size, constructorData) => {
    setCartItems((prevCart) =>
      prevCart.map((el) => {
        if (el.id === id) {
          el.sizeAndPrice = {
            size,
            price: getConstructorPrice(constructorData)
          };
        }
        return el;
      })
    );
  };

  const cartOperations = {
    addToCart,
    setCartItem,
    addPromocode,
    addCertificate,
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
    getProductPrice,
    getConstructorPrice
  };

  return {
    isInCart,
    cartItems,
    promoCode,
    certificate,
    cartOperations
  };
};
