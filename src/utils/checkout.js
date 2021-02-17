import { CHECKOUT_PAYMENT } from '../translations/checkout.translations';

const productItemsInput = (cartItems) =>
  cartItems.map((item) => ({
    product: item?._id,
    quantity: item.quantity,
    isFromConstructor: !item._id,
    options: {
      size: item.selectedSize._id,
      sidePocket: item.sidePocket
    }
  }));

export const orderInputData = (data, deliveryType, cartItems, language) => ({
  user: {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phoneNumber: data.phoneNumber
  },
  delivery: {
    sentBy: deliveryType,
    invoiceNumber: data.invoiceNumber || '',
    courierOffice: data.courierOffice || null,
    byCourier: data.byCourier || false
  },
  items: productItemsInput(cartItems),
  paymentMethod:
    data.paymentMethod === CHECKOUT_PAYMENT[language].card
      ? CHECKOUT_PAYMENT[1].card.toUpperCase()
      : CHECKOUT_PAYMENT[1].cash.toUpperCase(),
  userComment: data.userComment
});
