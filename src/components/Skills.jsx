import { useState } from "react";
import { Folder, FileCode2, ChevronRight, ChevronDown } from "lucide-react";

const SkillsSection = () => {
  const [open, setOpen] = useState({
    fullstack: false,
    frontend: false,
    backend: false,
    databases: false,
    ai: false,
    languages: false,
    tools: false,
  });

  const toggle = (folder) => {
    setOpen((prev) => ({ ...prev, [folder]: !prev[folder] }));
  };

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-xl ">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="bg-card rounded-lg p-8 shadow-md card-hover text-left font-mono">
          <div className="mb-4">
            {/* Root */}
            <div className="flex items-center text-primary font-semibold text-lg mb-2">
              <Folder className="mr-2 h-5 w-5" />
              Skills
            </div>

            {/* Full-Stack */}
            <div className="pl-6 mb-4">
              <button
                onClick={() => toggle("fullstack")}
                className="flex items-center text-foreground font-medium hover:text-primary transition-colors"
              >
                {open.fullstack ? (
                  <ChevronDown className="mr-1 h-4 w-4" />
                ) : (
                  <ChevronRight className="mr-1 h-4 w-4" />
                )}
                <Folder className="mr-2 h-4 w-4 text-primary" /> Full-Stack
              </button>

              {open.fullstack && (
                <div className="pl-6 mt-2 space-y-3">
                  {/* Frontend */}
                  <div>
                    <button
                      onClick={() => toggle("frontend")}
                      className="flex items-center text-foreground hover:text-primary"
                    >
                      {open.frontend ? (
                        <ChevronDown className="mr-1 h-4 w-4" />
                      ) : (
                        <ChevronRight className="mr-1 h-4 w-4" />
                      )}
                      <Folder className="mr-2 h-4 w-4 text-primary" /> Frontend
                    </button>
                    {open.frontend && (
                      <div className="pl-6 space-y-1 mt-2 text-muted-foreground">
                        {["HTML", "CSS", "JavaScript", "React"].map((skill) => (
                          <div key={skill} className="flex items-center">
                            <FileCode2 className="mr-2 h-4 w-4 text-primary/80" />{" "}
                            {skill}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Backend */}
                  <div>
                    <button
                      onClick={() => toggle("backend")}
                      className="flex items-center text-foreground hover:text-primary"
                    >
                      {open.backend ? (
                        <ChevronDown className="mr-1 h-4 w-4" />
                      ) : (
                        <ChevronRight className="mr-1 h-4 w-4" />
                      )}
                      <Folder className="mr-2 h-4 w-4 text-primary" /> Backend
                    </button>
                    {open.backend && (
                      <div className="pl-6 space-y-1 mt-2 text-muted-foreground">
                        {["Node.js", "Express", "Flask"].map((skill) => (
                          <div key={skill} className="flex items-center">
                            <FileCode2 className="mr-2 h-4 w-4 text-primary/80" />{" "}
                            {skill}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Databases */}
                  <div>
                    <button
                      onClick={() => toggle("databases")}
                      className="flex items-center text-foreground hover:text-primary"
                    >
                      {open.databases ? (
                        <ChevronDown className="mr-1 h-4 w-4" />
                      ) : (
                        <ChevronRight className="mr-1 h-4 w-4" />
                      )}
                      <Folder className="mr-2 h-4 w-4 text-primary" /> Databases
                    </button>
                    {open.databases && (
                      <div className="pl-6 space-y-1 mt-2 text-muted-foreground">
                        {["MongoDB", "PostgreSQL", "MySQL"].map((db) => (
                          <div key={db} className="flex items-center">
                            <FileCode2 className="mr-2 h-4 w-4 text-primary/80" />{" "}
                            {db}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* AI/ML */}
            <div className="pl-6 mb-4">
              <button
                onClick={() => toggle("ai")}
                className="flex items-center text-foreground font-medium hover:text-primary transition-colors"
              >
                {open.ai ? (
                  <ChevronDown className="mr-1 h-4 w-4" />
                ) : (
                  <ChevronRight className="mr-1 h-4 w-4" />
                )}
                <Folder className="mr-2 h-4 w-4 text-primary" /> AI / ML
              </button>
              {open.ai && (
                <div className="pl-6 space-y-1 mt-2 text-muted-foreground">
                  {["Pandas", "NumPy", "Scikit-learn", "LangChain", "LLM"].map(
                    (ai) => (
                      <div key={ai} className="flex items-center">
                        <FileCode2 className="mr-2 h-4 w-4 text-primary/80" />{" "}
                        {ai}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>

            {/* Languages */}
            <div className="pl-6 mb-4">
              <button
                onClick={() => toggle("languages")}
                className="flex items-center text-foreground font-medium hover:text-primary transition-colors"
              >
                {open.languages ? (
                  <ChevronDown className="mr-1 h-4 w-4" />
                ) : (
                  <ChevronRight className="mr-1 h-4 w-4" />
                )}
                <Folder className="mr-2 h-4 w-4 text-primary" /> Languages
              </button>
              {open.languages && (
                <div className="pl-6 space-y-1 mt-2 text-muted-foreground">
                  {["C", "C++", "Java", "Python", "SQL"].map((lang) => (
                    <div key={lang} className="flex items-center">
                      <FileCode2 className="mr-2 h-4 w-4 text-primary/80" />{" "}
                      {lang}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Tools */}
            <div className="pl-6">
              <button
                onClick={() => toggle("tools")}
                className="flex items-center text-foreground font-medium hover:text-primary transition-colors"
              >
                {open.tools ? (
                  <ChevronDown className="mr-1 h-4 w-4" />
                ) : (
                  <ChevronRight className="mr-1 h-4 w-4" />
                )}
                <Folder className="mr-2 h-4 w-4 text-primary" /> Tools
              </button>
              {open.tools && (
                <div className="pl-6 space-y-1 mt-2 text-muted-foreground">
                  {["Git", "Docker", "AWS"].map((tool) => (
                    <div key={tool} className="flex items-center">
                      <FileCode2 className="mr-2 h-4 w-4 text-primary/80" />{" "}
                      {tool}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
