"use client";
import GridTable from "@/app/components/GridTable";
import { RootState } from "@/redux";
import { getProductList } from "@/redux/actions/productMasterAction/productMasterAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductMaster = () => {
  const columns = [
    { field: "product_code", headerName: "Product Code" },
    { field: "ws_code", headerName: "Wondersoft Code" },
    { field: "product_name", headerName: "Product Name" },
    { field: "manufacturer", headerName: "Manufacturer" },
    { field: "combination", headerName: "Combination" },
    { field: "publish_status", headerName: "Status" },
  ];
  // const TableItems = [
  //   {
  //     productCode: "23575",
  //     wondersoftCode: "23575",
  //     productName: "atorvaa",
  //     manufacturer: "SUN PHARMA",
  //     combination: "CIRCUMIN",
  //     status: "published",
  //   },
  //   {
  //     productCode: "11213",
  //     wondersoftCode: "11213",
  //     productName: "asdarwq1321",
  //     manufacturer: "wadsa dadsa",
  //     combination: "CIRCUMIN",
  //     status: "published",
  //   },
  // ];

  const dispatch = useDispatch();
  const { productList } = useSelector((state: RootState) => state?.product);

  useEffect(() => {
    dispatch(getProductList(1));
  }, [dispatch]);

  // console.log("productList", productList.products);
  // return <h1>hi</h1>;

  const handlePageChange = (page: number) => {
    console.log("page", page);
    dispatch(getProductList(page));
    // console.log("newproducts", productList);
  };
  return (
    <GridTable
      columns={columns}
      tableItems={productList.products ?? []}
      pagination={productList.meta}
      onPageChange={handlePageChange}
    />
  );
};

export default ProductMaster;
