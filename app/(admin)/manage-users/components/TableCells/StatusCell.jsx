const StatusCell = ({ status }) => {
  const styleCondition =
    status === true
      ? "bg-green-100 text-green-400"
      : status === false
      ? "bg-red-100 text-red-400"
      : "bg-blue-100 text-blue-400";

  const textCondition =
    status === true ? "Verified" : status === false ? "Rejected" : "Pending";

  return (
    <div className="flex items-center justify-center h-full">
      <p
        className={`rounded-lg text-sm px-4 py-2 font-semibold ${styleCondition}`}
      >
        {textCondition}
      </p>
    </div>
  );
};

export default StatusCell;
