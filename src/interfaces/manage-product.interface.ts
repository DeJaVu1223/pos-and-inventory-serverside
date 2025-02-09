export interface ManageProduct {
  product_ID?: string;
  productName: string;
  productPrice: number;
  productCategory: string;
  productSubCategory: string;
  productAvailability: 'Yes' | 'No';
}
