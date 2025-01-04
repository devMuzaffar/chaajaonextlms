const StatusCell = ({ status }) => {

  const statusText = status.toLowerCase();
  const displayText = statusText[0].toUpperCase() + statusText.slice(1);

  const styleCondition =
  statusText === "verified"
      ? "bg-green-100 text-green-400"
      : statusText === "rejected"
      ? "bg-red-100 text-red-400"
      : "bg-blue-100 text-blue-400";

  return (
    <div className="flex items-center justify-center h-full">
      <p
        className={`rounded-lg text-sm px-4 py-2 font-semibold ${styleCondition}`}
      >
        {displayText}
      </p>
    </div>
  );
};

export default StatusCell;
