const profilePageLabel = {
  normal: {
    backgroundColor: 'rgba(196, 196, 196, 0.2)'
  },
  hover: {
    backgroundColor: 'rgba(196, 196, 196, 0.5)'
  }
};

export default {
  light: {
    textColor: '#000000',
    backgroundColor: '#FFFFFF',
    catalogPageFilterCell: {
      hover: {
        backgroundColor: '#e4e0e0'
      }
    },
    sideBar: {
      backgroundColor: '#FFFFFF'
    },
    button: {
      normal: {
        backgroundColor: '#020202',
        color: '#FFFFFF'
      },
      hover: {
        backgroundColor: '#000000',
        color: '#FFFFFF'
      },
      disabled: {
        backgroundColor: '#999999',
        color: '#C2C2C2'
      },
      border: {
        borderColor: '#020202'
      }
    },
    card: {
      backgroundColor: '#F5F5F5',
      border: '1px solid #D3D3D3',
      childrenBackgroundColor: '#FFFFFF',
      selectedButton: {
        backgroundColor: '#000000',
        color: '#FFFFFF'
      }
    },
    cart: {
      borderColor: 'rgba(91, 91, 91, 0.2)'
    },
    contactForm: {
      background: '#EFEFEF'
    },
    orderHistoryHeading: {
      background: '#DEDEDE'
    },
    profilePageLabel,
    carouselItem: {
      normal: {
        backgroundColor: '#FFFFFF'
      },
      hover: {
        border: '1px solid #5b5b5b'
      }
    }
  },
  dark: {
    textColor: '#FFFFFF',
    backgroundColor: '#242424',
    catalogPageFilterCell: {
      hover: {
        backgroundColor: '#7c7b7b'
      }
    },
    sideBar: {
      backgroundColor: '#000000'
    },
    button: {
      normal: {
        backgroundColor: '#020202',
        color: '#FFFFFF'
      },
      hover: {
        backgroundColor: '#FFFFFF',
        color: '#000000'
      },
      disabled: {
        backgroundColor: '#868585',
        color: '#C2C2C2'
      },
      border: {
        borderColor: '#FEFEFE'
      }
    },
    card: {
      backgroundColor: '#454545',
      border: '1px solid #282828',
      childrenBackgroundColor: '#353535',
      selectedButton: {
        backgroundColor: '#FFFFFF',
        color: '#000000'
      }
    },
    cart: {
      borderColor: '#5B5B5B'
    },
    contactForm: {
      background: '#232323'
    },
    orderHistoryHeading: {
      background: '#2F2F2F '
    },
    profilePageLabel,
    carouselItem: {
      normal: {
        backgroundColor: '#333131'
      },
      hover: {
        border: '1px solid #5B5B5B'
      }
    }
  }
};
