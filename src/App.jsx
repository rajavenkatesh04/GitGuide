import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SubjectCard from "./components/SubjectCard";
import BranchOverview from "./features/branch/BranchOverview";
import GitScenario from "./features/gitGuide/GitScenarios";
import Breadcrumbs from "./components/Breadcrumbs";

function App() {
  return (
    <Router>
      {/* New Background with pinkish tone */}
      <div className="relative min-h-screen bg-slate-950 overflow-hidden">
        {/* Radial gradient with pinkish tone */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FF1493,transparent)] opacity-50"></div>

        {/* Main app container */}
        <div className="relative z-10 min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <div className="container mx-auto px-4 py-8">
              <Routes>
                {/* Home Page with Subject Cards */}
                <Route
                  path="/"
                  element={
                    <div className="text-center">
                      <h1 className="text-3xl md:text-4xl text-white mb-10">
                        Welcome to the GitHub Guide
                      </h1>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <SubjectCard
                          title="Git Branching"
                          link="/branching"
                          description="Learn about Git branching, how to create, switch, and merge branches."
                          image="https://gitprotect.io/blog/wp-content/uploads/2024/02/How-to-create-a-new-branch-in-GitHub.png"
                        />
                        <SubjectCard
                          title="Git Scenarios"
                          link="/scenarios"
                          description="Explore common Git scenarios and how to handle them."
                          image="https://th.bing.com/th/id/OIP.K0vaVYNZuneSbOKRw3divQHaEK?rs=1&pid=ImgDetMain"
                        />
                      </div>
                    </div>
                  }
                />

                {/* Git Branching Page */}
                <Route
                  path="/branching"
                  element={
                    <div className="max-w-4xl mx-auto">
                      <Breadcrumbs current="Git Branching" />
                      <BranchOverview />
                    </div>
                  }
                />

                {/* Git Scenarios Page */}
                <Route
                  path="/scenarios"
                  element={
                    <div className="max-w-4xl mx-auto">
                      <Breadcrumbs current="Git Scenarios" />
                      <GitScenario />
                    </div>
                  }
                />
              </Routes>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
