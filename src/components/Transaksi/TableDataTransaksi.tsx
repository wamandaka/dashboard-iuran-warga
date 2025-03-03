import { Transaksi } from "../../types/transaksi";

const TableDataTransaksi = ({
  dataTransaksi,
}: {
  dataTransaksi: Transaksi[];
}) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                Nama
              </th>
              <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                Jumlah
              </th>
              <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                Tanggal Transaksi
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-gray-500">
            {dataTransaksi.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-2 md:min-w-[300px]">{item.nama}</td>
                <td className="px-4 py-2 md:min-w-[300px]">{item.jumlah}</td>
                <td className="px-4 py-2 md:min-w-[300px]">{item.tanggal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableDataTransaksi;
