const Analytics = () => {
  return (
    <div className="py-8 md:py-12 px-4 flex flex-col gap-12">
      {/* Total Records */}
      <div className="bg-white border-[1px] border-slate-200 rounded-lg p-4">
        <h2 className="text-2xl">No record found</h2>
      </div>

      {/* Recent Test Results */}
      <div className="px-4 flex flex-col gap-2">
        {/* Title */}
        <div className="text-3xl font-bold text-slate-800">
          <h2>Recent Test Results</h2>
        </div>

        {/* Recent Test List */}
        <div className="bg-white border-[1px] border-slate-200 rounded-lg px-6 py-4">
          <h2 className="text-lg font-medium">No Recent Test Found</h2>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
