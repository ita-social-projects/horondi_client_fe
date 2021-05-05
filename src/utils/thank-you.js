import PropTypes from 'prop-types';

export const ORDER_PAYMENT_STATUS = {
  CREATED: 'CREATED',
  PAID: 'PAID',
  PROCESSING: 'PROCESSING'
};
export const defaultProps = {
  order: null,
  language: 0,
  currency: 0,
  isLightTheme: false
};
export const thanksPropTypes = {
  order: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        product: PropTypes.shape({
          name: PropTypes.arrayOf({
            lang: PropTypes.string,
            value: PropTypes.string
          }),
          images: PropTypes.shape({
            thumbnail: PropTypes.string
          })
        }),
        fixedPrice: PropTypes.arrayOf(
          PropTypes.shape({
            currency: PropTypes.string,
            value: PropTypes.number
          })
        ),
        quantity: PropTypes.number,
        options: PropTypes.shape({
          size: PropTypes.shape({
            name: PropTypes.string
          })
        })
      })
    )
  }),
  totalPriceToPay: PropTypes.arrayOf(
    PropTypes.shape({
      currency: PropTypes.string,
      value: PropTypes.number
    })
  ),
  paymentStatus: PropTypes.string,
  language: PropTypes.number,
  currency: PropTypes.number,
  isLightTheme: PropTypes.bool
};
