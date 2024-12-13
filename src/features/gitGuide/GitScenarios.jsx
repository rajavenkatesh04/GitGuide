import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Scenario = ({ title, problem, steps, isMobile }) => (
  <section
    className={`mb-8 bg-gray-900/30 rounded-lg p-3 sm:p-5 scenario-item ${
      !isMobile ? "hidden md:block" : "md:hidden"
    }`}
  >
    <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">
      {title}
    </h2>
    <hr className="border-t-2 border-white/20 mb-4 mx-4 sm:mx-8" />
    <div className="space-y-4">
      <div>
        <h3 className="font-medium text-lg sm:text-xl mb-2">Problem:</h3>
        <p className="text-sm sm:text-base">{problem}</p>
      </div>
      <div>
        <h3 className="font-medium text-lg sm:text-xl mb-2">
          Steps to Resolve:
        </h3>
        <pre className="bg-gray-800 p-3 sm:p-4 rounded-lg text-sm sm:text-base overflow-x-auto">
          {steps}
        </pre>
      </div>
    </div>
  </section>
);

const GitScenarios = () => {
  const mainTitleRef = useRef(null);
  const scenariosRef = useRef([]);
  const additionalNotesRef = useRef(null);

  useEffect(() => {
    // Animate main title
    gsap.fromTo(
      mainTitleRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );

    // Animate scenarios with scroll trigger
    scenariosRef.current.forEach((scenario, index) => {
      gsap.fromTo(
        scenario,
        {
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100,
          scale: 0.9,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: scenario,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animate additional notes
    gsap.fromTo(
      additionalNotesRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: additionalNotesRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const scenarios = [
    {
      title: "Scenario 1: Sync Local Changes to Remote Repository 🌍",
      problem: `You've got some awesome changes in your local project, but they haven't made it to your GitHub repository. Let's fix that! 😅`,
      steps: `
# Step 1: Check your current branch
$ git branch

# Step 2: Switch to the main branch
$ git checkout main

# Step 3: Add and commit changes
$ git add .
$ git commit -m "Updated local content with some awesome sauce!"

# Step 4: Pull latest changes from remote
$ git pull origin main

# Step 5: Push to remote repository
$ git push origin main
`,
    },
    {
      title: "Scenario 2: Merging Two Branches 🔀",
      problem: `You've been working hard on 'home-branch', and now it's time to merge all that hard work into 'main'. Let's get them together! 💏`,
      steps: `
# Step 1: Check your current branch
$ git branch

# Step 2: Switch to the main branch
$ git checkout main

# Step 3: Pull latest updates from remote
$ git pull origin main

# Step 4: Merge home-branch into main
$ git merge home-branch

# Step 5: Resolve conflicts if necessary
$ git add <file>
$ git commit

# Step 6: Push the updated main branch to the remote repository
$ git push origin main
`,
    },
    {
      title: "Scenario 3: Adding a Cloud Repository ☁️",
      problem: `You have a repository on GitHub, but you don't have it on your local machine yet. You want to clone it to work locally and start pushing commits.`,
      steps: `
# Step 1: Navigate to project directory
$ cd path/to/directory

# Step 2: Initialise git if not already done
$ git init

# Step 3:Link local Repository to remote cloud repository
$ git remote add origin your-repo-link-here

# Step 4: Check remote connection
$ git remote -v

# Step 5: Start working
$ git add . 
$ git commit -m "Initial changes"
$ git push origin main
`,
    },
  ];

  return (
    <div className="text-white px-2 sm:px-4 md:px-8 lg:px-16">
      <h1
        ref={mainTitleRef}
        className="text-3xl sm:text-4xl font-bold mb-8 text-center"
      >
        Git Scenarios 🛠️
      </h1>

      {scenarios.map((scenario, index) => (
        <React.Fragment key={index}>
          <div ref={(el) => (scenariosRef.current[index * 2] = el)}>
            <Scenario
              title={scenario.title}
              problem={scenario.problem}
              steps={scenario.steps}
              isMobile={false}
            />
          </div>
          <div ref={(el) => (scenariosRef.current[index * 2 + 1] = el)}>
            <Scenario
              title={scenario.title}
              problem={scenario.problem}
              steps={scenario.steps}
              isMobile={true}
            />
          </div>
        </React.Fragment>
      ))}

      <section
        ref={additionalNotesRef}
        className="mb-8 bg-gray-900/30 rounded-lg p-3 sm:p-5"
      >
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
            to check the working directory.
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
