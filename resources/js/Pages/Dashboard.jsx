import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({
  auth,
  totalPendingTasks,
  totalProgressTasks,
  totalCompletedTasks,
  message
}) {

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-3 gap-2">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-amber-500 text-2xl font-semibold">
                Pending Tasks
              </h3>
              <p className="text-xl mt-4">
               <span className="ml-2">{totalPendingTasks}</span>
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-blue-500 text-2xl font-semibold">
                In Progress Tasks
              </h3>
              <p className="text-xl mt-4">
                <span className="ml-2">{totalProgressTasks}</span>
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-green-500 text-2xl font-semibold">
                Completed Tasks
              </h3>
              <p className="text-xl mt-4">

                <span className="ml-2">{totalCompletedTasks}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
           
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}