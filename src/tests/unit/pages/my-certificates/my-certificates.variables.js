import { getAllCertificates } from '../../../../pages/my-certificates/operations/my-certificates.queries';

export const certificateMock1 = {
  request: {
    query: getAllCertificates,
    variables: {
      limit: 5,
      skip: (1 - 1) * 5
    }
  },
  result: {
    data: {
      getAllCertificates: {
        __typename: 'PaginatedCertificate',
        items: [
          {
            _id: '61e0447659cb701db416a3a4',
            name: 'XYQ332765',
            value: 1000,
            isUsed: false,
            isActivated: true,
            isExpired: false,
            dateStart: '2022-02-07T10:12:15.024Z',
            dateEnd: '2023-02-08T10:12:15.024Z'
          },
          {
            _id: '61e04efaedc3271854cf4f38',
            name: 'XYQ332765',
            value: 1500,
            isUsed: false,
            isActivated: true,
            isExpired: false,
            dateStart: '2022-01-13T16:10:29.323Z',
            dateEnd: '2023-01-14T16:10:29.323Z'
          }
        ],
        count: 2
      }
    }
  }
};

export const certificateMock2 = {
  request: {
    query: getAllCertificates,
    variables: {
      limit: 5,
      skip: (1 - 1) * 5
    }
  },
  result: {
    data: {
      getAllCertificates: {
        __typename: 'PaginatedCertificate',
        items: [
          {
            _id: '61e0447659cb701db416a3a4',
            name: 'XYQ332765',
            value: 1000,
            isUsed: false,
            isActivated: true,
            isExpired: false,
            dateStart: '2022-02-07T10:12:15.024Z',
            dateEnd: '2023-02-08T10:12:15.024Z'
          },
          {
            _id: '61e04efaedc3271854cf4f38',
            name: 'XYQ332765',
            value: 1500,
            isUsed: false,
            isActivated: true,
            isExpired: false,
            dateStart: '2022-01-13T16:10:29.323Z',
            dateEnd: '2023-01-14T16:10:29.323Z'
          }
        ],
        count: 2
      }
    }
  }
};

export const certificateMock3 = {
  request: {
    query: getAllCertificates,
    variables: {
      limit: 5,
      skip: (1 - 1) * 5
    }
  },
  result: {
    data: {
      getAllCertificates: {
        __typename: 'PaginatedCertificate',
        items: [
          {
            _id: '61e1591b7908b669fca1b651',
            name: '04FreeHorondi',
            value: 500,
            isUsed: false,
            isActivated: true,
            isExpired: false,
            dateStart: '2022-01-13T16:10:29.323Z',
            dateEnd: '2023-01-14T16:10:29.323Z'
          },
          {
            _id: '61e159557908b669fca1b652',
            name: '05FreeHorondi',
            value: 1000,
            isUsed: false,
            isActivated: true,
            isExpired: false,
            dateStart: '2022-01-13T16:10:29.323Z',
            dateEnd: '2023-01-14T16:10:29.323Z'
          },
          {
            _id: '61e04efaedc3271854cf4f38',
            name: '02FreeHorondi',
            value: 1500,
            isUsed: false,
            isActivated: true,
            isExpired: false,
            dateStart: '2022-01-13T16:10:29.323Z',
            dateEnd: '2023-01-14T16:10:29.323Z'
          },
          {
            _id: '61e0447659cb701db416a3a4',
            name: '01FreeHorondi',
            value: 1000,
            isUsed: false,
            isActivated: true,
            isExpired: false,
            dateStart: '2022-02-07T10:28:20.339Z',
            dateEnd: '2023-02-08T10:28:20.339Z'
          },
          {
            _id: '61e04efaedc3271854cf4f32',
            name: '03FreeHorondi',
            value: 1500,
            isUsed: false,
            isActivated: true,
            isExpired: false,
            dateStart: '2022-01-13T16:10:29.323Z',
            dateEnd: '2023-01-14T16:10:29.323Z'
          }
        ],
        count: 7
      }
    }
  }
};
