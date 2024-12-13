import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SubjectCard from "./components/SubjectCard";
import BranchOverview from "./features/branch/BranchOverview";
import GitScenario from "./features/gitGuide/GitScenarios";
import Breadcrumbs from "./components/BreadCrumbs";
import GitPush from "./features/gitGuide/GitPush";
import GitPull from "./features/gitGuide/GitPull";
import HeroSection from "./components/HeroSection";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Create a media query context for GSAP
    const mm = gsap.matchMedia();

    // Apply animations only for mobile screens (up to 640px)
    mm.add("(max-width: 640px)", () => {
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 100,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    // Cleanup function
    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const cardData = [
    {
      title: "Git Scenarios",
      link: "/scenarios",
      description: "Explore common Git scenarios and how to handle them.",
      image:
        "https://th.bing.com/th/id/OIP.K0vaVYNZuneSbOKRw3divQHaEK?rs=1&pid=ImgDetMain",
    },
    {
      title: "Git Branching",
      link: "/branching",
      description:
        "Learn about Git branching, how to create, switch, and merge branches.",
      image:
        "https://gitprotect.io/blog/wp-content/uploads/2024/02/How-to-create-a-new-branch-in-GitHub.png",
    },
    {
      title: "Git Push",
      link: "/git-push",
      description:
        "Learn how to push your local commits to a remote Git repository.",
      image:
        "https://blog.hassam.dev/wp-content/uploads/2024/03/git-push-and-git-push-force-1024x829-1.webp",
    },
    {
      title: "Git Pull",
      link: "/git-pull",
      description:
        "Understand how to fetch and merge changes from a remote repository.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7eHcB7V6tmc8kRzT7WC_2vZiB803NB1StAw&s",
    },
  ];

  return (
    <Router>
      <div className="relative min-h-screen bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FF1493,transparent)] opacity-50"></div>

        <div className="relative z-10 min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <div className="container mx-auto px-4 py-8">
              <Routes>
                <Route
                  path="/"
                  element={
                    <div className="text-center">
                      <HeroSection />

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {cardData.map((card, index) => (
                          <div
                            key={card.title}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="h-full"
                          >
                            <SubjectCard
                              title={card.title}
                              link={card.link}
                              description={card.description}
                              image={card.image}
                              className="h-full"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  }
                />

                <Route
                  path="/git-push"
                  element={
                    <div className="max-w-4xl mx-auto">
                      <Breadcrumbs current="Git Push" />
                      <GitPush />
                    </div>
                  }
                />

                <Route
                  path="/git-pull"
                  element={
                    <div className="max-w-4xl mx-auto">
                      <Breadcrumbs current="Git Pull" />
                      <GitPull />
                    </div>
                  }
                />

                <Route
                  path="/branching"
                  element={
                    <div className="max-w-4xl mx-auto">
                      <Breadcrumbs current="Git Branching" />
                      <BranchOverview />
                    </div>
                  }
                />

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
