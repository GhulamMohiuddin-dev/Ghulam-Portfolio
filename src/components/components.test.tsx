import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { projects } from "@/data/projects";
import { emergingAI } from "@/data/profile";
import { site } from "@/data/site";
import { Contact } from "@/components/sections/Contact";
import { EmergingAISection } from "@/components/sections/EmergingAISection";
import { ProjectCard } from "@/components/projects/ProjectCard";

describe("Contact", () => {
  it("opens LinkedIn safely in a new tab", () => {
    render(<Contact />);
    const linkedin = screen.getAllByRole("link", { name: /linkedin/i })[0];
    expect(linkedin).toHaveAttribute("href", site.links.linkedin);
    expect(linkedin).toHaveAttribute("target", "_blank");
    expect(linkedin).toHaveAttribute("rel", expect.stringContaining("noopener"));
  });

  it("renders a mailto link only when an email is configured", () => {
    render(<Contact />);
    const mailto = document.querySelectorAll('a[href^="mailto:"]');
    expect(mailto.length > 0).toBe(Boolean(site.links.email));
  });

  it("hides GitHub and CV until they are configured", () => {
    render(<Contact />);
    const section = screen.getByRole("region", { name: /let's talk engineering/i });
    expect(within(section).queryByText(/github/i) !== null).toBe(Boolean(site.links.github));
    expect(within(section).queryByText(/download pdf/i) !== null).toBe(Boolean(site.links.cv));
  });
});

describe("EmergingAISection", () => {
  it("presents AI-assisted engineering and the tools in use", () => {
    render(<EmergingAISection />);
    expect(screen.getByRole("heading", { name: emergingAI.practice.title })).toBeInTheDocument();
    for (const tool of emergingAI.practice.tools) expect(screen.getByText(tool)).toBeInTheDocument();
  });
});

describe("ProjectCard", () => {
  it("links the title to the case-study page", () => {
    const project = projects[0];
    render(<ProjectCard project={project} index={0} />);
    const heading = screen.getByRole("heading", { level: 3, name: project.title });
    expect(within(heading).getByRole("link")).toHaveAttribute("href", `/work/${project.slug}`);
  });
});
