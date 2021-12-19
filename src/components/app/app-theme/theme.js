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
    productDescription: {
      borderColor: 'rgba(230, 230, 230, 0.65)'
    },
    orderHistoryHeading: {
      background: '#DEDEDE'
    },
    profilePageLabel,
    carouselItem: {
      normal: {
        backgroundColor: '#FFFFFF'
      },
      shadow: {
        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.12)'
      },
      hover: {
        border: '1px solid #5b5b5b'
      }
    },
    seachBar: {
      backgroundColor: 'rgb(255, 255, 255, 0.2)',
      color: 'rgba(254, 254, 254, 0.75);',
      border: '1px solid #949494'
    },
    comments: {
      border: '1px solid #E6E6E6',
      cancelButtonBorder: {
        border: '1px solid #020202'
      },
      deleteIcon: {
        color: '#808080'
      },
      modal: {
        closeModalIcon: {
          color: '#808080'
        },
        titleBorder: {
          border: '2px solid #E2E8F0'
        },
        buttonBorder: {
          border: '1px solid black'
        }
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
    productDescription: {
      borderColor: '#5B5B5B'
    },
    orderHistoryHeading: {
      background: '#2F2F2F '
    },
    profilePageLabel,
    carouselItem: {
      normal: {
        backgroundColor: '#333131'
      },
      shadow: {
        boxShadow: '4px 6px 25px rgba(26, 26, 26, 0.8)'
      },
      hover: {
        border: '1px solid #5B5B5B'
      }
    },
    seachBar: {
      backgroundColor: 'rgb(255, 255, 255, 0.2)',
      color: 'rgba(254, 254, 254, 0.75);',
      border: '1px solid #949494'
    },
    comments: {
      border: '1px solid #E6E6E6',
      cancelButtonBorder: {
        border: '1px solid #C7C7C7'
      },
      deleteIcon: {
        color: '#808080'
      },
      modal: {
        closeModalIcon: {
          color: '#808080'
        },
        titleBorder: {
          border: '2px solid #E2E8F0'
        },
        buttonBorder: {
          border: '1px solid black'
        }
      }
    }
  }
};
