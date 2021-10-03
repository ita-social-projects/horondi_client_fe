export default function changedCartItemSizeHandler(item, value, cart) {
  const changedItems = cart.map((el) => {
    if (el.id === item.id) {
      el.options.size = value.size;
      el.price = value.price;

      for (let i = 0; i < el.price.length; i++) {
        el.price[i].value *= value.quantity;
      }
    }
    return el;
  });

  for (let i = 0; i < changedItems.length; i++) {
    for (let j = 0; j < changedItems.length; j++) {
      if (
        changedItems[i].product._id === changedItems[j].product._id &&
        changedItems[i].options.size._id === changedItems[j].options.size._id &&
        i !== j
      ) {
        changedItems[i].quantity += changedItems[j].quantity;

        for (let k = 0; k < changedItems[i].price.length; k++) {
          changedItems[i].price[k].value += changedItems[j].price[k].value;
        }

        changedItems.splice(j, 1);
      }
    }
  }

  return changedItems;
}
