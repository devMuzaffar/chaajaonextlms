"use client";
import UsersTable from "./components/UsersTable";
import Button from "./components/Button";
import { useState } from "react";
import AddUser from "./components/AddUser";

const ManageUsers = () => {
  // Add User Modal state
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);

  return (
    <div className="flex flex-col px-2 gap-6 py-8">
      {/* Title */}
      <h2 className="font-semibold text-2xl px-2 pb-6">Manage Users</h2>

      {/* Container */}
      <div className="space-y-4">
        {/* Add Button */}
        <div className="w-full flex justify-start md:justify-end">
          <Button className="md:w-48" onClick={openModal}>
            Add User
          </Button>
        </div>

        {/* Table */}
        <div className="w-full h-full bg-white">
          <UsersTable />
        </div>
      </div>

      {/* Add User Modal */}
      <AddUser open={isOpen} setOpen={setIsOpen} />
    </div>
  );
};

export default ManageUsers;
