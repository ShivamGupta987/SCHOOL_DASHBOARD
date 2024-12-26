import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Link from "next/link";
import { parentsData, role } from "@/lib/data";
import FormModal from "@/components/FormModal";
type Parent = {
  id: number;
  name: string;
  students: string[];
  phone: string;
  email?:string;
  address: string;
};
const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student Names",
    accessor: "studentnames",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const ParentListPage = () => {
  const renderRow = (item: Parent) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">
   
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.students.join(",") || "N/A"}</td>
      <td className="hidden md:table-cell">{item.phone || "No Phone"}</td>
      <td className="hidden md:table-cell">{item.address || "No Address"}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/edit.png" alt="View" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <>
              <FormModal table=
            "parent" type="update" data={item.id}/>
            <FormModal table=
            "parent" type="delete" data={item.id}/>
            </>
          
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white rounded-md flex-1 p-4 m-4 mt-0 ">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold hidden md:block">All Parents</h1>
        <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" width={14} height={14} alt="" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" width={14} height={14} alt="" />
            </button>
            {role === "admin" && (

            <FormModal table=
            "parent" type="create" />
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <div className="">
        <Table columns={columns} renderRow={renderRow} data={parentsData} />
      </div>
      {/* PAGINATION */}
      <div className="">
        <Pagination />
      </div>
    </div>
  );
};

export default ParentListPage;
