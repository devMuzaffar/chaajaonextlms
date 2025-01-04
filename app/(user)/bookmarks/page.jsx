const Bookmarks = () => {
  return (
    <div className="py-8 md:py-12 px-4 flex flex-col gap-10">

      <div className="flex flex-col gap-2">

        {/* Title */}
        <div className="text-3xl font-bold text-slate-800">
          <h2>Bookmarks</h2>
        </div>

        {/* Search Bar */}
        <div className="bg-white border-[1px] border-slate-200 rounded-lg p-6">
          <input
            className="w-full outline-none text-lg text-slate-500 placeholder:text-slate-300"
            placeholder="Search..."
            type="text"
          />
        </div>
      </div>

      {/* Available Bookmarks */}
      <div>
        <div className="bg-white border-[1px] border-slate-200 rounded-lg p-4">
          <h2 className="text-xl">No Bookmarks Available</h2>
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
