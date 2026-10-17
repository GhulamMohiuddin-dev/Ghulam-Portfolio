import { describe, expect, it } from "vitest";
import { getProject, projects } from "@/data/projects";
import { experience } from "@/data/profile";

describe("project data", () => {
  it("has unique, URL-safe slugs", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });

  it("covers every case-study section", () => {
    for (const project of projects) {
      expect(project.problem, project.slug).not.toBe("");
      expect(project.whyItMattered, project.slug).not.toBe("");
      expect(project.contributions.length, project.slug).toBeGreaterThan(0);
      expect(project.decisions.length, project.slug).toBeGreaterThan(0);
      expect(project.approach.length, project.slug).toBeGreaterThan(0);
      expect(project.outcome, project.slug).not.toBe("");
      expect(project.tradeoffs.length, project.slug).toBeGreaterThan(0);
    }
  });

  it("only links to secure external URLs", () => {
    for (const project of projects) {
      for (const link of project.links ?? []) expect(link.href).toMatch(/^https:\/\//);
    }
  });

  it("looks projects up by slug", () => {
    expect(getProject(projects[0].slug)).toBe(projects[0]);
    expect(getProject("does-not-exist")).toBeUndefined();
  });
});

describe("experience data", () => {
  it("has exactly one current role", () => {
    expect(experience.filter((entry) => entry.current)).toHaveLength(1);
  });
});
