import React from "react";
import { Construction, GitPullRequest } from "lucide-react";

export default function GitPush() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  px-4 py-8">
      <div className="max-w-md w-full bg-white shadow-xl rounded-xl p-8 text-center">
        <Construction className="mx-auto mb-6 text-yellow-500" size={80} />
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Feature Coming Soon
        </h1>
        <div className="flex items-center justify-center mb-6">
          <GitPullRequest className="mr-2 text-blue-500" size={24} />
          <p className="text-gray-600">Git Pull Functionality</p>
        </div>
        <p className="text-gray-500 mb-6">
          We're actively working on implementing the Git Push feature. Check
          back soon for updates and new capabilities!
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
          <p className="text-yellow-700 text-sm">
            ⚠️ This page is currently under development and not fully
            functional.
          </p>
        </div>
      </div>
    </div>
  );
}
