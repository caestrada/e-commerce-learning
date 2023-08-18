/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBookInput = {
  id?: string | null,
  title: string,
  description?: string | null,
};

export type ModelBookConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelBookConditionInput | null > | null,
  or?: Array< ModelBookConditionInput | null > | null,
  not?: ModelBookConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Book = {
  __typename: "Book",
  id: string,
  title: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateBookInput = {
  id: string,
  title?: string | null,
  description?: string | null,
};

export type DeleteBookInput = {
  id: string,
};

export type CreateAccountInput = {
  id?: string | null,
  name: string,
  userId?: string | null,
};

export type ModelAccountConditionInput = {
  name?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  and?: Array< ModelAccountConditionInput | null > | null,
  or?: Array< ModelAccountConditionInput | null > | null,
  not?: ModelAccountConditionInput | null,
};

export type Account = {
  __typename: "Account",
  id: string,
  name: string,
  userId?: string | null,
  billboards?: ModelBillboardConnection | null,
  categories?: ModelCategoryConnection | null,
  sizes?: ModelSizeConnection | null,
  colors?: ModelColorConnection | null,
  products?: ModelProductConnection | null,
  orders?: ModelOrderConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelBillboardConnection = {
  __typename: "ModelBillboardConnection",
  items:  Array<Billboard | null >,
  nextToken?: string | null,
};

export type Billboard = {
  __typename: "Billboard",
  id: string,
  label?: string | null,
  imageUrl?: string | null,
  account?: Account | null,
  categories?: ModelCategoryConnection | null,
  createdAt: string,
  updatedAt: string,
  accountBillboardsId?: string | null,
  owner?: string | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  name: string,
  account?: Account | null,
  billboard?: Billboard | null,
  products?: ModelProductConnection | null,
  createdAt: string,
  updatedAt: string,
  accountCategoriesId?: string | null,
  billboardCategoriesId?: string | null,
  owner?: string | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  name: string,
  price?: number | null,
  isFeatured?: boolean | null,
  isArchived?: boolean | null,
  account?: Account | null,
  category?: Category | null,
  size?: Size | null,
  color?: Color | null,
  images?: ModelImageConnection | null,
  orderItems?: ModelOrderItemConnection | null,
  createdAt: string,
  updatedAt: string,
  accountProductsId?: string | null,
  categoryProductsId?: string | null,
  sizeProductsId?: string | null,
  colorProductsId?: string | null,
  owner?: string | null,
};

export type Size = {
  __typename: "Size",
  id: string,
  name?: string | null,
  value?: string | null,
  account?: Account | null,
  products?: ModelProductConnection | null,
  createdAt: string,
  updatedAt: string,
  accountSizesId?: string | null,
  owner?: string | null,
};

export type Color = {
  __typename: "Color",
  id: string,
  name?: string | null,
  value?: string | null,
  account?: Account | null,
  products?: ModelProductConnection | null,
  createdAt: string,
  updatedAt: string,
  accountColorsId?: string | null,
  owner?: string | null,
};

export type ModelImageConnection = {
  __typename: "ModelImageConnection",
  items:  Array<Image | null >,
  nextToken?: string | null,
};

export type Image = {
  __typename: "Image",
  id: string,
  product?: Product | null,
  url: string,
  createdAt: string,
  updatedAt: string,
  productImagesId?: string | null,
  owner?: string | null,
};

export type ModelOrderItemConnection = {
  __typename: "ModelOrderItemConnection",
  items:  Array<OrderItem | null >,
  nextToken?: string | null,
};

export type OrderItem = {
  __typename: "OrderItem",
  id: string,
  order?: Order | null,
  product?: Product | null,
  createdAt: string,
  updatedAt: string,
  productOrderItemsId?: string | null,
  orderOrderItemsId?: string | null,
  owner?: string | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  account?: Account | null,
  orderItems?: ModelOrderItemConnection | null,
  isPaid?: boolean | null,
  phone?: string | null,
  address?: string | null,
  createdAt: string,
  updatedAt: string,
  accountOrdersId?: string | null,
  owner?: string | null,
};

export type ModelSizeConnection = {
  __typename: "ModelSizeConnection",
  items:  Array<Size | null >,
  nextToken?: string | null,
};

export type ModelColorConnection = {
  __typename: "ModelColorConnection",
  items:  Array<Color | null >,
  nextToken?: string | null,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
};

export type UpdateAccountInput = {
  id: string,
  name?: string | null,
  userId?: string | null,
};

export type DeleteAccountInput = {
  id: string,
};

export type CreateBillboardInput = {
  id?: string | null,
  label?: string | null,
  imageUrl?: string | null,
  accountBillboardsId?: string | null,
};

export type ModelBillboardConditionInput = {
  label?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  and?: Array< ModelBillboardConditionInput | null > | null,
  or?: Array< ModelBillboardConditionInput | null > | null,
  not?: ModelBillboardConditionInput | null,
  accountBillboardsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateBillboardInput = {
  id: string,
  label?: string | null,
  imageUrl?: string | null,
  accountBillboardsId?: string | null,
};

export type DeleteBillboardInput = {
  id: string,
};

export type CreateCategoryInput = {
  id?: string | null,
  name: string,
  accountCategoriesId?: string | null,
  billboardCategoriesId?: string | null,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
  accountCategoriesId?: ModelIDInput | null,
  billboardCategoriesId?: ModelIDInput | null,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
  accountCategoriesId?: string | null,
  billboardCategoriesId?: string | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type CreateSizeInput = {
  id?: string | null,
  name?: string | null,
  value?: string | null,
  accountSizesId?: string | null,
};

export type ModelSizeConditionInput = {
  name?: ModelStringInput | null,
  value?: ModelStringInput | null,
  and?: Array< ModelSizeConditionInput | null > | null,
  or?: Array< ModelSizeConditionInput | null > | null,
  not?: ModelSizeConditionInput | null,
  accountSizesId?: ModelIDInput | null,
};

export type UpdateSizeInput = {
  id: string,
  name?: string | null,
  value?: string | null,
  accountSizesId?: string | null,
};

export type DeleteSizeInput = {
  id: string,
};

export type CreateColorInput = {
  id?: string | null,
  name?: string | null,
  value?: string | null,
  accountColorsId?: string | null,
};

export type ModelColorConditionInput = {
  name?: ModelStringInput | null,
  value?: ModelStringInput | null,
  and?: Array< ModelColorConditionInput | null > | null,
  or?: Array< ModelColorConditionInput | null > | null,
  not?: ModelColorConditionInput | null,
  accountColorsId?: ModelIDInput | null,
};

export type UpdateColorInput = {
  id: string,
  name?: string | null,
  value?: string | null,
  accountColorsId?: string | null,
};

export type DeleteColorInput = {
  id: string,
};

export type CreateProductInput = {
  id?: string | null,
  name: string,
  price?: number | null,
  isFeatured?: boolean | null,
  isArchived?: boolean | null,
  accountProductsId?: string | null,
  categoryProductsId?: string | null,
  sizeProductsId?: string | null,
  colorProductsId?: string | null,
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  isFeatured?: ModelBooleanInput | null,
  isArchived?: ModelBooleanInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
  accountProductsId?: ModelIDInput | null,
  categoryProductsId?: ModelIDInput | null,
  sizeProductsId?: ModelIDInput | null,
  colorProductsId?: ModelIDInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateProductInput = {
  id: string,
  name?: string | null,
  price?: number | null,
  isFeatured?: boolean | null,
  isArchived?: boolean | null,
  accountProductsId?: string | null,
  categoryProductsId?: string | null,
  sizeProductsId?: string | null,
  colorProductsId?: string | null,
};

export type DeleteProductInput = {
  id: string,
};

export type CreateImageInput = {
  id?: string | null,
  url: string,
  productImagesId?: string | null,
};

export type ModelImageConditionInput = {
  url?: ModelStringInput | null,
  and?: Array< ModelImageConditionInput | null > | null,
  or?: Array< ModelImageConditionInput | null > | null,
  not?: ModelImageConditionInput | null,
  productImagesId?: ModelIDInput | null,
};

export type UpdateImageInput = {
  id: string,
  url?: string | null,
  productImagesId?: string | null,
};

export type DeleteImageInput = {
  id: string,
};

export type CreateOrderInput = {
  id?: string | null,
  isPaid?: boolean | null,
  phone?: string | null,
  address?: string | null,
  accountOrdersId?: string | null,
};

export type ModelOrderConditionInput = {
  isPaid?: ModelBooleanInput | null,
  phone?: ModelStringInput | null,
  address?: ModelStringInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
  accountOrdersId?: ModelIDInput | null,
};

export type UpdateOrderInput = {
  id: string,
  isPaid?: boolean | null,
  phone?: string | null,
  address?: string | null,
  accountOrdersId?: string | null,
};

export type DeleteOrderInput = {
  id: string,
};

export type CreateOrderItemInput = {
  id?: string | null,
  productOrderItemsId?: string | null,
  orderOrderItemsId?: string | null,
};

export type ModelOrderItemConditionInput = {
  and?: Array< ModelOrderItemConditionInput | null > | null,
  or?: Array< ModelOrderItemConditionInput | null > | null,
  not?: ModelOrderItemConditionInput | null,
  productOrderItemsId?: ModelIDInput | null,
  orderOrderItemsId?: ModelIDInput | null,
};

export type UpdateOrderItemInput = {
  id: string,
  productOrderItemsId?: string | null,
  orderOrderItemsId?: string | null,
};

export type DeleteOrderItemInput = {
  id: string,
};

export type ModelBookFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelBookFilterInput | null > | null,
  or?: Array< ModelBookFilterInput | null > | null,
  not?: ModelBookFilterInput | null,
};

export type ModelBookConnection = {
  __typename: "ModelBookConnection",
  items:  Array<Book | null >,
  nextToken?: string | null,
};

export type ModelAccountFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  and?: Array< ModelAccountFilterInput | null > | null,
  or?: Array< ModelAccountFilterInput | null > | null,
  not?: ModelAccountFilterInput | null,
};

export type ModelAccountConnection = {
  __typename: "ModelAccountConnection",
  items:  Array<Account | null >,
  nextToken?: string | null,
};

export type ModelBillboardFilterInput = {
  id?: ModelIDInput | null,
  label?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  and?: Array< ModelBillboardFilterInput | null > | null,
  or?: Array< ModelBillboardFilterInput | null > | null,
  not?: ModelBillboardFilterInput | null,
  accountBillboardsId?: ModelIDInput | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
  accountCategoriesId?: ModelIDInput | null,
  billboardCategoriesId?: ModelIDInput | null,
};

export type ModelSizeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  value?: ModelStringInput | null,
  and?: Array< ModelSizeFilterInput | null > | null,
  or?: Array< ModelSizeFilterInput | null > | null,
  not?: ModelSizeFilterInput | null,
  accountSizesId?: ModelIDInput | null,
};

export type ModelColorFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  value?: ModelStringInput | null,
  and?: Array< ModelColorFilterInput | null > | null,
  or?: Array< ModelColorFilterInput | null > | null,
  not?: ModelColorFilterInput | null,
  accountColorsId?: ModelIDInput | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  isFeatured?: ModelBooleanInput | null,
  isArchived?: ModelBooleanInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
  accountProductsId?: ModelIDInput | null,
  categoryProductsId?: ModelIDInput | null,
  sizeProductsId?: ModelIDInput | null,
  colorProductsId?: ModelIDInput | null,
};

export type ModelImageFilterInput = {
  id?: ModelIDInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelImageFilterInput | null > | null,
  or?: Array< ModelImageFilterInput | null > | null,
  not?: ModelImageFilterInput | null,
  productImagesId?: ModelIDInput | null,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  isPaid?: ModelBooleanInput | null,
  phone?: ModelStringInput | null,
  address?: ModelStringInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
  accountOrdersId?: ModelIDInput | null,
};

export type ModelOrderItemFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelOrderItemFilterInput | null > | null,
  or?: Array< ModelOrderItemFilterInput | null > | null,
  not?: ModelOrderItemFilterInput | null,
  productOrderItemsId?: ModelIDInput | null,
  orderOrderItemsId?: ModelIDInput | null,
};

