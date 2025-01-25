import TableSearch from "@/components/TableSearch"; // Component for searching within the table
import Image from "next/image"; // Next.js Image component for optimized image rendering
import Pagination from "@/components/Pagination"; // Component for pagination
import Table from "@/components/Table"; // Table component for displaying data
import Link from "next/link"; // Next.js Link component for client-side navigation
import { role, studentsData } from "@/lib/data"; // Importing role and student data
import FormModal from "@/components/FormModal"; // Modal component for form operations (create/delete)

// Define the structure of a Student object
type Student = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone?: string;
  grade: string[];
  class: string;
  address: string;
};

// Define table columns with headers and accessors
const columns = [
  {
    header: "Info", // Header for student info (name and class)
    accessor: "info",
  },
  {
    header: "Student Id", // Header for student ID
    accessor: "studentid",
    className: "hidden md:table-cell", // Hidden on smaller screens
  },
  {
    header: "Grade", // Header for grade
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone", // Header for phone number
    accessor: "phone",
    className: "hidden lg:table-cell", // Hidden on medium screens
  },
  {
    header: "Address", // Header for address
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions", // Header for actions like view/delete
    accessor: "action",
  },
];

const StudentListPage = () => {
  // Function to render rows dynamically based on student data
  const renderRow = (item: Student) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      {/* Student Info (Photo, Name, and Class) */}
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photo}
          alt="Student Photo"
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item.class}</p>
        </div>
      </td>

      {/* Additional student details */}
      <td className="hidden md:table-cell">{item.studentId || "N/A"}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden md:table-cell">{item.phone || "No Phone"}</td>
      <td className="hidden md:table-cell">{item.address || "No Address"}</td>

      {/* Actions (View/Delete based on role) */}
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/students/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="View" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <FormModal table="student" type="delete" id={item.id} />
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white rounded-md flex-1 p-4 m-4 mt-0">
      {/* Top section with title, search, filter, and sort buttons */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold hidden md:block">All Students</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" width={14} height={14} alt="Filter" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" width={14} height={14} alt="Sort" />
            </button>
            {role === "admin" && (
              <FormModal table="student" type="create" />
            )}
          </div>
        </div>
      </div>

      {/* Student list table */}
      <div>
        <Table columns={columns} renderRow={renderRow} data={studentsData} />
      </div>

      {/* Pagination controls */}
      <div>
        <Pagination/>
      </div>
    </div>
  );
};

export default StudentListPage;
