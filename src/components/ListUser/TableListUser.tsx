// import { HiCheckCircle } from "react-icons/hi2";
import { ListUser } from "../../types/listUser";

const TableListUser = ({ dataListUser }: { dataListUser: ListUser[] }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200">
          <thead className="ltr:text-left rtl:text-right">
            <tr className="*:font-medium *:text-gray-900">
              <th className="px-3 py-2 whitespace-nowrap">Nama</th>
              <th className="px-3 py-2 whitespace-nowrap">Email</th>
              <th className="px-3 py-2 whitespace-nowrap">Alamat</th>
              <th className="px-3 py-2 whitespace-nowrap">No HP</th>
              <th className="px-3 py-2 whitespace-nowrap">Status</th>
              <th className="px-3 py-2 whitespace-nowrap">RT</th>
              <th className="px-3 py-2 whitespace-nowrap">RW</th>
              <th className="px-3 py-2 whitespace-nowrap">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-gray-500">
            {dataListUser.map((item) => (
              <tr key={item.id}>
                <td className="px-3 py-2 whitespace-nowrap">{item.nama}</td>
                <td className="px-3 py-2 whitespace-nowrap">{item.email}</td>
                <td className="px-3 py-2 whitespace-nowrap">{item.alamat}</td>
                <td className="px-3 py-2 whitespace-nowrap">{item.no_hp}</td>
                <td className="px-3 py-2 whitespace-nowrap">
                  {item.status === "waiting" ? (
                    <span className="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700 gap-1">
                      <span className="w-1.5 h-1.5 animate-pulse bg-amber-500 rounded-full"></span>
                      <p className="text-sm whitespace-nowrap">Waiting</p>
                    </span>
                  ) : item.status === "approved" ? (
                    <span className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700 gap-1">
                      {/* <span>
                        <HiCheckCircle />
                      </span> */}
                      <p className="text-sm whitespace-nowrap">Approved</p>
                    </span>
                  ) : (
                    <span className="inline-flex items-center justify-center rounded-full bg-red-100 px-2.5 py-0.5 text-red-700">
                      <p className="text-sm whitespace-nowrap">Rejected</p>
                    </span>
                  )}
                </td>
                <td className="px-3 py-2 whitespace-nowrap">{item.rt}</td>
                <td className="px-3 py-2 whitespace-nowrap">{item.rw}</td>
                <td className="px-3 py-2 whitespace-nowrap">Actions</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableListUser;
