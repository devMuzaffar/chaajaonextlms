const Payments = () => {
  return (
    <div className="py-8 md:py-12 px-4 flex flex-col gap-12">
      {/* Title */}
      <div className="text-3xl font-bold text-slate-800">
        <h2>Payments</h2>
      </div>

      {/* Total Records */}
      <div className="bg-white border-[1px] border-slate-200 rounded-lg p-4">
        <h2 className="text-2xl">No payments found</h2>
      </div>
    </div>
  );
};

export default Payments;
