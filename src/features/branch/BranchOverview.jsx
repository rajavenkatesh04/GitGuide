import React from "react";

const BranchOverview = () => {
  return (
    <section className="p-8 text-white">
      <h2 className="text-3xl font-semibold">Git Branching Overview</h2>
      <p className="mt-4">
        Git branching allows you to manage different versions of your codebase
        in parallel. This page will help you understand how to create, switch,
        and merge branches effectively.
      </p>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold">📖 What is a Git Branch?</h3>
        <p>
          A <strong>branch</strong> in Git is a separate line of development,
          allowing you to work on different features or fixes in isolation,
          without affecting the main codebase. Once you are done, you can{" "}
          <strong>merge</strong> the branch back into the main project.
        </p>
        <ul className="list-disc ml-6 mt-2">
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
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold">
          🛠️ Common Git Branch Commands
        </h3>

        {/* Scenario 1 */}
        <div className="mt-4">
          <h4 className="text-xl font-semibold">
            1. Listing Available Branches
          </h4>
          <p>To list all the branches in your repository, use:</p>
          <pre className="bg-gray-800 p-4 mt-2">
            <code>git branch</code>
          </pre>
          <p>To view both local and remote branches:</p>
          <pre className="bg-gray-800 p-4 mt-2">
            <code>git branch -a</code>
          </pre>
        </div>

        {/* Scenario 2 */}
        <div className="mt-6">
          <h4 className="text-xl font-semibold">2. Creating a New Branch</h4>
          <p>To create a new branch:</p>
          <pre className="bg-gray-800 p-4 mt-2">
            <code>git branch &lt;branch-name&gt;</code>
          </pre>
          <p>For example:</p>
          <pre className="bg-gray-800 p-4 mt-2">
            <code>git branch feature-xyz</code>
          </pre>
        </div>

        {/* Scenario 3 */}
        <div className="mt-6">
          <h4 className="text-xl font-semibold">
            3. Switching Between Branches
          </h4>
          <p>To switch to an existing branch:</p>
          <pre className="bg-gray-800 p-4 mt-2">
            <code>git checkout &lt;branch-name&gt;</code>
          </pre>
          <p>Example:</p>
          <pre className="bg-gray-800 p-4 mt-2">
            <code>git checkout feature-xyz</code>
          </pre>
          <p>For Git version 2.23 and above, you can also use:</p>
          <pre className="bg-gray-800 p-4 mt-2">
            <code>git switch &lt;branch-name&gt;</code>
          </pre>
        </div>

        {/* Scenario 4 */}
        <div className="mt-6">
          <h4 className="text-xl font-semibold">
            4. Creating and Switching to a New Branch
          </h4>
          <p>To create and immediately switch to a new branch:</p>
          <pre className="bg-gray-800 p-4 mt-2">
            <code>git checkout -b &lt;branch-name&gt;</code>
          </pre>
          <p>For example:</p>
          <pre className="bg-gray-800 p-4 mt-2">
            <code>git checkout -b feature-xyz</code>
          </pre>
          <p>Or with Git 2.23+:</p>
          <pre className="bg-gray-800 p-4 mt-2">
            <code>git switch -c &lt;branch-name&gt;</code>
          </pre>
        </div>

        {/* Add other scenarios similarly */}
      </div>

      {/* Conclusion */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold">✨ Conclusion</h3>
        <p>
          Git branches are a powerful tool that helps you manage your code
          changes efficiently. By using the commands outlined above, you can
          easily <strong>create, switch, rename, merge</strong>, and{" "}
          <strong>delete branches</strong>, keeping your workflow clean and
          organized.
        </p>
        <p>
          For further learning, check the official{" "}
          <a
            href="https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows"
            className="text-blue-500"
          >
            Git Branching documentation
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default BranchOverview;
