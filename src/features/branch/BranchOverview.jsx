import React from "react";

const GitBranchingBasics = () => {
  return (
    <div className="text-white px-2 sm:px-4 md:px-8 lg:px-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        Git Branching Basics 🌿
      </h1>

      <section className="mb-8 bg-gray-900/30 rounded-lg p-3 sm:p-5">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">
          📖 What is a Git Branch?
        </h2>
        <hr className="border-t-2 border-white/20 mb-4 mx-4 sm:mx-8" />
        <p className="text-sm sm:text-base mb-4">
          A <strong>branch</strong> in Git is a separate line of development,
          allowing you to work on different features or fixes in isolation,
          without affecting the main codebase. Once you are done, you can{" "}
          <strong>merge</strong> the branch back into the main project.
        </p>
        <ul className="list-disc pl-4 space-y-3 text-sm sm:text-base">
          <li>
            🚀 <strong>Work on features independently.</strong>
          </li>
          <li>
            🔄 <strong>Manage different environments</strong> (e.g.,
            development, production).
          </li>
          <li>
            🧹 <strong>Keep your repository clean</strong> and organized by
            isolating work.
          </li>
        </ul>
      </section>

      <section className="mb-8 bg-gray-900/30 rounded-lg p-3 sm:p-5">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">
          🛠️ Common Git Branch Commands
        </h2>
        <hr className="border-t-2 border-white/20 mb-4 mx-4 sm:mx-8" />

        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-lg sm:text-xl mb-2">
              1. Listing Available Branches
            </h3>
            <p className="text-sm sm:text-base mb-2">
              To list all the branches in your repository, use:
            </p>
            <pre className="bg-gray-800 p-3 sm:p-4 rounded-lg text-sm sm:text-base overflow-x-auto">
              <code>git branch</code>
            </pre>
            <p className="text-sm sm:text-base mt-2">
              To view both local and remote branches:
            </p>
            <pre className="bg-gray-800 p-3 sm:p-4 rounded-lg text-sm sm:text-base overflow-x-auto">
              <code>git branch -a</code>
            </pre>
          </div>

          <div>
            <h3 className="font-medium text-lg sm:text-xl mb-2">
              2. Creating a New Branch
            </h3>
            <p className="text-sm sm:text-base mb-2">To create a new branch:</p>
            <pre className="bg-gray-800 p-3 sm:p-4 rounded-lg text-sm sm:text-base overflow-x-auto">
              <code>git branch &lt;branch-name&gt;</code>
            </pre>
            <p className="text-sm sm:text-base mt-2">For example:</p>
            <pre className="bg-gray-800 p-3 sm:p-4 rounded-lg text-sm sm:text-base overflow-x-auto">
              <code>git branch feature-xyz</code>
            </pre>
            <p className="text-sm sm:text-base mt-2">
              This creates a new branch called <code>feature-xyz</code>, but
              you're still on your current branch.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg sm:text-xl mb-2">
              3. Switching Between Branches
            </h3>
            <p className="text-sm sm:text-base mb-2">
              To switch to an existing branch:
            </p>
            <pre className="bg-gray-800 p-3 sm:p-4 rounded-lg text-sm sm:text-base overflow-x-auto">
              <code>git checkout &lt;branch-name&gt;</code>
            </pre>
            <p className="text-sm sm:text-base mt-2">Example:</p>
            <pre className="bg-gray-800 p-3 sm:p-4 rounded-lg text-sm sm:text-base overflow-x-auto">
              <code>git checkout feature-xyz</code>
            </pre>
            <p className="text-sm sm:text-base mt-2">
              For Git version 2.23 and above, you can also use:
            </p>
            <pre className="bg-gray-800 p-3 sm:p-4 rounded-lg text-sm sm:text-base overflow-x-auto">
              <code>git switch &lt;branch-name&gt;</code>
            </pre>
          </div>

          <div>
            <h3 className="font-medium text-lg sm:text-xl mb-2">
              4. Renaming a Branch
            </h3>
            <p className="text-sm sm:text-base mb-2">
              To rename your current branch:
            </p>
            <pre className="bg-gray-800 p-3 sm:p-4 rounded-lg text-sm sm:text-base overflow-x-auto">
              <code>git branch -m &lt;new-branch-name&gt;</code>
            </pre>
            <p className="text-sm sm:text-base mt-2">
              To rename a branch when not checked out:
            </p>
            <pre className="bg-gray-800 p-3 sm:p-4 rounded-lg text-sm sm:text-base overflow-x-auto">
              <code>
                git branch -m &lt;old-branch-name&gt; &lt;new-branch-name&gt;
              </code>
            </pre>
          </div>

          <div>
            <h3 className="font-medium text-lg sm:text-xl mb-2">
              5. Deleting a Branch
            </h3>
            <p className="text-sm sm:text-base mb-2">
              To delete a merged branch:
            </p>
            <pre className="bg-gray-800 p-3 sm:p-4 rounded-lg text-sm sm:text-base overflow-x-auto">
              <code>git branch -d &lt;branch-name&gt;</code>
            </pre>
            <p className="text-sm sm:text-base mt-2">
              To force delete an unmerged branch:
            </p>
            <pre className="bg-gray-800 p-3 sm:p-4 rounded-lg text-sm sm:text-base overflow-x-auto">
              <code>git branch -D &lt;branch-name&gt;</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-8 bg-gray-900/30 rounded-lg p-3 sm:p-5">
        <h3 className="font-medium text-lg sm:text-xl mb-4">💡 Pro Tips</h3>
        <ul className="list-disc pl-4 space-y-3 text-sm sm:text-base">
          <li>Always create a new branch for new features or fixes.</li>
          <li>Keep your branches small and focused.</li>
          <li>Regularly merge or rebase to keep branches up to date.</li>
          <li>Use meaningful and descriptive branch names.</li>
          <li>
            Use{" "}
            <code className="bg-gray-800 px-2 rounded text-xs sm:text-sm">
              git status
            </code>{" "}
            to check branch and working directory status.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default GitBranchingBasics;
