import React from "react";

const GitScenarios = () => {
  return (
    <div className="text-white px-2 sm:px-4 md:px-8 lg:px-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        Git Scenarios 🛠️
      </h1>

      {/* Scenario 1 */}
      <section className="mb-8 bg-gray-900/30 rounded-lg p-3 sm:p-5 hidden md:block">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">
          Scenario 1: Sync Local Changes to Remote Repository 🌍
        </h2>
        <hr className="border-t-2 border-white/20 mb-4 mx-4 sm:mx-8" />
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-lg sm:text-xl mb-2">Problem:</h3>
            <p className="text-sm sm:text-base">
              You've got some awesome changes in your local project, but they
              haven't made it to your GitHub repository. Let's fix that! 😅
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg sm:text-xl mb-2">
              Steps to Resolve:
            </h3>
            <pre className="bg-gray-800 p-3 sm:p-4 rounded-lg text-sm sm:text-base overflow-x-auto">
              {`
# Step 1: Check your current branch
$ git branch
# Is this the branch you want? You should probably know, right? 😉

# Step 2: Make sure you're on the correct branch (e.g., main)
$ git checkout main
# Because you don't want to be pushing updates to "home-branch" while thinking you're in "main." 😬

# Step 3: Add and commit your amazing changes!
$ git add . 
$ git commit -m "Updated local content with some awesome sauce!"
# Make sure the commit message is as cool as your code. 😎

# Step 4: Pull the latest changes from the remote (because we all love fresh updates)
$ git pull origin main
# Don't want to push and cause conflicts, do we? We're here to make peace, not war. ✌️

# Step 5: Push your updated changes to the remote repository
$ git push origin main
# Now your repo is up-to-date, and your changes are flying to the cloud! ☁️🚀
              `}
            </pre>
          </div>
        </div>
      </section>

      {/* Mobile-friendly Scenario 1 */}
      <section className="mb-8 md:hidden">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">
          Scenario 1: Sync Local Changes to Remote Repository 🌍
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-lg sm:text-xl mb-2">Problem:</h3>
            <p className="text-sm sm:text-base">
              You've got some awesome changes in your local project, but they
              haven't made it to your GitHub repository. Let's fix that! 😅
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg sm:text-xl mb-2">
              Steps to Resolve:
            </h3>
            <pre className="bg-gray-800 p-3 rounded-lg text-sm sm:text-base overflow-x-auto">
              {`
# Step 1: Check branch
$ git branch

# Step 2: Switch to main branch
$ git checkout main

# Step 3: Add and commit changes
$ git add . 
$ git commit -m "Updated content"

# Step 4: Pull latest changes
$ git pull origin main

# Step 5: Push to remote repository
$ git push origin main
              `}
            </pre>
          </div>
        </div>
      </section>

      {/* Scenario 2 */}
      <section className="mb-8 bg-gray-900/30 rounded-lg p-3 sm:p-5 hidden md:block">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">
          Scenario 2: Merging Two Branches 🔀
        </h2>
        <hr className="border-t-2 border-white/20 mb-4 mx-4 sm:mx-8" />
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-lg sm:text-xl mb-2">Problem:</h3>
            <p className="text-sm sm:text-base">
              You've been working hard on `home-branch`, and now it's time to
              merge all that hard work into `main`. Let's get them together! 💏
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg sm:text-xl mb-2">
              Steps to Resolve:
            </h3>
            <pre className="bg-gray-800 p-3 sm:p-4 rounded-lg text-sm sm:text-base overflow-x-auto">
              {`
# Step 1: Check your current branch
$ git branch
# Are you sure you're not still in the wrong branch? 😅 Double-check!

# Step 2: Switch to the main branch
$ git checkout main
# Home is where the main branch is. 🏠

# Step 3: Get the latest updates from the remote repository
$ git pull origin main
# Gotta make sure your main branch is fresh and up-to-date! 🥖

# Step 4: Merge home-branch into main
$ git merge home-branch
# Here comes the magic—merging the best parts! ✨

# Step 5: Resolve conflicts if necessary
# - Open conflicting files and make things right. It's like a relationship; sometimes you need to compromise. 💔➡️❤️
$ git add <file>

# Commit the changes to finalize the merge
$ git commit
# Celebrate, you've made peace between your branches! 🎉

# Step 6: Push the updated main branch to the remote repository
$ git push origin main
# Everything's merged, and your repo is looking perfect! 😁
              `}
            </pre>
          </div>
        </div>
      </section>

      {/* Mobile-friendly Scenario 2 */}
      <section className="mb-8 md:hidden">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">
          Scenario 2: Merging Two Branches 🔀
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-lg sm:text-xl mb-2">Problem:</h3>
            <p className="text-sm sm:text-base">
              You've been working hard on `home-branch`, and now it's time to
              merge all that hard work into `main`. Let's get them together! 💏
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg sm:text-xl mb-2">
              Steps to Resolve:
            </h3>
            <pre className="bg-gray-800 p-3 rounded-lg text-sm sm:text-base overflow-x-auto">
              {`
# Step 1: Check current branch
$ git branch

# Step 2: Switch to main branch
$ git checkout main

# Step 3: Pull latest updates
$ git pull origin main

# Step 4: Merge home-branch
$ git merge home-branch

# Step 5: Resolve conflicts
$ git add <file>
$ git commit

# Step 6: Push to remote repository
$ git push origin main
              `}
            </pre>
          </div>
        </div>
      </section>

      {/* Scenario 3 */}
      <section className="mb-8 bg-gray-900/30 rounded-lg p-3 sm:p-5 hidden md:block">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">
          Scenario 3: Adding a Cloud Repository ☁️
        </h2>
        <hr className="border-t-2 border-white/20 mb-4 mx-4 sm:mx-8" />
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-lg sm:text-xl mb-2">Problem:</h3>
            <p className="text-sm sm:text-base">
              You have a repository on GitHub, but you don't have it on your
              local machine yet. You want to clone it to work locally.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg sm:text-xl mb-2">
              Steps to Resolve:
            </h3>
            <pre className="bg-gray-800 p-3 sm:p-4 rounded-lg text-sm sm:text-base overflow-x-auto">
              {`
# Step 1: Navigate to project directory
$ cd path/to/directory

# Step 2: Copy repo URL from GitHub

# Step 3: Clone the repository
$ git clone https://github.com/username/repo.git

# Step 4: Enter project directory
$ cd your-repository

# Step 5: Check remote connection
$ git remote -v

# Step 6: Start working
$ git add . 
$ git commit -m "Initial changes"
$ git push origin main
              `}
            </pre>
          </div>
        </div>
      </section>

      {/* Mobile-friendly Scenario 3 */}
      <section className="mb-8 md:hidden">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">
          Scenario 3: Adding a Cloud Repository ☁️
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-lg sm:text-xl mb-2">Problem:</h3>
            <p className="text-sm sm:text-base">
              You have a repository on GitHub, but you don't have it on your
              local machine yet. You want to clone it to work locally.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg sm:text-xl mb-2">
              Steps to Resolve:
            </h3>
            <pre className="bg-gray-800 p-3 rounded-lg text-sm sm:text-base overflow-x-auto">
              {`
# Step 1: Navigate to project directory
$ cd path/to/directory

# Step 2: Clone repository
$ git clone https://github.com/username/repo.git

# Step 3: Enter project directory
$ cd your-repository

# Step 4: Check remote connection
$ git remote -v

# Step 5: Start working
$ git add . 
$ git commit -m "Initial changes"
$ git push origin main
              `}
            </pre>
          </div>
        </div>
      </section>

      {/* Additional Notes */}
      <section className="mb-8 bg-gray-900/30 rounded-lg p-3 sm:p-5">
        <h3 className="font-medium text-lg sm:text-xl mb-4">
          Additional Notes 📝:
        </h3>
        <ul className="list-disc pl-4 space-y-3 text-sm sm:text-base">
          <li>
            Ensure local branches are up-to-date before changes or merging.
          </li>
          <li>
            Use{" "}
            <code className="bg-gray-800 px-2 rounded text-xs sm:text-sm">
              git status
            </code>{" "}
            to check working directory.
          </li>
          <li>Carefully resolve any conflicts before proceeding.</li>
          <li>
            <strong>Cloning</strong> is easiest to start with a project.
          </li>
          <li>
            <strong>HTTPS vs. SSH:</strong> HTTPS is simpler, SSH is more
            secure.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default GitScenarios;