export type ModelSubscriptionBookFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBookFilterInput | null > | null,
  or?: Array< ModelSubscriptionBookFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionAccountFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAccountFilterInput | null > | null,
  or?: Array< ModelSubscriptionAccountFilterInput | null > | null,
};

export type ModelSubscriptionBillboardFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  label?: ModelSubscriptionStringInput | null,
  imageUrl?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBillboardFilterInput | null > | null,
  or?: Array< ModelSubscriptionBillboardFilterInput | null > | null,
};

export type ModelSubscriptionCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
};

export type ModelSubscriptionSizeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSizeFilterInput | null > | null,
  or?: Array< ModelSubscriptionSizeFilterInput | null > | null,
};

export type ModelSubscriptionColorFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionColorFilterInput | null > | null,
  or?: Array< ModelSubscriptionColorFilterInput | null > | null,
};

export type ModelSubscriptionProductFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  isFeatured?: ModelSubscriptionBooleanInput | null,
  isArchived?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionProductFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionImageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  url?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionImageFilterInput | null > | null,
  or?: Array< ModelSubscriptionImageFilterInput | null > | null,
};

export type ModelSubscriptionOrderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  isPaid?: ModelSubscriptionBooleanInput | null,
  phone?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrderFilterInput | null > | null,
};

export type ModelSubscriptionOrderItemFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionOrderItemFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrderItemFilterInput | null > | null,
};

export type CreateBookMutationVariables = {
  input: CreateBookInput,
  condition?: ModelBookConditionInput | null,
};

