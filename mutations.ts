/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createOrderItem = /* GraphQL */ `
  mutation CreateOrderItem(
    $input: CreateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    createOrderItem(input: $input, condition: $condition) {
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
export const updateOrderItem = /* GraphQL */ `
  mutation UpdateOrderItem(
    $input: UpdateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    updateOrderItem(input: $input, condition: $condition) {
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
export const deleteOrderItem = /* GraphQL */ `
  mutation DeleteOrderItem(
    $input: DeleteOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    deleteOrderItem(input: $input, condition: $condition) {
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
export const createBook = /* GraphQL */ `
  mutation CreateBook(
    $input: CreateBookInput!
    $condition: ModelBookConditionInput
  ) {
    createBook(input: $input, condition: $condition) {
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
export const updateBook = /* GraphQL */ `
  mutation UpdateBook(
    $input: UpdateBookInput!
    $condition: ModelBookConditionInput
  ) {
    updateBook(input: $input, condition: $condition) {
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
export const deleteBook = /* GraphQL */ `
  mutation DeleteBook(
    $input: DeleteBookInput!
    $condition: ModelBookConditionInput
  ) {
    deleteBook(input: $input, condition: $condition) {
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
export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
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
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
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
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
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
export const createBillboard = /* GraphQL */ `
  mutation CreateBillboard(
    $input: CreateBillboardInput!
    $condition: ModelBillboardConditionInput
  ) {
    createBillboard(input: $input, condition: $condition) {
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
export const updateBillboard = /* GraphQL */ `
  mutation UpdateBillboard(
    $input: UpdateBillboardInput!
    $condition: ModelBillboardConditionInput
  ) {
    updateBillboard(input: $input, condition: $condition) {
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
export const deleteBillboard = /* GraphQL */ `
  mutation DeleteBillboard(
    $input: DeleteBillboardInput!
    $condition: ModelBillboardConditionInput
  ) {
    deleteBillboard(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createSize = /* GraphQL */ `
  mutation CreateSize(
    $input: CreateSizeInput!
    $condition: ModelSizeConditionInput
  ) {
    createSize(input: $input, condition: $condition) {
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
export const updateSize = /* GraphQL */ `
  mutation UpdateSize(
    $input: UpdateSizeInput!
    $condition: ModelSizeConditionInput
  ) {
    updateSize(input: $input, condition: $condition) {
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
export const deleteSize = /* GraphQL */ `
  mutation DeleteSize(
    $input: DeleteSizeInput!
    $condition: ModelSizeConditionInput
  ) {
    deleteSize(input: $input, condition: $condition) {
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
export const createColor = /* GraphQL */ `
  mutation CreateColor(
    $input: CreateColorInput!
    $condition: ModelColorConditionInput
  ) {
    createColor(input: $input, condition: $condition) {
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
export const updateColor = /* GraphQL */ `
  mutation UpdateColor(
    $input: UpdateColorInput!
    $condition: ModelColorConditionInput
  ) {
    updateColor(input: $input, condition: $condition) {
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
export const deleteColor = /* GraphQL */ `
  mutation DeleteColor(
    $input: DeleteColorInput!
    $condition: ModelColorConditionInput
  ) {
    deleteColor(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createImage = /* GraphQL */ `
  mutation CreateImage(
    $input: CreateImageInput!
    $condition: ModelImageConditionInput
  ) {
    createImage(input: $input, condition: $condition) {
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
export const updateImage = /* GraphQL */ `
  mutation UpdateImage(
    $input: UpdateImageInput!
    $condition: ModelImageConditionInput
  ) {
    updateImage(input: $input, condition: $condition) {
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
export const deleteImage = /* GraphQL */ `
  mutation DeleteImage(
    $input: DeleteImageInput!
    $condition: ModelImageConditionInput
  ) {
    deleteImage(input: $input, condition: $condition) {
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
