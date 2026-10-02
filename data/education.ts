import { type Locale } from "@/utils.ts";

export type Education = {
  id: string,
  place: string;
  degree: Record<Locale, string>;
  timespan: Record<Locale, string>;
  description: Record<Locale, string>;
}

export const education: Education[] = [
  {
    id: "cs-msc",
    place: "RWTH Aachen",
    degree: { en: "M.Sc. Computer Science", de: "M.Sc. Informatik"},
    timespan: { en: "Oct 2026 - Sep 2028 (expected)", de: "Okt. 2026 - Sept. 2028 (erwartet)" },
    description: {
      en: `My motivation is to refine my Full-Stack and DevOps skills, while learning about new theoretical sides of computer science including artificial intelligence and machine learning.`,
      de: `Meine Motivation besteht darin, meine Full-Stack- und DevOps-Kenntnisse zu vertiefen und mich gleichzeitig mit neuen theoretischen Aspekten der Informatik, darunter künstliche Intelligenz und maschinelles Lernen, auseinanderzusetzen.`,
    },
  },
  {
    id: "cs-bsc",
    place: "FH Aachen University of Applied Sciences",
    degree: { en: "B.Sc. Computer Science", de: "B.Sc. Informatik"},
    timespan: { en: "Oct 2023 - Jul 2026", de: "Okt. 2023 - Juli 2026" },
    description: {
      en: `Specialisation: Software Engineering (& IT-Security)

Relevant coursework: DevOps, DevSecOps, Requirements Engineering, Software Testing, Modern Programming Language Concepts, Fault-Tolerant Systems, IT-Infrastructure, IT-Security, Linux, Databases, Web Technologies, Object-Oriented Software Development, Algorithms and Data Structures`,
      de: `Schwerpunkt: Softwareentwicklung (& IT-Sicherheit)

Relevante Studienfächer: DevOps, DevSecOps, Requirements Engineering, Software Testing, Konzepte moderner Programmiersprachen, Fehlertolerante Systeme, IT-Infrastruktur, IT-Sicherheit, Linux, Datenbanken, Webtechnologien, Objekt-Orientierte Softwareentwicklung, Algorithmen und Datenstrukturen`,
    },
  },
]
