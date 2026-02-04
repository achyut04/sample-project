export interface ProductItem {
  code: number;
  type: string;
  message: string;
  products: {
    product_id: number;
    product_name: string;
    product_code: number;
    product_name_web: string;
    ws_code: string;
    manufacturer: string;
    combination: string;
    b2b_category: string;
    b2c_category: string;
    is_discontinued: boolean;
    is_banned: boolean;
    is_hidden_from_alternate_products: boolean;
    mrp: number;
    sales_price: number;
    gst_type: string;
    last_sync_at: string;
    package_type: string;
    publish_status: string;
    is_active: boolean;
    is_zoho_sync: boolean;
    zoho_voucher_type: string;
    zoho_last_sync_at: Date;
    created_by: {
      id: number;
      name: string;
    };
    published_by: {
      id: number;
      name: string;
    };
  };
}
