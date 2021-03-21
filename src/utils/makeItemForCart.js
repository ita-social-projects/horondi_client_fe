
export const getProductDataForCart = (selectedProduct,selectedSize) => ({
    product: {
        _id: selectedProduct._id,
        name: selectedProduct.name,
        bottomMaterial:{
            material: {
                name: selectedProduct.bottomMaterial.material.name
            }
        },
        images:{
            primary:{
                small: selectedProduct.image
            }
        }
    },
    quantity:selectedProduct.quantity,
    options: {
        size: selectedSize
    },
    price: selectedProduct.totalPrice
});