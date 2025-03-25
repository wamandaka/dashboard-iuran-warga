import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";
import { Warga } from "../../types/warga";

const TableDataWarga = ({
  currentItems,
  onEdit,
  deleteWarga,
}: {
  currentItems: Warga[];
  onEdit: (warga: Warga) => void;
  deleteWarga: (id: number) => void;
}) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="px-4 py-2 font-medium min-w-[200px] text-gray-900">
                Nama
              </th>
              <th className="px-4 py-2 font-medium min-w-[200px] text-gray-900">
                Alamat
              </th>
              <th className="px-4 py-2 font-medium min-w-[200px] text-gray-900">
                No HP
              </th>
              <th className="px-4 py-2 font-medium min-w-[200px] text-gray-900">
                No Kartu Keluarga
              </th>
              <th className="px-4 py-2 font-medium min-w-[200px] text-gray-900">
                Biaya Kebersihan
              </th>
              <th className="px-4 py-2 font-medium min-w-[200px] text-gray-900">
                Biaya Keamanan
              </th>
              <th className="px-4 py-2 font-medium min-w-[200px] text-gray-900">
                Infaq
              </th>
              <th className="px-4 py-2">Aksi</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-gray-500">
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-2 min-w-[200px]">{item.nama}</td>
                <td className="px-4 py-2 min-w-[250px]">{item.alamat}</td>
                <td className="px-4 py-2 min-w-[200px]">{item.noHp}</td>
                <td className="px-4 py-2 min-w-[200px]">{item.noKK}</td>
                <td className="px-4 py-2 min-w-[200px]">
                  {item.biayaKebersihan}
                </td>
                <td className="px-4 py-2 min-w-[200px]">
                  {item.biayaKeamanan}
                </td>
                <td className="px-4 py-2 min-w-[200px]">{item.infaq}</td>
                <td className="px-4 py-2 whitespace-nowrap space-x-4">
                  <button
                    onClick={() => deleteWarga(item.id)}
                    className="cursor-pointer"
                  >
                    <HiOutlineTrash size={20} />
                  </button>
                  <button
                    onClick={() => onEdit(item)}
                    className="cursor-pointer"
                  >
                    <HiOutlinePencil size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableDataWarga;
