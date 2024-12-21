import Image from "next/image";

const Announcement = () => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Announcements</h1>
      </div>
      <div className="flex flex-col gap-6 mt-4">
        {/* Announcement 1 */}
        <div className="bg-blue-100 rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-gray-800">
              Important update regarding upcoming event schedules.
            </h2>
            <span className="text-xs text-gray-500 bg-white rounded-md px-2 py-1">
              2025-01-01
            </span>
          </div>
        </div>
        {/* Announcement 2 */}
        <div className="bg-green-100 rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-gray-800">
              New feature rollout: Enhanced user dashboard.
            </h2>
            <span className="text-xs text-gray-500 bg-white rounded-md px-2 py-1">
              2025-01-10
            </span>
          </div>
        </div>
        {/* Announcement 3 */}
        <div className="bg-yellow-100 rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-gray-800">
              Maintenance scheduled: Service downtime notice.
            </h2>
            <span className="text-xs text-gray-500 bg-white rounded-md px-2 py-1">
              2025-01-15
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
