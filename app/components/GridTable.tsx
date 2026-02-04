export interface PaginationMeta {
  current_page: number;
  per_page: number;
  last_page: number;
  total: number;
  current_page_record: number;
}

interface Props {
  columns: any[];
  tableItems: any[];
  pagination?: PaginationMeta;
  onPageChange?: (newPage: number) => void;
}
const GridTable = ({
  columns,
  tableItems,
  pagination,
  onPageChange,
}: Props) => {
  const handlePageChange = (newPage: number) => {
    if (
      onPageChange &&
      pagination &&
      newPage >= 1 &&
      newPage <= pagination.last_page
    ) {
      onPageChange(newPage);
    }
  };
  return (
    <div>
      <div className="flex justify-center ">
        <table className="table-fixed w-full content-center">
          <thead>
            <tr className="border border-zinc-700 bg-gray-200 text-zinc-800">
              {columns.map((item: any, idx: number) => {
                return (
                  <th className="p-2" key={idx}>
                    {item.headerName}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {tableItems.length > 0 &&
              tableItems?.map((item: any, idx: number) => {
                return (
                  <tr
                    className="border border-zinc-700 bg-white text-zinc-800"
                    key={idx}
                  >
                    {columns.map((colitem: any, indx: number) => {
                      return (
                        <td className="p-2 truncate text-center" key={indx}>
                          {item[colitem.field]}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      {pagination && (
        <div className="flex justify-between items-center mt-4 px-2">
          <div className="text-sm text-gray-600">
            Showing page{" "}
            <span className="font-bold">{pagination.current_page}</span> of{" "}
            <span className="font-bold">{pagination.last_page}</span> (Total:{" "}
            {pagination.total})
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => handlePageChange(pagination.current_page - 1)}
              disabled={pagination.current_page === 1}
              className="px-4 py-2 text-sm border rounded bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer text-gray-700"
            >
              Previous
            </button>

            <button
              onClick={() => handlePageChange(pagination.current_page + 1)}
              disabled={pagination.current_page === pagination.last_page}
              className="px-4 py-2 text-sm border rounded bg-white hover:bg-gray-100 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-gray-700"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GridTable;
