import { get } from "@/redux/apiWrapper";
export const getProductListApi = (page: number) => {
  return get(
    `/master/products/unpublished?is_assured=No&is_refrigerated=No&is_special_molecule=No&publish_status=Published&manufacturer=2709&sort_by=created,d&page=${page}`,
  );
};
