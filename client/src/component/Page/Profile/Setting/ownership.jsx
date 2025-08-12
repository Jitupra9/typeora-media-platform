import React, { memo, useState } from "react";
import InputField from "./InputField";
import { AlertCircle } from "lucide-react";
function ownership() {
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Change Account Email
        </h2>
        <div className="space-y-4">
          <InputField
            label="Current Email"
            type="email"
            value="user@example.com"
            disabled
          />
          <InputField
            label="New Email"
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="Enter new email address"
          />
          <button className="w-full sm:w-auto px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm font-medium transition-colors">
            Change Email
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Change Phone Number
        </h2>
        <div className="space-y-4">
          <InputField
            label="Current Phone"
            type="tel"
            value="+1 (555) 123-4567"
            disabled
          />
          <InputField
            label="New Phone Number"
            type="tel"
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value)}
            placeholder="Enter new phone number"
          />
          <button className="w-full sm:w-auto px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm font-medium transition-colors">
            Change Phone
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Transfer Account Ownership
        </h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Transferring ownership will make another user the admin of this
              account. You will become a regular member. This action cannot be
              undone.
            </p>
          </div>
          <InputField
            label="Transfer to User"
            type="text"
            placeholder="Enter username or email"
          />
          <button className="w-full sm:w-auto px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-colors">
            Transfer Ownership
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(ownership);