export type CreateBookMutation = {
  createBook?:  {
    __typename: "Book",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateBookMutationVariables = {
  input: UpdateBookInput,
  condition?: ModelBookConditionInput | null,
};

export type UpdateBookMutation = {
  updateBook?:  {
    __typename: "Book",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteBookMutationVariables = {
  input: DeleteBookInput,
  condition?: ModelBookConditionInput | null,
};

export type DeleteBookMutation = {
  deleteBook?:  {
    __typename: "Book",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateAccountMutationVariables = {
  input: CreateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type CreateAccountMutation = {
  createAccount?:  {
    __typename: "Account",
    id: string,
    name: string,
    userId?: string | null,
    billboards?:  {
      __typename: "ModelBillboardConnection",
      items:  Array< {
        __typename: "Billboard",
        id: string,
        label?: string | null,
        imageUrl?: string | null,
        createdAt: string,
        updatedAt: string,
        accountBillboardsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        accountCategoriesId?: string | null,
        billboardCategoriesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    sizes?:  {
      __typename: "ModelSizeConnection",
      items:  Array< {
        __typename: "Size",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountSizesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    colors?:  {
      __typename: "ModelColorConnection",
      items:  Array< {
        __typename: "Color",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountColorsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        price?: number | null,
        isFeatured?: boolean | null,
        isArchived?: boolean | null,
        createdAt: string,
        updatedAt: string,
        accountProductsId?: string | null,
        categoryProductsId?: string | null,
        sizeProductsId?: string | null,
        colorProductsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        isPaid?: boolean | null,
        phone?: string | null,
        address?: string | null,
        createdAt: string,
        updatedAt: string,
        accountOrdersId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateAccountMutationVariables = {
  input: UpdateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type UpdateAccountMutation = {
  updateAccount?:  {
    __typename: "Account",
    id: string,
    name: string,
    userId?: string | null,
    billboards?:  {
      __typename: "ModelBillboardConnection",
      items:  Array< {
        __typename: "Billboard",
        id: string,
        label?: string | null,
        imageUrl?: string | null,
        createdAt: string,
        updatedAt: string,
        accountBillboardsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        accountCategoriesId?: string | null,
        billboardCategoriesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    sizes?:  {
      __typename: "ModelSizeConnection",
      items:  Array< {
        __typename: "Size",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountSizesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    colors?:  {
      __typename: "ModelColorConnection",
      items:  Array< {
        __typename: "Color",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountColorsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        price?: number | null,
        isFeatured?: boolean | null,
        isArchived?: boolean | null,
        createdAt: string,
        updatedAt: string,
        accountProductsId?: string | null,
        categoryProductsId?: string | null,
        sizeProductsId?: string | null,
        colorProductsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        isPaid?: boolean | null,
        phone?: string | null,
        address?: string | null,
        createdAt: string,
        updatedAt: string,
        accountOrdersId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteAccountMutationVariables = {
  input: DeleteAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type DeleteAccountMutation = {
  deleteAccount?:  {
    __typename: "Account",
    id: string,
    name: string,
    userId?: string | null,
    billboards?:  {
      __typename: "ModelBillboardConnection",
      items:  Array< {
        __typename: "Billboard",
        id: string,
        label?: string | null,
        imageUrl?: string | null,
        createdAt: string,
        updatedAt: string,
        accountBillboardsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        accountCategoriesId?: string | null,
        billboardCategoriesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    sizes?:  {
      __typename: "ModelSizeConnection",
      items:  Array< {
        __typename: "Size",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountSizesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    colors?:  {
      __typename: "ModelColorConnection",
      items:  Array< {
        __typename: "Color",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountColorsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        price?: number | null,
        isFeatured?: boolean | null,
        isArchived?: boolean | null,
        createdAt: string,
        updatedAt: string,
        accountProductsId?: string | null,
        categoryProductsId?: string | null,
        sizeProductsId?: string | null,
        colorProductsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        isPaid?: boolean | null,
        phone?: string | null,
        address?: string | null,
        createdAt: string,
        updatedAt: string,
        accountOrdersId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateBillboardMutationVariables = {
  input: CreateBillboardInput,
  condition?: ModelBillboardConditionInput | null,
};

export type CreateBillboardMutation = {
  createBillboard?:  {
    __typename: "Billboard",
    id: string,
    label?: string | null,
    imageUrl?: string | null,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        accountCategoriesId?: string | null,
        billboardCategoriesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountBillboardsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateBillboardMutationVariables = {
  input: UpdateBillboardInput,
  condition?: ModelBillboardConditionInput | null,
};

export type UpdateBillboardMutation = {
  updateBillboard?:  {
    __typename: "Billboard",
    id: string,
    label?: string | null,
    imageUrl?: string | null,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        accountCategoriesId?: string | null,
        billboardCategoriesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountBillboardsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteBillboardMutationVariables = {
  input: DeleteBillboardInput,
  condition?: ModelBillboardConditionInput | null,
};

export type DeleteBillboardMutation = {
  deleteBillboard?:  {
    __typename: "Billboard",
    id: string,
    label?: string | null,
    imageUrl?: string | null,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        accountCategoriesId?: string | null,
        billboardCategoriesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountBillboardsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    billboard?:  {
      __typename: "Billboard",
      id: string,
      label?: string | null,
      imageUrl?: string | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountBillboardsId?: string | null,
      owner?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        price?: number | null,
        isFeatured?: boolean | null,
        isArchived?: boolean | null,
        createdAt: string,
        updatedAt: string,
        accountProductsId?: string | null,
        categoryProductsId?: string | null,
        sizeProductsId?: string | null,
        colorProductsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountCategoriesId?: string | null,
    billboardCategoriesId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    billboard?:  {
      __typename: "Billboard",
      id: string,
      label?: string | null,
      imageUrl?: string | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountBillboardsId?: string | null,
      owner?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        price?: number | null,
        isFeatured?: boolean | null,
        isArchived?: boolean | null,
        createdAt: string,
        updatedAt: string,
        accountProductsId?: string | null,
        categoryProductsId?: string | null,
        sizeProductsId?: string | null,
        colorProductsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountCategoriesId?: string | null,
    billboardCategoriesId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    billboard?:  {
      __typename: "Billboard",
      id: string,
      label?: string | null,
      imageUrl?: string | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountBillboardsId?: string | null,
      owner?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        price?: number | null,
        isFeatured?: boolean | null,
        isArchived?: boolean | null,
        createdAt: string,
        updatedAt: string,
        accountProductsId?: string | null,
        categoryProductsId?: string | null,
        sizeProductsId?: string | null,
        colorProductsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountCategoriesId?: string | null,
    billboardCategoriesId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateSizeMutationVariables = {
  input: CreateSizeInput,
  condition?: ModelSizeConditionInput | null,
};

export type CreateSizeMutation = {
  createSize?:  {
    __typename: "Size",
    id: string,
    name?: string | null,
    value?: string | null,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        price?: number | null,
        isFeatured?: boolean | null,
        isArchived?: boolean | null,
        createdAt: string,
        updatedAt: string,
        accountProductsId?: string | null,
        categoryProductsId?: string | null,
        sizeProductsId?: string | null,
        colorProductsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountSizesId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateSizeMutationVariables = {
  input: UpdateSizeInput,
  condition?: ModelSizeConditionInput | null,
};

export type UpdateSizeMutation = {
  updateSize?:  {
    __typename: "Size",
    id: string,
    name?: string | null,
    value?: string | null,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        price?: number | null,
        isFeatured?: boolean | null,
        isArchived?: boolean | null,
        createdAt: string,
        updatedAt: string,
        accountProductsId?: string | null,
        categoryProductsId?: string | null,
        sizeProductsId?: string | null,
        colorProductsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountSizesId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteSizeMutationVariables = {
  input: DeleteSizeInput,
  condition?: ModelSizeConditionInput | null,
};

export type DeleteSizeMutation = {
  deleteSize?:  {
    __typename: "Size",
    id: string,
    name?: string | null,
    value?: string | null,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        price?: number | null,
        isFeatured?: boolean | null,
        isArchived?: boolean | null,
        createdAt: string,
        updatedAt: string,
        accountProductsId?: string | null,
        categoryProductsId?: string | null,
        sizeProductsId?: string | null,
        colorProductsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountSizesId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateColorMutationVariables = {
  input: CreateColorInput,
  condition?: ModelColorConditionInput | null,
};

export type CreateColorMutation = {
  createColor?:  {
    __typename: "Color",
    id: string,
    name?: string | null,
    value?: string | null,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        price?: number | null,
        isFeatured?: boolean | null,
        isArchived?: boolean | null,
        createdAt: string,
        updatedAt: string,
        accountProductsId?: string | null,
        categoryProductsId?: string | null,
        sizeProductsId?: string | null,
        colorProductsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountColorsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateColorMutationVariables = {
  input: UpdateColorInput,
  condition?: ModelColorConditionInput | null,
};

export type UpdateColorMutation = {
  updateColor?:  {
    __typename: "Color",
    id: string,
    name?: string | null,
    value?: string | null,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        price?: number | null,
        isFeatured?: boolean | null,
        isArchived?: boolean | null,
        createdAt: string,
        updatedAt: string,
        accountProductsId?: string | null,
        categoryProductsId?: string | null,
        sizeProductsId?: string | null,
        colorProductsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountColorsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteColorMutationVariables = {
  input: DeleteColorInput,
  condition?: ModelColorConditionInput | null,
};

export type DeleteColorMutation = {
  deleteColor?:  {
    __typename: "Color",
    id: string,
    name?: string | null,
    value?: string | null,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        price?: number | null,
        isFeatured?: boolean | null,
        isArchived?: boolean | null,
        createdAt: string,
        updatedAt: string,
        accountProductsId?: string | null,
        categoryProductsId?: string | null,
        sizeProductsId?: string | null,
        colorProductsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountColorsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    price?: number | null,
    isFeatured?: boolean | null,
    isArchived?: boolean | null,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      billboard?:  {
        __typename: "Billboard",
        id: string,
        label?: string | null,
        imageUrl?: string | null,
        createdAt: string,
        updatedAt: string,
        accountBillboardsId?: string | null,
        owner?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountCategoriesId?: string | null,
      billboardCategoriesId?: string | null,
      owner?: string | null,
    } | null,
    size?:  {
      __typename: "Size",
      id: string,
      name?: string | null,
      value?: string | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountSizesId?: string | null,
      owner?: string | null,
    } | null,
    color?:  {
      __typename: "Color",
      id: string,
      name?: string | null,
      value?: string | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountColorsId?: string | null,
      owner?: string | null,
    } | null,
    images?:  {
      __typename: "ModelImageConnection",
      items:  Array< {
        __typename: "Image",
        id: string,
        url: string,
        createdAt: string,
        updatedAt: string,
        productImagesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    orderItems?:  {
      __typename: "ModelOrderItemConnection",
      items:  Array< {
        __typename: "OrderItem",
        id: string,
        createdAt: string,
        updatedAt: string,
        productOrderItemsId?: string | null,
        orderOrderItemsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountProductsId?: string | null,
    categoryProductsId?: string | null,
    sizeProductsId?: string | null,
    colorProductsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    price?: number | null,
    isFeatured?: boolean | null,
    isArchived?: boolean | null,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      billboard?:  {
        __typename: "Billboard",
        id: string,
        label?: string | null,
        imageUrl?: string | null,
        createdAt: string,
        updatedAt: string,
        accountBillboardsId?: string | null,
        owner?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountCategoriesId?: string | null,
      billboardCategoriesId?: string | null,
      owner?: string | null,
    } | null,
    size?:  {
      __typename: "Size",
      id: string,
      name?: string | null,
      value?: string | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountSizesId?: string | null,
      owner?: string | null,
    } | null,
    color?:  {
      __typename: "Color",
      id: string,
      name?: string | null,
      value?: string | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountColorsId?: string | null,
      owner?: string | null,
    } | null,
    images?:  {
      __typename: "ModelImageConnection",
      items:  Array< {
        __typename: "Image",
        id: string,
        url: string,
        createdAt: string,
        updatedAt: string,
        productImagesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    orderItems?:  {
      __typename: "ModelOrderItemConnection",
      items:  Array< {
        __typename: "OrderItem",
        id: string,
        createdAt: string,
        updatedAt: string,
        productOrderItemsId?: string | null,
        orderOrderItemsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountProductsId?: string | null,
    categoryProductsId?: string | null,
    sizeProductsId?: string | null,
    colorProductsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    price?: number | null,
    isFeatured?: boolean | null,
    isArchived?: boolean | null,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      billboard?:  {
        __typename: "Billboard",
        id: string,
        label?: string | null,
        imageUrl?: string | null,
        createdAt: string,
        updatedAt: string,
        accountBillboardsId?: string | null,
        owner?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountCategoriesId?: string | null,
      billboardCategoriesId?: string | null,
      owner?: string | null,
    } | null,
    size?:  {
      __typename: "Size",
      id: string,
      name?: string | null,
      value?: string | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountSizesId?: string | null,
      owner?: string | null,
    } | null,
    color?:  {
      __typename: "Color",
      id: string,
      name?: string | null,
      value?: string | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountColorsId?: string | null,
      owner?: string | null,
    } | null,
    images?:  {
      __typename: "ModelImageConnection",
      items:  Array< {
        __typename: "Image",
        id: string,
        url: string,
        createdAt: string,
        updatedAt: string,
        productImagesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    orderItems?:  {
      __typename: "ModelOrderItemConnection",
      items:  Array< {
        __typename: "OrderItem",
        id: string,
        createdAt: string,
        updatedAt: string,
        productOrderItemsId?: string | null,
        orderOrderItemsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountProductsId?: string | null,
    categoryProductsId?: string | null,
    sizeProductsId?: string | null,
    colorProductsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateImageMutationVariables = {
  input: CreateImageInput,
  condition?: ModelImageConditionInput | null,
};

export type CreateImageMutation = {
  createImage?:  {
    __typename: "Image",
    id: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      price?: number | null,
      isFeatured?: boolean | null,
      isArchived?: boolean | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        accountCategoriesId?: string | null,
        billboardCategoriesId?: string | null,
        owner?: string | null,
      } | null,
      size?:  {
        __typename: "Size",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountSizesId?: string | null,
        owner?: string | null,
      } | null,
      color?:  {
        __typename: "Color",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountColorsId?: string | null,
        owner?: string | null,
      } | null,
      images?:  {
        __typename: "ModelImageConnection",
        nextToken?: string | null,
      } | null,
      orderItems?:  {
        __typename: "ModelOrderItemConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountProductsId?: string | null,
      categoryProductsId?: string | null,
      sizeProductsId?: string | null,
      colorProductsId?: string | null,
      owner?: string | null,
    } | null,
    url: string,
    createdAt: string,
    updatedAt: string,
    productImagesId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateImageMutationVariables = {
  input: UpdateImageInput,
  condition?: ModelImageConditionInput | null,
};

export type UpdateImageMutation = {
  updateImage?:  {
    __typename: "Image",
    id: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      price?: number | null,
      isFeatured?: boolean | null,
      isArchived?: boolean | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        accountCategoriesId?: string | null,
        billboardCategoriesId?: string | null,
        owner?: string | null,
      } | null,
      size?:  {
        __typename: "Size",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountSizesId?: string | null,
        owner?: string | null,
      } | null,
      color?:  {
        __typename: "Color",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountColorsId?: string | null,
        owner?: string | null,
      } | null,
      images?:  {
        __typename: "ModelImageConnection",
        nextToken?: string | null,
      } | null,
      orderItems?:  {
        __typename: "ModelOrderItemConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountProductsId?: string | null,
      categoryProductsId?: string | null,
      sizeProductsId?: string | null,
      colorProductsId?: string | null,
      owner?: string | null,
    } | null,
    url: string,
    createdAt: string,
    updatedAt: string,
    productImagesId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteImageMutationVariables = {
  input: DeleteImageInput,
  condition?: ModelImageConditionInput | null,
};

export type DeleteImageMutation = {
  deleteImage?:  {
    __typename: "Image",
    id: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      price?: number | null,
      isFeatured?: boolean | null,
      isArchived?: boolean | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        accountCategoriesId?: string | null,
        billboardCategoriesId?: string | null,
        owner?: string | null,
      } | null,
      size?:  {
        __typename: "Size",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountSizesId?: string | null,
        owner?: string | null,
      } | null,
      color?:  {
        __typename: "Color",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountColorsId?: string | null,
        owner?: string | null,
      } | null,
      images?:  {
        __typename: "ModelImageConnection",
        nextToken?: string | null,
      } | null,
      orderItems?:  {
        __typename: "ModelOrderItemConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountProductsId?: string | null,
      categoryProductsId?: string | null,
      sizeProductsId?: string | null,
      colorProductsId?: string | null,
      owner?: string | null,
    } | null,
    url: string,
    createdAt: string,
    updatedAt: string,
    productImagesId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    orderItems?:  {
      __typename: "ModelOrderItemConnection",
      items:  Array< {
        __typename: "OrderItem",
        id: string,
        createdAt: string,
        updatedAt: string,
        productOrderItemsId?: string | null,
        orderOrderItemsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    isPaid?: boolean | null,
    phone?: string | null,
    address?: string | null,
    createdAt: string,
    updatedAt: string,
    accountOrdersId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    orderItems?:  {
      __typename: "ModelOrderItemConnection",
      items:  Array< {
        __typename: "OrderItem",
        id: string,
        createdAt: string,
        updatedAt: string,
        productOrderItemsId?: string | null,
        orderOrderItemsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    isPaid?: boolean | null,
    phone?: string | null,
    address?: string | null,
    createdAt: string,
    updatedAt: string,
    accountOrdersId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    orderItems?:  {
      __typename: "ModelOrderItemConnection",
      items:  Array< {
        __typename: "OrderItem",
        id: string,
        createdAt: string,
        updatedAt: string,
        productOrderItemsId?: string | null,
        orderOrderItemsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    isPaid?: boolean | null,
    phone?: string | null,
    address?: string | null,
    createdAt: string,
    updatedAt: string,
    accountOrdersId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateOrderItemMutationVariables = {
  input: CreateOrderItemInput,
  condition?: ModelOrderItemConditionInput | null,
};

export type CreateOrderItemMutation = {
  createOrderItem?:  {
    __typename: "OrderItem",
    id: string,
    order?:  {
      __typename: "Order",
      id: string,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      orderItems?:  {
        __typename: "ModelOrderItemConnection",
        nextToken?: string | null,
      } | null,
      isPaid?: boolean | null,
      phone?: string | null,
      address?: string | null,
      createdAt: string,
      updatedAt: string,
      accountOrdersId?: string | null,
      owner?: string | null,
    } | null,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      price?: number | null,
      isFeatured?: boolean | null,
      isArchived?: boolean | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        accountCategoriesId?: string | null,
        billboardCategoriesId?: string | null,
        owner?: string | null,
      } | null,
      size?:  {
        __typename: "Size",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountSizesId?: string | null,
        owner?: string | null,
      } | null,
      color?:  {
        __typename: "Color",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountColorsId?: string | null,
        owner?: string | null,
      } | null,
      images?:  {
        __typename: "ModelImageConnection",
        nextToken?: string | null,
      } | null,
      orderItems?:  {
        __typename: "ModelOrderItemConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountProductsId?: string | null,
      categoryProductsId?: string | null,
      sizeProductsId?: string | null,
      colorProductsId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    productOrderItemsId?: string | null,
    orderOrderItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateOrderItemMutationVariables = {
  input: UpdateOrderItemInput,
  condition?: ModelOrderItemConditionInput | null,
};

export type UpdateOrderItemMutation = {
  updateOrderItem?:  {
    __typename: "OrderItem",
    id: string,
    order?:  {
      __typename: "Order",
      id: string,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      orderItems?:  {
        __typename: "ModelOrderItemConnection",
        nextToken?: string | null,
      } | null,
      isPaid?: boolean | null,
      phone?: string | null,
      address?: string | null,
      createdAt: string,
      updatedAt: string,
      accountOrdersId?: string | null,
      owner?: string | null,
    } | null,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      price?: number | null,
      isFeatured?: boolean | null,
      isArchived?: boolean | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        accountCategoriesId?: string | null,
        billboardCategoriesId?: string | null,
        owner?: string | null,
      } | null,
      size?:  {
        __typename: "Size",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountSizesId?: string | null,
        owner?: string | null,
      } | null,
      color?:  {
        __typename: "Color",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountColorsId?: string | null,
        owner?: string | null,
      } | null,
      images?:  {
        __typename: "ModelImageConnection",
        nextToken?: string | null,
      } | null,
      orderItems?:  {
        __typename: "ModelOrderItemConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountProductsId?: string | null,
      categoryProductsId?: string | null,
      sizeProductsId?: string | null,
      colorProductsId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    productOrderItemsId?: string | null,
    orderOrderItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteOrderItemMutationVariables = {
  input: DeleteOrderItemInput,
  condition?: ModelOrderItemConditionInput | null,
};

export type DeleteOrderItemMutation = {
  deleteOrderItem?:  {
    __typename: "OrderItem",
    id: string,
    order?:  {
      __typename: "Order",
      id: string,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      orderItems?:  {
        __typename: "ModelOrderItemConnection",
        nextToken?: string | null,
      } | null,
      isPaid?: boolean | null,
      phone?: string | null,
      address?: string | null,
      createdAt: string,
      updatedAt: string,
      accountOrdersId?: string | null,
      owner?: string | null,
    } | null,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      price?: number | null,
      isFeatured?: boolean | null,
      isArchived?: boolean | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        accountCategoriesId?: string | null,
        billboardCategoriesId?: string | null,
        owner?: string | null,
      } | null,
      size?:  {
        __typename: "Size",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountSizesId?: string | null,
        owner?: string | null,
      } | null,
      color?:  {
        __typename: "Color",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountColorsId?: string | null,
        owner?: string | null,
      } | null,
      images?:  {
        __typename: "ModelImageConnection",
        nextToken?: string | null,
      } | null,
      orderItems?:  {
        __typename: "ModelOrderItemConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountProductsId?: string | null,
      categoryProductsId?: string | null,
      sizeProductsId?: string | null,
      colorProductsId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    productOrderItemsId?: string | null,
    orderOrderItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type GetBookQueryVariables = {
  id: string,
};

export type GetBookQuery = {
  getBook?:  {
    __typename: "Book",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListBooksQueryVariables = {
  filter?: ModelBookFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBooksQuery = {
  listBooks?:  {
    __typename: "ModelBookConnection",
    items:  Array< {
      __typename: "Book",
      id: string,
      title: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAccountQueryVariables = {
  id: string,
};

export type GetAccountQuery = {
  getAccount?:  {
    __typename: "Account",
    id: string,
    name: string,
    userId?: string | null,
    billboards?:  {
      __typename: "ModelBillboardConnection",
      items:  Array< {
        __typename: "Billboard",
        id: string,
        label?: string | null,
        imageUrl?: string | null,
        createdAt: string,
        updatedAt: string,
        accountBillboardsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        accountCategoriesId?: string | null,
        billboardCategoriesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    sizes?:  {
      __typename: "ModelSizeConnection",
      items:  Array< {
        __typename: "Size",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountSizesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    colors?:  {
      __typename: "ModelColorConnection",
      items:  Array< {
        __typename: "Color",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountColorsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        price?: number | null,
        isFeatured?: boolean | null,
        isArchived?: boolean | null,
        createdAt: string,
        updatedAt: string,
        accountProductsId?: string | null,
        categoryProductsId?: string | null,
        sizeProductsId?: string | null,
        colorProductsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        isPaid?: boolean | null,
        phone?: string | null,
        address?: string | null,
        createdAt: string,
        updatedAt: string,
        accountOrdersId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListAccountsQueryVariables = {
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAccountsQuery = {
  listAccounts?:  {
    __typename: "ModelAccountConnection",
    items:  Array< {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBillboardQueryVariables = {
  id: string,
};

export type GetBillboardQuery = {
  getBillboard?:  {
    __typename: "Billboard",
    id: string,
    label?: string | null,
    imageUrl?: string | null,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        accountCategoriesId?: string | null,
        billboardCategoriesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountBillboardsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListBillboardsQueryVariables = {
  filter?: ModelBillboardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBillboardsQuery = {
  listBillboards?:  {
    __typename: "ModelBillboardConnection",
    items:  Array< {
      __typename: "Billboard",
      id: string,
      label?: string | null,
      imageUrl?: string | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountBillboardsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    billboard?:  {
      __typename: "Billboard",
      id: string,
      label?: string | null,
      imageUrl?: string | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountBillboardsId?: string | null,
      owner?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        price?: number | null,
        isFeatured?: boolean | null,
        isArchived?: boolean | null,
        createdAt: string,
        updatedAt: string,
        accountProductsId?: string | null,
        categoryProductsId?: string | null,
        sizeProductsId?: string | null,
        colorProductsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountCategoriesId?: string | null,
    billboardCategoriesId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      billboard?:  {
        __typename: "Billboard",
        id: string,
        label?: string | null,
        imageUrl?: string | null,
        createdAt: string,
        updatedAt: string,
        accountBillboardsId?: string | null,
        owner?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountCategoriesId?: string | null,
      billboardCategoriesId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSizeQueryVariables = {
  id: string,
};

export type GetSizeQuery = {
  getSize?:  {
    __typename: "Size",
    id: string,
    name?: string | null,
    value?: string | null,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        price?: number | null,
        isFeatured?: boolean | null,
        isArchived?: boolean | null,
        createdAt: string,
        updatedAt: string,
        accountProductsId?: string | null,
        categoryProductsId?: string | null,
        sizeProductsId?: string | null,
        colorProductsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountSizesId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListSizesQueryVariables = {
  filter?: ModelSizeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSizesQuery = {
  listSizes?:  {
    __typename: "ModelSizeConnection",
    items:  Array< {
      __typename: "Size",
      id: string,
      name?: string | null,
      value?: string | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountSizesId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetColorQueryVariables = {
  id: string,
};

export type GetColorQuery = {
  getColor?:  {
    __typename: "Color",
    id: string,
    name?: string | null,
    value?: string | null,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        price?: number | null,
        isFeatured?: boolean | null,
        isArchived?: boolean | null,
        createdAt: string,
        updatedAt: string,
        accountProductsId?: string | null,
        categoryProductsId?: string | null,
        sizeProductsId?: string | null,
        colorProductsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountColorsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListColorsQueryVariables = {
  filter?: ModelColorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListColorsQuery = {
  listColors?:  {
    __typename: "ModelColorConnection",
    items:  Array< {
      __typename: "Color",
      id: string,
      name?: string | null,
      value?: string | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountColorsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    price?: number | null,
    isFeatured?: boolean | null,
    isArchived?: boolean | null,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      billboard?:  {
        __typename: "Billboard",
        id: string,
        label?: string | null,
        imageUrl?: string | null,
        createdAt: string,
        updatedAt: string,
        accountBillboardsId?: string | null,
        owner?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountCategoriesId?: string | null,
      billboardCategoriesId?: string | null,
      owner?: string | null,
    } | null,
    size?:  {
      __typename: "Size",
      id: string,
      name?: string | null,
      value?: string | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountSizesId?: string | null,
      owner?: string | null,
    } | null,
    color?:  {
      __typename: "Color",
      id: string,
      name?: string | null,
      value?: string | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountColorsId?: string | null,
      owner?: string | null,
    } | null,
    images?:  {
      __typename: "ModelImageConnection",
      items:  Array< {
        __typename: "Image",
        id: string,
        url: string,
        createdAt: string,
        updatedAt: string,
        productImagesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    orderItems?:  {
      __typename: "ModelOrderItemConnection",
      items:  Array< {
        __typename: "OrderItem",
        id: string,
        createdAt: string,
        updatedAt: string,
        productOrderItemsId?: string | null,
        orderOrderItemsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountProductsId?: string | null,
    categoryProductsId?: string | null,
    sizeProductsId?: string | null,
    colorProductsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      price?: number | null,
      isFeatured?: boolean | null,
      isArchived?: boolean | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        accountCategoriesId?: string | null,
        billboardCategoriesId?: string | null,
        owner?: string | null,
      } | null,
      size?:  {
        __typename: "Size",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountSizesId?: string | null,
        owner?: string | null,
      } | null,
      color?:  {
        __typename: "Color",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountColorsId?: string | null,
        owner?: string | null,
      } | null,
      images?:  {
        __typename: "ModelImageConnection",
        nextToken?: string | null,
      } | null,
      orderItems?:  {
        __typename: "ModelOrderItemConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountProductsId?: string | null,
      categoryProductsId?: string | null,
      sizeProductsId?: string | null,
      colorProductsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetImageQueryVariables = {
  id: string,
};

export type GetImageQuery = {
  getImage?:  {
    __typename: "Image",
    id: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      price?: number | null,
      isFeatured?: boolean | null,
      isArchived?: boolean | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        accountCategoriesId?: string | null,
        billboardCategoriesId?: string | null,
        owner?: string | null,
      } | null,
      size?:  {
        __typename: "Size",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountSizesId?: string | null,
        owner?: string | null,
      } | null,
      color?:  {
        __typename: "Color",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountColorsId?: string | null,
        owner?: string | null,
      } | null,
      images?:  {
        __typename: "ModelImageConnection",
        nextToken?: string | null,
      } | null,
      orderItems?:  {
        __typename: "ModelOrderItemConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountProductsId?: string | null,
      categoryProductsId?: string | null,
      sizeProductsId?: string | null,
      colorProductsId?: string | null,
      owner?: string | null,
    } | null,
    url: string,
    createdAt: string,
    updatedAt: string,
    productImagesId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListImagesQueryVariables = {
  filter?: ModelImageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListImagesQuery = {
  listImages?:  {
    __typename: "ModelImageConnection",
    items:  Array< {
      __typename: "Image",
      id: string,
      product?:  {
        __typename: "Product",
        id: string,
        name: string,
        price?: number | null,
        isFeatured?: boolean | null,
        isArchived?: boolean | null,
        createdAt: string,
        updatedAt: string,
        accountProductsId?: string | null,
        categoryProductsId?: string | null,
        sizeProductsId?: string | null,
        colorProductsId?: string | null,
        owner?: string | null,
      } | null,
      url: string,
      createdAt: string,
      updatedAt: string,
      productImagesId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    orderItems?:  {
      __typename: "ModelOrderItemConnection",
      items:  Array< {
        __typename: "OrderItem",
        id: string,
        createdAt: string,
        updatedAt: string,
        productOrderItemsId?: string | null,
        orderOrderItemsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    isPaid?: boolean | null,
    phone?: string | null,
    address?: string | null,
    createdAt: string,
    updatedAt: string,
    accountOrdersId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      orderItems?:  {
        __typename: "ModelOrderItemConnection",
        nextToken?: string | null,
      } | null,
      isPaid?: boolean | null,
      phone?: string | null,
      address?: string | null,
      createdAt: string,
      updatedAt: string,
      accountOrdersId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrderItemQueryVariables = {
  id: string,
};

export type GetOrderItemQuery = {
  getOrderItem?:  {
    __typename: "OrderItem",
    id: string,
    order?:  {
      __typename: "Order",
      id: string,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      orderItems?:  {
        __typename: "ModelOrderItemConnection",
        nextToken?: string | null,
      } | null,
      isPaid?: boolean | null,
      phone?: string | null,
      address?: string | null,
      createdAt: string,
      updatedAt: string,
      accountOrdersId?: string | null,
      owner?: string | null,
    } | null,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      price?: number | null,
      isFeatured?: boolean | null,
      isArchived?: boolean | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        accountCategoriesId?: string | null,
        billboardCategoriesId?: string | null,
        owner?: string | null,
      } | null,
      size?:  {
        __typename: "Size",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountSizesId?: string | null,
        owner?: string | null,
      } | null,
      color?:  {
        __typename: "Color",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountColorsId?: string | null,
        owner?: string | null,
      } | null,
      images?:  {
        __typename: "ModelImageConnection",
        nextToken?: string | null,
      } | null,
      orderItems?:  {
        __typename: "ModelOrderItemConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountProductsId?: string | null,
      categoryProductsId?: string | null,
      sizeProductsId?: string | null,
      colorProductsId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    productOrderItemsId?: string | null,
    orderOrderItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListOrderItemsQueryVariables = {
  filter?: ModelOrderItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrderItemsQuery = {
  listOrderItems?:  {
    __typename: "ModelOrderItemConnection",
    items:  Array< {
      __typename: "OrderItem",
      id: string,
      order?:  {
        __typename: "Order",
        id: string,
        isPaid?: boolean | null,
        phone?: string | null,
        address?: string | null,
        createdAt: string,
        updatedAt: string,
        accountOrdersId?: string | null,
        owner?: string | null,
      } | null,
      product?:  {
        __typename: "Product",
        id: string,
        name: string,
        price?: number | null,
        isFeatured?: boolean | null,
        isArchived?: boolean | null,
        createdAt: string,
        updatedAt: string,
        accountProductsId?: string | null,
        categoryProductsId?: string | null,
        sizeProductsId?: string | null,
        colorProductsId?: string | null,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      productOrderItemsId?: string | null,
      orderOrderItemsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateBookSubscriptionVariables = {
  filter?: ModelSubscriptionBookFilterInput | null,
  owner?: string | null,
};

export type OnCreateBookSubscription = {
  onCreateBook?:  {
    __typename: "Book",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateBookSubscriptionVariables = {
  filter?: ModelSubscriptionBookFilterInput | null,
  owner?: string | null,
};

export type OnUpdateBookSubscription = {
  onUpdateBook?:  {
    __typename: "Book",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteBookSubscriptionVariables = {
  filter?: ModelSubscriptionBookFilterInput | null,
  owner?: string | null,
};

export type OnDeleteBookSubscription = {
  onDeleteBook?:  {
    __typename: "Book",
    id: string,
    title: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
  owner?: string | null,
};

export type OnCreateAccountSubscription = {
  onCreateAccount?:  {
    __typename: "Account",
    id: string,
    name: string,
    userId?: string | null,
    billboards?:  {
      __typename: "ModelBillboardConnection",
      items:  Array< {
        __typename: "Billboard",
        id: string,
        label?: string | null,
        imageUrl?: string | null,
        createdAt: string,
        updatedAt: string,
        accountBillboardsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        accountCategoriesId?: string | null,
        billboardCategoriesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    sizes?:  {
      __typename: "ModelSizeConnection",
      items:  Array< {
        __typename: "Size",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountSizesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    colors?:  {
      __typename: "ModelColorConnection",
      items:  Array< {
        __typename: "Color",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountColorsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        price?: number | null,
        isFeatured?: boolean | null,
        isArchived?: boolean | null,
        createdAt: string,
        updatedAt: string,
        accountProductsId?: string | null,
        categoryProductsId?: string | null,
        sizeProductsId?: string | null,
        colorProductsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        isPaid?: boolean | null,
        phone?: string | null,
        address?: string | null,
        createdAt: string,
        updatedAt: string,
        accountOrdersId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
  owner?: string | null,
};

export type OnUpdateAccountSubscription = {
  onUpdateAccount?:  {
    __typename: "Account",
    id: string,
    name: string,
    userId?: string | null,
    billboards?:  {
      __typename: "ModelBillboardConnection",
      items:  Array< {
        __typename: "Billboard",
        id: string,
        label?: string | null,
        imageUrl?: string | null,
        createdAt: string,
        updatedAt: string,
        accountBillboardsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        accountCategoriesId?: string | null,
        billboardCategoriesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    sizes?:  {
      __typename: "ModelSizeConnection",
      items:  Array< {
        __typename: "Size",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountSizesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    colors?:  {
      __typename: "ModelColorConnection",
      items:  Array< {
        __typename: "Color",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountColorsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        price?: number | null,
        isFeatured?: boolean | null,
        isArchived?: boolean | null,
        createdAt: string,
        updatedAt: string,
        accountProductsId?: string | null,
        categoryProductsId?: string | null,
        sizeProductsId?: string | null,
        colorProductsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        isPaid?: boolean | null,
        phone?: string | null,
        address?: string | null,
        createdAt: string,
        updatedAt: string,
        accountOrdersId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
  owner?: string | null,
};

export type OnDeleteAccountSubscription = {
  onDeleteAccount?:  {
    __typename: "Account",
    id: string,
    name: string,
    userId?: string | null,
    billboards?:  {
      __typename: "ModelBillboardConnection",
      items:  Array< {
        __typename: "Billboard",
        id: string,
        label?: string | null,
        imageUrl?: string | null,
        createdAt: string,
        updatedAt: string,
        accountBillboardsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        accountCategoriesId?: string | null,
        billboardCategoriesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    sizes?:  {
      __typename: "ModelSizeConnection",
      items:  Array< {
        __typename: "Size",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountSizesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    colors?:  {
      __typename: "ModelColorConnection",
      items:  Array< {
        __typename: "Color",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountColorsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        price?: number | null,
        isFeatured?: boolean | null,
        isArchived?: boolean | null,
        createdAt: string,
        updatedAt: string,
        accountProductsId?: string | null,
        categoryProductsId?: string | null,
        sizeProductsId?: string | null,
        colorProductsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        isPaid?: boolean | null,
        phone?: string | null,
        address?: string | null,
        createdAt: string,
        updatedAt: string,
        accountOrdersId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateBillboardSubscriptionVariables = {
  filter?: ModelSubscriptionBillboardFilterInput | null,
  owner?: string | null,
};

export type OnCreateBillboardSubscription = {
  onCreateBillboard?:  {
    __typename: "Billboard",
    id: string,
    label?: string | null,
    imageUrl?: string | null,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        accountCategoriesId?: string | null,
        billboardCategoriesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountBillboardsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateBillboardSubscriptionVariables = {
  filter?: ModelSubscriptionBillboardFilterInput | null,
  owner?: string | null,
};

export type OnUpdateBillboardSubscription = {
  onUpdateBillboard?:  {
    __typename: "Billboard",
    id: string,
    label?: string | null,
    imageUrl?: string | null,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        accountCategoriesId?: string | null,
        billboardCategoriesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountBillboardsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteBillboardSubscriptionVariables = {
  filter?: ModelSubscriptionBillboardFilterInput | null,
  owner?: string | null,
};

export type OnDeleteBillboardSubscription = {
  onDeleteBillboard?:  {
    __typename: "Billboard",
    id: string,
    label?: string | null,
    imageUrl?: string | null,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        accountCategoriesId?: string | null,
        billboardCategoriesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountBillboardsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
  owner?: string | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    billboard?:  {
      __typename: "Billboard",
      id: string,
      label?: string | null,
      imageUrl?: string | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountBillboardsId?: string | null,
      owner?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        price?: number | null,
        isFeatured?: boolean | null,
        isArchived?: boolean | null,
        createdAt: string,
        updatedAt: string,
        accountProductsId?: string | null,
        categoryProductsId?: string | null,
        sizeProductsId?: string | null,
        colorProductsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountCategoriesId?: string | null,
    billboardCategoriesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    billboard?:  {
      __typename: "Billboard",
      id: string,
      label?: string | null,
      imageUrl?: string | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountBillboardsId?: string | null,
      owner?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        price?: number | null,
        isFeatured?: boolean | null,
        isArchived?: boolean | null,
        createdAt: string,
        updatedAt: string,
        accountProductsId?: string | null,
        categoryProductsId?: string | null,
        sizeProductsId?: string | null,
        colorProductsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountCategoriesId?: string | null,
    billboardCategoriesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    billboard?:  {
      __typename: "Billboard",
      id: string,
      label?: string | null,
      imageUrl?: string | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountBillboardsId?: string | null,
      owner?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        price?: number | null,
        isFeatured?: boolean | null,
        isArchived?: boolean | null,
        createdAt: string,
        updatedAt: string,
        accountProductsId?: string | null,
        categoryProductsId?: string | null,
        sizeProductsId?: string | null,
        colorProductsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountCategoriesId?: string | null,
    billboardCategoriesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateSizeSubscriptionVariables = {
  filter?: ModelSubscriptionSizeFilterInput | null,
  owner?: string | null,
};

export type OnCreateSizeSubscription = {
  onCreateSize?:  {
    __typename: "Size",
    id: string,
    name?: string | null,
    value?: string | null,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        price?: number | null,
        isFeatured?: boolean | null,
        isArchived?: boolean | null,
        createdAt: string,
        updatedAt: string,
        accountProductsId?: string | null,
        categoryProductsId?: string | null,
        sizeProductsId?: string | null,
        colorProductsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountSizesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateSizeSubscriptionVariables = {
  filter?: ModelSubscriptionSizeFilterInput | null,
  owner?: string | null,
};

export type OnUpdateSizeSubscription = {
  onUpdateSize?:  {
    __typename: "Size",
    id: string,
    name?: string | null,
    value?: string | null,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        price?: number | null,
        isFeatured?: boolean | null,
        isArchived?: boolean | null,
        createdAt: string,
        updatedAt: string,
        accountProductsId?: string | null,
        categoryProductsId?: string | null,
        sizeProductsId?: string | null,
        colorProductsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountSizesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteSizeSubscriptionVariables = {
  filter?: ModelSubscriptionSizeFilterInput | null,
  owner?: string | null,
};

export type OnDeleteSizeSubscription = {
  onDeleteSize?:  {
    __typename: "Size",
    id: string,
    name?: string | null,
    value?: string | null,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        price?: number | null,
        isFeatured?: boolean | null,
        isArchived?: boolean | null,
        createdAt: string,
        updatedAt: string,
        accountProductsId?: string | null,
        categoryProductsId?: string | null,
        sizeProductsId?: string | null,
        colorProductsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountSizesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateColorSubscriptionVariables = {
  filter?: ModelSubscriptionColorFilterInput | null,
  owner?: string | null,
};

export type OnCreateColorSubscription = {
  onCreateColor?:  {
    __typename: "Color",
    id: string,
    name?: string | null,
    value?: string | null,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        price?: number | null,
        isFeatured?: boolean | null,
        isArchived?: boolean | null,
        createdAt: string,
        updatedAt: string,
        accountProductsId?: string | null,
        categoryProductsId?: string | null,
        sizeProductsId?: string | null,
        colorProductsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountColorsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateColorSubscriptionVariables = {
  filter?: ModelSubscriptionColorFilterInput | null,
  owner?: string | null,
};

export type OnUpdateColorSubscription = {
  onUpdateColor?:  {
    __typename: "Color",
    id: string,
    name?: string | null,
    value?: string | null,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        price?: number | null,
        isFeatured?: boolean | null,
        isArchived?: boolean | null,
        createdAt: string,
        updatedAt: string,
        accountProductsId?: string | null,
        categoryProductsId?: string | null,
        sizeProductsId?: string | null,
        colorProductsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountColorsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteColorSubscriptionVariables = {
  filter?: ModelSubscriptionColorFilterInput | null,
  owner?: string | null,
};

export type OnDeleteColorSubscription = {
  onDeleteColor?:  {
    __typename: "Color",
    id: string,
    name?: string | null,
    value?: string | null,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        price?: number | null,
        isFeatured?: boolean | null,
        isArchived?: boolean | null,
        createdAt: string,
        updatedAt: string,
        accountProductsId?: string | null,
        categoryProductsId?: string | null,
        sizeProductsId?: string | null,
        colorProductsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountColorsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
  owner?: string | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    price?: number | null,
    isFeatured?: boolean | null,
    isArchived?: boolean | null,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      billboard?:  {
        __typename: "Billboard",
        id: string,
        label?: string | null,
        imageUrl?: string | null,
        createdAt: string,
        updatedAt: string,
        accountBillboardsId?: string | null,
        owner?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountCategoriesId?: string | null,
      billboardCategoriesId?: string | null,
      owner?: string | null,
    } | null,
    size?:  {
      __typename: "Size",
      id: string,
      name?: string | null,
      value?: string | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountSizesId?: string | null,
      owner?: string | null,
    } | null,
    color?:  {
      __typename: "Color",
      id: string,
      name?: string | null,
      value?: string | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountColorsId?: string | null,
      owner?: string | null,
    } | null,
    images?:  {
      __typename: "ModelImageConnection",
      items:  Array< {
        __typename: "Image",
        id: string,
        url: string,
        createdAt: string,
        updatedAt: string,
        productImagesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    orderItems?:  {
      __typename: "ModelOrderItemConnection",
      items:  Array< {
        __typename: "OrderItem",
        id: string,
        createdAt: string,
        updatedAt: string,
        productOrderItemsId?: string | null,
        orderOrderItemsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountProductsId?: string | null,
    categoryProductsId?: string | null,
    sizeProductsId?: string | null,
    colorProductsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
  owner?: string | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    price?: number | null,
    isFeatured?: boolean | null,
    isArchived?: boolean | null,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      billboard?:  {
        __typename: "Billboard",
        id: string,
        label?: string | null,
        imageUrl?: string | null,
        createdAt: string,
        updatedAt: string,
        accountBillboardsId?: string | null,
        owner?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountCategoriesId?: string | null,
      billboardCategoriesId?: string | null,
      owner?: string | null,
    } | null,
    size?:  {
      __typename: "Size",
      id: string,
      name?: string | null,
      value?: string | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountSizesId?: string | null,
      owner?: string | null,
    } | null,
    color?:  {
      __typename: "Color",
      id: string,
      name?: string | null,
      value?: string | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountColorsId?: string | null,
      owner?: string | null,
    } | null,
    images?:  {
      __typename: "ModelImageConnection",
      items:  Array< {
        __typename: "Image",
        id: string,
        url: string,
        createdAt: string,
        updatedAt: string,
        productImagesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    orderItems?:  {
      __typename: "ModelOrderItemConnection",
      items:  Array< {
        __typename: "OrderItem",
        id: string,
        createdAt: string,
        updatedAt: string,
        productOrderItemsId?: string | null,
        orderOrderItemsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountProductsId?: string | null,
    categoryProductsId?: string | null,
    sizeProductsId?: string | null,
    colorProductsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
  owner?: string | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    price?: number | null,
    isFeatured?: boolean | null,
    isArchived?: boolean | null,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      billboard?:  {
        __typename: "Billboard",
        id: string,
        label?: string | null,
        imageUrl?: string | null,
        createdAt: string,
        updatedAt: string,
        accountBillboardsId?: string | null,
        owner?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountCategoriesId?: string | null,
      billboardCategoriesId?: string | null,
      owner?: string | null,
    } | null,
    size?:  {
      __typename: "Size",
      id: string,
      name?: string | null,
      value?: string | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountSizesId?: string | null,
      owner?: string | null,
    } | null,
    color?:  {
      __typename: "Color",
      id: string,
      name?: string | null,
      value?: string | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountColorsId?: string | null,
      owner?: string | null,
    } | null,
    images?:  {
      __typename: "ModelImageConnection",
      items:  Array< {
        __typename: "Image",
        id: string,
        url: string,
        createdAt: string,
        updatedAt: string,
        productImagesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    orderItems?:  {
      __typename: "ModelOrderItemConnection",
      items:  Array< {
        __typename: "OrderItem",
        id: string,
        createdAt: string,
        updatedAt: string,
        productOrderItemsId?: string | null,
        orderOrderItemsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountProductsId?: string | null,
    categoryProductsId?: string | null,
    sizeProductsId?: string | null,
    colorProductsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateImageSubscriptionVariables = {
  filter?: ModelSubscriptionImageFilterInput | null,
  owner?: string | null,
};

export type OnCreateImageSubscription = {
  onCreateImage?:  {
    __typename: "Image",
    id: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      price?: number | null,
      isFeatured?: boolean | null,
      isArchived?: boolean | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        accountCategoriesId?: string | null,
        billboardCategoriesId?: string | null,
        owner?: string | null,
      } | null,
      size?:  {
        __typename: "Size",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountSizesId?: string | null,
        owner?: string | null,
      } | null,
      color?:  {
        __typename: "Color",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountColorsId?: string | null,
        owner?: string | null,
      } | null,
      images?:  {
        __typename: "ModelImageConnection",
        nextToken?: string | null,
      } | null,
      orderItems?:  {
        __typename: "ModelOrderItemConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountProductsId?: string | null,
      categoryProductsId?: string | null,
      sizeProductsId?: string | null,
      colorProductsId?: string | null,
      owner?: string | null,
    } | null,
    url: string,
    createdAt: string,
    updatedAt: string,
    productImagesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateImageSubscriptionVariables = {
  filter?: ModelSubscriptionImageFilterInput | null,
  owner?: string | null,
};

export type OnUpdateImageSubscription = {
  onUpdateImage?:  {
    __typename: "Image",
    id: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      price?: number | null,
      isFeatured?: boolean | null,
      isArchived?: boolean | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        accountCategoriesId?: string | null,
        billboardCategoriesId?: string | null,
        owner?: string | null,
      } | null,
      size?:  {
        __typename: "Size",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountSizesId?: string | null,
        owner?: string | null,
      } | null,
      color?:  {
        __typename: "Color",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountColorsId?: string | null,
        owner?: string | null,
      } | null,
      images?:  {
        __typename: "ModelImageConnection",
        nextToken?: string | null,
      } | null,
      orderItems?:  {
        __typename: "ModelOrderItemConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountProductsId?: string | null,
      categoryProductsId?: string | null,
      sizeProductsId?: string | null,
      colorProductsId?: string | null,
      owner?: string | null,
    } | null,
    url: string,
    createdAt: string,
    updatedAt: string,
    productImagesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteImageSubscriptionVariables = {
  filter?: ModelSubscriptionImageFilterInput | null,
  owner?: string | null,
};

export type OnDeleteImageSubscription = {
  onDeleteImage?:  {
    __typename: "Image",
    id: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      price?: number | null,
      isFeatured?: boolean | null,
      isArchived?: boolean | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        accountCategoriesId?: string | null,
        billboardCategoriesId?: string | null,
        owner?: string | null,
      } | null,
      size?:  {
        __typename: "Size",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountSizesId?: string | null,
        owner?: string | null,
      } | null,
      color?:  {
        __typename: "Color",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountColorsId?: string | null,
        owner?: string | null,
      } | null,
      images?:  {
        __typename: "ModelImageConnection",
        nextToken?: string | null,
      } | null,
      orderItems?:  {
        __typename: "ModelOrderItemConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountProductsId?: string | null,
      categoryProductsId?: string | null,
      sizeProductsId?: string | null,
      colorProductsId?: string | null,
      owner?: string | null,
    } | null,
    url: string,
    createdAt: string,
    updatedAt: string,
    productImagesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
  owner?: string | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    orderItems?:  {
      __typename: "ModelOrderItemConnection",
      items:  Array< {
        __typename: "OrderItem",
        id: string,
        createdAt: string,
        updatedAt: string,
        productOrderItemsId?: string | null,
        orderOrderItemsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    isPaid?: boolean | null,
    phone?: string | null,
    address?: string | null,
    createdAt: string,
    updatedAt: string,
    accountOrdersId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
  owner?: string | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    orderItems?:  {
      __typename: "ModelOrderItemConnection",
      items:  Array< {
        __typename: "OrderItem",
        id: string,
        createdAt: string,
        updatedAt: string,
        productOrderItemsId?: string | null,
        orderOrderItemsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    isPaid?: boolean | null,
    phone?: string | null,
    address?: string | null,
    createdAt: string,
    updatedAt: string,
    accountOrdersId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
  owner?: string | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    account?:  {
      __typename: "Account",
      id: string,
      name: string,
      userId?: string | null,
      billboards?:  {
        __typename: "ModelBillboardConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      sizes?:  {
        __typename: "ModelSizeConnection",
        nextToken?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelColorConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    orderItems?:  {
      __typename: "ModelOrderItemConnection",
      items:  Array< {
        __typename: "OrderItem",
        id: string,
        createdAt: string,
        updatedAt: string,
        productOrderItemsId?: string | null,
        orderOrderItemsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    isPaid?: boolean | null,
    phone?: string | null,
    address?: string | null,
    createdAt: string,
    updatedAt: string,
    accountOrdersId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateOrderItemSubscriptionVariables = {
  filter?: ModelSubscriptionOrderItemFilterInput | null,
  owner?: string | null,
};

export type OnCreateOrderItemSubscription = {
  onCreateOrderItem?:  {
    __typename: "OrderItem",
    id: string,
    order?:  {
      __typename: "Order",
      id: string,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      orderItems?:  {
        __typename: "ModelOrderItemConnection",
        nextToken?: string | null,
      } | null,
      isPaid?: boolean | null,
      phone?: string | null,
      address?: string | null,
      createdAt: string,
      updatedAt: string,
      accountOrdersId?: string | null,
      owner?: string | null,
    } | null,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      price?: number | null,
      isFeatured?: boolean | null,
      isArchived?: boolean | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        accountCategoriesId?: string | null,
        billboardCategoriesId?: string | null,
        owner?: string | null,
      } | null,
      size?:  {
        __typename: "Size",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountSizesId?: string | null,
        owner?: string | null,
      } | null,
      color?:  {
        __typename: "Color",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountColorsId?: string | null,
        owner?: string | null,
      } | null,
      images?:  {
        __typename: "ModelImageConnection",
        nextToken?: string | null,
      } | null,
      orderItems?:  {
        __typename: "ModelOrderItemConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountProductsId?: string | null,
      categoryProductsId?: string | null,
      sizeProductsId?: string | null,
      colorProductsId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    productOrderItemsId?: string | null,
    orderOrderItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateOrderItemSubscriptionVariables = {
  filter?: ModelSubscriptionOrderItemFilterInput | null,
  owner?: string | null,
};

export type OnUpdateOrderItemSubscription = {
  onUpdateOrderItem?:  {
    __typename: "OrderItem",
    id: string,
    order?:  {
      __typename: "Order",
      id: string,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      orderItems?:  {
        __typename: "ModelOrderItemConnection",
        nextToken?: string | null,
      } | null,
      isPaid?: boolean | null,
      phone?: string | null,
      address?: string | null,
      createdAt: string,
      updatedAt: string,
      accountOrdersId?: string | null,
      owner?: string | null,
    } | null,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      price?: number | null,
      isFeatured?: boolean | null,
      isArchived?: boolean | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        accountCategoriesId?: string | null,
        billboardCategoriesId?: string | null,
        owner?: string | null,
      } | null,
      size?:  {
        __typename: "Size",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountSizesId?: string | null,
        owner?: string | null,
      } | null,
      color?:  {
        __typename: "Color",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountColorsId?: string | null,
        owner?: string | null,
      } | null,
      images?:  {
        __typename: "ModelImageConnection",
        nextToken?: string | null,
      } | null,
      orderItems?:  {
        __typename: "ModelOrderItemConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountProductsId?: string | null,
      categoryProductsId?: string | null,
      sizeProductsId?: string | null,
      colorProductsId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    productOrderItemsId?: string | null,
    orderOrderItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteOrderItemSubscriptionVariables = {
  filter?: ModelSubscriptionOrderItemFilterInput | null,
  owner?: string | null,
};

export type OnDeleteOrderItemSubscription = {
  onDeleteOrderItem?:  {
    __typename: "OrderItem",
    id: string,
    order?:  {
      __typename: "Order",
      id: string,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      orderItems?:  {
        __typename: "ModelOrderItemConnection",
        nextToken?: string | null,
      } | null,
      isPaid?: boolean | null,
      phone?: string | null,
      address?: string | null,
      createdAt: string,
      updatedAt: string,
      accountOrdersId?: string | null,
      owner?: string | null,
    } | null,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      price?: number | null,
      isFeatured?: boolean | null,
      isArchived?: boolean | null,
      account?:  {
        __typename: "Account",
        id: string,
        name: string,
        userId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      category?:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        accountCategoriesId?: string | null,
        billboardCategoriesId?: string | null,
        owner?: string | null,
      } | null,
      size?:  {
        __typename: "Size",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountSizesId?: string | null,
        owner?: string | null,
      } | null,
      color?:  {
        __typename: "Color",
        id: string,
        name?: string | null,
        value?: string | null,
        createdAt: string,
        updatedAt: string,
        accountColorsId?: string | null,
        owner?: string | null,
      } | null,
      images?:  {
        __typename: "ModelImageConnection",
        nextToken?: string | null,
      } | null,
      orderItems?:  {
        __typename: "ModelOrderItemConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountProductsId?: string | null,
      categoryProductsId?: string | null,
      sizeProductsId?: string | null,
      colorProductsId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    productOrderItemsId?: string | null,
    orderOrderItemsId?: string | null,
    owner?: string | null,
  } | null,
};
