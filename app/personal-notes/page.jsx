const PersonalNotes = () => {
  return (
    <div className="py-8 md:py-12 px-4 flex flex-col gap-4">
      {/* Title */}
      <div className="text-3xl font-bold">
        <h2>Personal Notes</h2>
      </div>

      {/* Notes */}
      <div className="font-semibold">
        <p>0 Lectures</p>
      </div>
    </div>
  );
};

export default PersonalNotes;
