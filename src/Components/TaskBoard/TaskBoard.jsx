const TaskBoard = () => {
  return (
    <div className="container mx-auto p-6">
    <div className='text-center  py-4'>
    <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-full max-w-xs border rounded-3xl px-3 py-2 border-gray-400 focus:ring focus:ring-blue-200 text-black"
            />
        <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 ml-2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Add Task</button>
    </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* To-Do Section */}
        <div
          className="bg-white p-6 rounded-lg shadow-md min-h-[400px] flex flex-col"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center bg-gray-600 p-4 text-white rounded-xl">
            To-Do
          </h2>
          <div className="flex-1 space-y-4">
            <div className="p-4 bg-gray-200 rounded-md text-center">
              Sample Task
            </div>
          </div>
          
        </div>

        {/* In Progress Section */}
        <div
          className="bg-white p-6 rounded-lg shadow-md min-h-[400px] flex flex-col"
        >
          <h2 className="text-2xl font-roboto font-semibold mb-4 text-center bg-fuchsia-600 p-4 rounded-xl text-white">
            In Progress
          </h2>
          <div className="flex-1 space-y-4">
            <div className="p-4 bg-gray-200 rounded-md text-center">
              Sample Task
            </div>
          </div>
        </div>

        {/* Done Section */}
        <div
          className="bg-white p-6 rounded-lg shadow-md min-h-[400px] flex flex-col"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center bg-green-500 p-4 rounded-xl text-white">
            Done
          </h2>
          <div className="flex-1 space-y-4">
            <div className="p-4 bg-gray-200 rounded-md text-center">
              Sample Task
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;
