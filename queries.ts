/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
      id
      title
      description
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
      id
      name
      userId
      billboards {
        items {
          id
          label
          imageUrl
          createdAt
          updatedAt
          accountBillboardsId
          owner
          __typename
        }
        nextToken
        __typename
      }
      categories {
        items {
          id
          name
          createdAt
          updatedAt
          accountCategoriesId
          billboardCategoriesId
          owner
          __typename
        }
        nextToken
        __typename
      }
      sizes {
        items {
          id
          name
          value
          createdAt
          updatedAt
          accountSizesId
          owner
          __typename
        }
        nextToken
        __typename
      }
      colors {
        items {
          id
          name
          value
          createdAt
          updatedAt
          accountColorsId
          owner
          __typename
        }
        nextToken
        __typename
      }
      products {
        items {
          id
          name
          price
          isFeatured
          isArchived
          createdAt
          updatedAt
          accountProductsId
          categoryProductsId
          sizeProductsId
          colorProductsId
          owner
          __typename
        }
        nextToken
        __typename
      }
      orders {
        items {
          id
          isPaid
          phone
          address
          createdAt
          updatedAt
          accountOrdersId
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        userId
        billboards {
          nextToken
          __typename
        }
        categories {
          nextToken
          __typename
        }
        sizes {
          nextToken
          __typename
        }
        colors {
          nextToken
          __typename
        }
        products {
          nextToken
          __typename
        }
        orders {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBillboard = /* GraphQL */ `
  query GetBillboard($id: ID!) {
    getBillboard(id: $id) {
      id
      label
      imageUrl
      account {
        id
        name
        userId
        billboards {
          nextToken
          __typename
        }
        categories {
          nextToken
          __typename
        }
        sizes {
          nextToken
          __typename
        }
        colors {
          nextToken
          __typename
        }
        products {
          nextToken
          __typename
        }
        orders {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      categories {
        items {
          id
          name
          createdAt
          updatedAt
          accountCategoriesId
          billboardCategoriesId
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      accountBillboardsId
      owner
      __typename
    }
  }
`;
export const listBillboards = /* GraphQL */ `
  query ListBillboards(
    $filter: ModelBillboardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBillboards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        imageUrl
        account {
          id
          name
          userId
          createdAt
          updatedAt
          owner
          __typename
        }
        categories {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        accountBillboardsId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      account {
        id
        name
        userId
        billboards {
          nextToken
          __typename
        }
        categories {
          nextToken
          __typename
        }
        sizes {
          nextToken
          __typename
        }
        colors {
          nextToken
          __typename
        }
        products {
          nextToken
          __typename
        }
        orders {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      billboard {
        id
        label
        imageUrl
        account {
          id
          name
          userId
          createdAt
          updatedAt
          owner
          __typename
        }
        categories {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        accountBillboardsId
        owner
        __typename
      }
      products {
        items {
          id
          name
          price
          isFeatured
          isArchived
          createdAt
          updatedAt
          accountProductsId
          categoryProductsId
          sizeProductsId
          colorProductsId
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      accountCategoriesId
      billboardCategoriesId
      owner
      __typename
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        account {
          id
          name
          userId
          createdAt
          updatedAt
          owner
          __typename
        }
        billboard {
          id
          label
          imageUrl
          createdAt
          updatedAt
          accountBillboardsId
          owner
          __typename
        }
        products {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        accountCategoriesId
        billboardCategoriesId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSize = /* GraphQL */ `
  query GetSize($id: ID!) {
    getSize(id: $id) {
      id
      name
      value
      account {
        id
        name
        userId
        billboards {
          nextToken
          __typename
        }
        categories {
          nextToken
          __typename
        }
        sizes {
          nextToken
          __typename
        }
        colors {
          nextToken
          __typename
        }
        products {
          nextToken
          __typename
        }
        orders {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      products {
        items {
          id
          name
          price
          isFeatured
          isArchived
          createdAt
          updatedAt
          accountProductsId
          categoryProductsId
          sizeProductsId
          colorProductsId
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      accountSizesId
      owner
      __typename
    }
  }
`;
export const listSizes = /* GraphQL */ `
  query ListSizes(
    $filter: ModelSizeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSizes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        value
        account {
          id
          name
          userId
          createdAt
          updatedAt
          owner
          __typename
        }
        products {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        accountSizesId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getColor = /* GraphQL */ `
  query GetColor($id: ID!) {
    getColor(id: $id) {
      id
      name
      value
      account {
        id
        name
        userId
        billboards {
          nextToken
          __typename
        }
        categories {
          nextToken
          __typename
        }
        sizes {
          nextToken
          __typename
        }
        colors {
          nextToken
          __typename
        }
        products {
          nextToken
          __typename
        }
        orders {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      products {
        items {
          id
          name
          price
          isFeatured
          isArchived
          createdAt
          updatedAt
          accountProductsId
          categoryProductsId
          sizeProductsId
          colorProductsId
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      accountColorsId
      owner
      __typename
    }
  }
`;
export const listColors = /* GraphQL */ `
  query ListColors(
    $filter: ModelColorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listColors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        value
        account {
          id
          name
          userId
          createdAt
          updatedAt
          owner
          __typename
        }
        products {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        accountColorsId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      price
      isFeatured
      isArchived
      account {
        id
        name
        userId
        billboards {
          nextToken
          __typename
        }
        categories {
          nextToken
          __typename
        }
        sizes {
          nextToken
          __typename
        }
        colors {
          nextToken
          __typename
        }
        products {
          nextToken
          __typename
        }
        orders {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      category {
        id
        name
        account {
          id
          name
          userId
          createdAt
          updatedAt
          owner
          __typename
        }
        billboard {
          id
          label
          imageUrl
          createdAt
          updatedAt
          accountBillboardsId
          owner
          __typename
        }
        products {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        accountCategoriesId
        billboardCategoriesId
        owner
        __typename
      }
      size {
        id
        name
        value
        account {
          id
          name
          userId
          createdAt
          updatedAt
          owner
          __typename
        }
        products {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        accountSizesId
        owner
        __typename
      }
      color {
        id
        name
        value
        account {
          id
          name
          userId
          createdAt
          updatedAt
          owner
          __typename
        }
        products {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        accountColorsId
        owner
        __typename
      }
      images {
        items {
          id
          url
          createdAt
          updatedAt
          productImagesId
          owner
          __typename
        }
        nextToken
        __typename
      }
      orderItems {
        items {
          id
          createdAt
          updatedAt
          productOrderItemsId
          orderOrderItemsId
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      accountProductsId
      categoryProductsId
      sizeProductsId
      colorProductsId
      owner
      __typename
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        price
        isFeatured
        isArchived
        account {
          id
          name
          userId
          createdAt
          updatedAt
          owner
          __typename
        }
        category {
          id
          name
          createdAt
          updatedAt
          accountCategoriesId
          billboardCategoriesId
          owner
          __typename
        }
        size {
          id
          name
          value
          createdAt
          updatedAt
          accountSizesId
          owner
          __typename
        }
        color {
          id
          name
          value
          createdAt
          updatedAt
          accountColorsId
          owner
          __typename
        }
        images {
          nextToken
          __typename
        }
        orderItems {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        accountProductsId
        categoryProductsId
        sizeProductsId
        colorProductsId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getImage = /* GraphQL */ `
  query GetImage($id: ID!) {
    getImage(id: $id) {
      id
      product {
        id
        name
        price
        isFeatured
        isArchived
        account {
          id
          name
          userId
          createdAt
          updatedAt
          owner
          __typename
        }
        category {
          id
          name
          createdAt
          updatedAt
          accountCategoriesId
          billboardCategoriesId
          owner
          __typename
        }
        size {
          id
          name
          value
          createdAt
          updatedAt
          accountSizesId
          owner
          __typename
        }
        color {
          id
          name
          value
          createdAt
          updatedAt
          accountColorsId
          owner
          __typename
        }
        images {
          nextToken
          __typename
        }
        orderItems {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        accountProductsId
        categoryProductsId
        sizeProductsId
        colorProductsId
        owner
        __typename
      }
      url
      createdAt
      updatedAt
      productImagesId
      owner
      __typename
    }
  }
`;
export const listImages = /* GraphQL */ `
  query ListImages(
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        product {
          id
          name
          price
          isFeatured
          isArchived
          createdAt
          updatedAt
          accountProductsId
          categoryProductsId
          sizeProductsId
          colorProductsId
          owner
          __typename
        }
        url
        createdAt
        updatedAt
        productImagesId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      account {
        id
        name
        userId
        billboards {
          nextToken
          __typename
        }
        categories {
          nextToken
          __typename
        }
        sizes {
          nextToken
          __typename
        }
        colors {
          nextToken
          __typename
        }
        products {
          nextToken
          __typename
        }
        orders {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      orderItems {
        items {
          id
          createdAt
          updatedAt
          productOrderItemsId
          orderOrderItemsId
          owner
          __typename
        }
        nextToken
        __typename
      }
      isPaid
      phone
      address
      createdAt
      updatedAt
      accountOrdersId
      owner
      __typename
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        account {
          id
          name
          userId
          createdAt
          updatedAt
          owner
          __typename
        }
        orderItems {
          nextToken
          __typename
        }
        isPaid
        phone
        address
        createdAt
        updatedAt
        accountOrdersId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrderItem = /* GraphQL */ `
  query GetOrderItem($id: ID!) {
    getOrderItem(id: $id) {
      id
      order {
        id
        account {
          id
          name
          userId
          createdAt
          updatedAt
          owner
          __typename
        }
        orderItems {
          nextToken
          __typename
        }
        isPaid
        phone
        address
        createdAt
        updatedAt
        accountOrdersId
        owner
        __typename
      }
      product {
        id
        name
        price
        isFeatured
        isArchived
        account {
          id
          name
          userId
          createdAt
          updatedAt
          owner
          __typename
        }
        category {
          id
          name
          createdAt
          updatedAt
          accountCategoriesId
          billboardCategoriesId
          owner
          __typename
        }
        size {
          id
          name
          value
          createdAt
          updatedAt
          accountSizesId
          owner
          __typename
        }
        color {
          id
          name
          value
          createdAt
          updatedAt
          accountColorsId
          owner
          __typename
        }
        images {
          nextToken
          __typename
        }
        orderItems {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        accountProductsId
        categoryProductsId
        sizeProductsId
        colorProductsId
        owner
        __typename
      }
      createdAt
      updatedAt
      productOrderItemsId
      orderOrderItemsId
      owner
      __typename
    }
  }
`;
export const listOrderItems = /* GraphQL */ `
  query ListOrderItems(
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        order {
          id
          isPaid
          phone
          address
          createdAt
          updatedAt
          accountOrdersId
          owner
          __typename
        }
        product {
          id
          name
          price
          isFeatured
          isArchived
          createdAt
          updatedAt
          accountProductsId
          categoryProductsId
          sizeProductsId
          colorProductsId
          owner
          __typename
        }
        createdAt
        updatedAt
        productOrderItemsId
        orderOrderItemsId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
