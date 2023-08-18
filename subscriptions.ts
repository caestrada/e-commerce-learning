/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBook = /* GraphQL */ `
  subscription OnCreateBook(
    $filter: ModelSubscriptionBookFilterInput
    $owner: String
  ) {
    onCreateBook(filter: $filter, owner: $owner) {
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
export const onUpdateBook = /* GraphQL */ `
  subscription OnUpdateBook(
    $filter: ModelSubscriptionBookFilterInput
    $owner: String
  ) {
    onUpdateBook(filter: $filter, owner: $owner) {
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
export const onDeleteBook = /* GraphQL */ `
  subscription OnDeleteBook(
    $filter: ModelSubscriptionBookFilterInput
    $owner: String
  ) {
    onDeleteBook(filter: $filter, owner: $owner) {
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
export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount(
    $filter: ModelSubscriptionAccountFilterInput
    $owner: String
  ) {
    onCreateAccount(filter: $filter, owner: $owner) {
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
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount(
    $filter: ModelSubscriptionAccountFilterInput
    $owner: String
  ) {
    onUpdateAccount(filter: $filter, owner: $owner) {
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
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount(
    $filter: ModelSubscriptionAccountFilterInput
    $owner: String
  ) {
    onDeleteAccount(filter: $filter, owner: $owner) {
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
export const onCreateBillboard = /* GraphQL */ `
  subscription OnCreateBillboard(
    $filter: ModelSubscriptionBillboardFilterInput
    $owner: String
  ) {
    onCreateBillboard(filter: $filter, owner: $owner) {
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
export const onUpdateBillboard = /* GraphQL */ `
  subscription OnUpdateBillboard(
    $filter: ModelSubscriptionBillboardFilterInput
    $owner: String
  ) {
    onUpdateBillboard(filter: $filter, owner: $owner) {
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
export const onDeleteBillboard = /* GraphQL */ `
  subscription OnDeleteBillboard(
    $filter: ModelSubscriptionBillboardFilterInput
    $owner: String
  ) {
    onDeleteBillboard(filter: $filter, owner: $owner) {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory(
    $filter: ModelSubscriptionCategoryFilterInput
    $owner: String
  ) {
    onCreateCategory(filter: $filter, owner: $owner) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory(
    $filter: ModelSubscriptionCategoryFilterInput
    $owner: String
  ) {
    onUpdateCategory(filter: $filter, owner: $owner) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory(
    $filter: ModelSubscriptionCategoryFilterInput
    $owner: String
  ) {
    onDeleteCategory(filter: $filter, owner: $owner) {
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
export const onCreateSize = /* GraphQL */ `
  subscription OnCreateSize(
    $filter: ModelSubscriptionSizeFilterInput
    $owner: String
  ) {
    onCreateSize(filter: $filter, owner: $owner) {
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
export const onUpdateSize = /* GraphQL */ `
  subscription OnUpdateSize(
    $filter: ModelSubscriptionSizeFilterInput
    $owner: String
  ) {
    onUpdateSize(filter: $filter, owner: $owner) {
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
export const onDeleteSize = /* GraphQL */ `
  subscription OnDeleteSize(
    $filter: ModelSubscriptionSizeFilterInput
    $owner: String
  ) {
    onDeleteSize(filter: $filter, owner: $owner) {
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
export const onCreateColor = /* GraphQL */ `
  subscription OnCreateColor(
    $filter: ModelSubscriptionColorFilterInput
    $owner: String
  ) {
    onCreateColor(filter: $filter, owner: $owner) {
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
export const onUpdateColor = /* GraphQL */ `
  subscription OnUpdateColor(
    $filter: ModelSubscriptionColorFilterInput
    $owner: String
  ) {
    onUpdateColor(filter: $filter, owner: $owner) {
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
export const onDeleteColor = /* GraphQL */ `
  subscription OnDeleteColor(
    $filter: ModelSubscriptionColorFilterInput
    $owner: String
  ) {
    onDeleteColor(filter: $filter, owner: $owner) {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct(
    $filter: ModelSubscriptionProductFilterInput
    $owner: String
  ) {
    onCreateProduct(filter: $filter, owner: $owner) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct(
    $filter: ModelSubscriptionProductFilterInput
    $owner: String
  ) {
    onUpdateProduct(filter: $filter, owner: $owner) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct(
    $filter: ModelSubscriptionProductFilterInput
    $owner: String
  ) {
    onDeleteProduct(filter: $filter, owner: $owner) {
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
export const onCreateImage = /* GraphQL */ `
  subscription OnCreateImage(
    $filter: ModelSubscriptionImageFilterInput
    $owner: String
  ) {
    onCreateImage(filter: $filter, owner: $owner) {
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
export const onUpdateImage = /* GraphQL */ `
  subscription OnUpdateImage(
    $filter: ModelSubscriptionImageFilterInput
    $owner: String
  ) {
    onUpdateImage(filter: $filter, owner: $owner) {
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
export const onDeleteImage = /* GraphQL */ `
  subscription OnDeleteImage(
    $filter: ModelSubscriptionImageFilterInput
    $owner: String
  ) {
    onDeleteImage(filter: $filter, owner: $owner) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $owner: String
  ) {
    onCreateOrder(filter: $filter, owner: $owner) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $owner: String
  ) {
    onUpdateOrder(filter: $filter, owner: $owner) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $owner: String
  ) {
    onDeleteOrder(filter: $filter, owner: $owner) {
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
export const onCreateOrderItem = /* GraphQL */ `
  subscription OnCreateOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
    $owner: String
  ) {
    onCreateOrderItem(filter: $filter, owner: $owner) {
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
export const onUpdateOrderItem = /* GraphQL */ `
  subscription OnUpdateOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
    $owner: String
  ) {
    onUpdateOrderItem(filter: $filter, owner: $owner) {
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
export const onDeleteOrderItem = /* GraphQL */ `
  subscription OnDeleteOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
    $owner: String
  ) {
    onDeleteOrderItem(filter: $filter, owner: $owner) {
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
