import { useEffect, useState } from "react";

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    if (!sectionIds.length) {
      return;
    }

    const visibleRatios = new Map<string, number>();
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    elements.forEach((element) => visibleRatios.set(element.id, 0));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleRatios.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          );
        });

        const nextSection = [...visibleRatios.entries()]
          .sort((left, right) => right[1] - left[1])
          .find(([, ratio]) => ratio > 0);

        if (nextSection) {
          setActiveSection(nextSection[0]);
        }
      },
      {
        rootMargin: "-24% 0px -48% 0px",
        threshold: [0.1, 0.2, 0.35, 0.5, 0.7],
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
};
