const e=[{id:"fha-gipcode",name:{en:"GIPCode — C++ Coding & Grading Platform",de:"GIPCode — Plattform für das Programmieren und Bewerten in C++"},description:{en:`Designed and built GIPCode as my Bachelor's thesis project (graded 1.0, the highest possible grade), now deployed at FH Aachen to support introductory C++ programming courses. Unlike function-only coding platforms, it evaluates multi-file C++ projects (headers, classes, and standard project layouts) tailored to the university curriculum.

![overview](https://belastr.dev/static/fha-gipcode/overview.png)

## Overview & Requirements

Students solve exercises in an integrated browser editor with custom standard-input test cases, comparing their program output automatically against a reference implementation. While currently focused on C++, the execution pipeline is decoupled to support additional languages cleanly.

Before implementation, I mapped out personas, epics, and acceptance criteria using a user story map, breaking the backlog into milestones across an 11-week development window.

![profile](https://belastr.dev/static/fha-gipcode/profile.png)

## Automated Code Evaluation

Submitted code runs through a validation and sandboxing pipeline before grading:

* **Static Checks:** Detects forbidden headers or language features and verifies required function signatures, return types, and parameter counts.
* **Isolated Execution:** Compiles both the student's code and a reference solution inside ephemeral GCC containers, comparing outputs against custom and hidden grading test cases.

All submissions are persisted and linked to student accounts for progress tracking and tutor review.

![exercise](https://belastr.dev/static/fha-gipcode/exercise.png)

## Roles & Access Control

The platform enforces role-based access via JWT authorization:

* **Students:** Browse timed assignments, test code, and submit solutions.
* **Supervisors:** Inspect student progress and submission histories.
* **Administrators:** Manage exercises, unlock/lock windows, and user accounts.

![edit](https://belastr.dev/static/fha-gipcode/edit.png)

## Distributed Server Architecture & CI/CD

All backend services run inside an isolated internal Docker network behind an Nginx reverse proxy handling TLS termination:

* **API Server & Frontend:** Express (Node.js) backend and React frontend, both written in TypeScript (with Tailwind CSS).
* **Database & Queue:** PostgreSQL runs in its own container for users, exercises, and submissions, while a Redis container queues grading jobs asynchronously.
* **Sandboxed Judge Workers:** Independent Go containers pull jobs from Redis and dynamically spawn isolated GCC containers to compile and execute untrusted student code safely.

![server architecture diagram](https://belastr.dev/static/fha-gipcode/server.png)

A GitLab CI pipeline automates building the server Docker images as well as native desktop client binaries for Windows, macOS (ARM and Intel), and Linux.

## Offline-First Desktop Client

To let students work without a constant connection to the university network, GIPCode includes a standalone Go desktop client that embeds a local API server, execution runner, and sync engine. Students fetch assignments while online, write and test code offline using a local C++ compiler with the exact same React UI, and push submissions once reconnected.

![local client architecture diagram](https://belastr.dev/static/fha-gipcode/local.png)

![login](https://belastr.dev/static/fha-gipcode/login.png)`,de:`Ich habe GIPCode im Rahmen meiner Bachelorarbeit entwickelt und umgesetzt (Note 1,0, die höchstmögliche Note); das Programm wird mittlerweile an der FH Aachen zur Unterstützung von Einführungskursen in die C++-Programmierung eingesetzt. Im Gegensatz zu Plattformen, die ausschließlich Funktionen unterstützen, wertet es C++-Projekte mit mehreren Dateien (Header, Klassen und Standard-Projektstrukturen) aus, die speziell auf den Lehrplan der Hochschule zugeschnitten sind.

![Übersicht](https://belastr.dev/static/fha-gipcode/overview.png)

## Übersicht & Anforderungen

Die Studierenden lösen Übungen in einem integrierten Browser-Editor mit benutzerdefinierten Testfällen für die Standardeingabe und vergleichen die Ausgabe ihres Programms automatisch mit einer Referenzimplementierung. Derzeit liegt der Schwerpunkt zwar auf C++, die Ausführungspipeline ist jedoch entkoppelt, um weitere Sprachen problemlos unterstützen zu können.

Vor der Implementierung habe ich mithilfe einer User-Story-Map Personas, Epics und Akzeptanzkriterien definiert und das Backlog in Meilensteine über einen Entwicklungszeitraum von 11 Wochen unterteilt.

![Profil](https://belastr.dev/static/fha-gipcode/profile.png)

## Automatisierte Code-Auswertung

Der eingereichte Code durchläuft vor der Benotung eine Validierungs- und Sandboxing-Pipeline:

* **Statische Prüfungen:** Erkennen verbotene Header oder Sprachfunktionen und überprüfen erforderliche Funktionssignaturen, Rückgabetypen und Parameteranzahlen.
* **Isolierte Ausführung:** Kompiliert sowohl den Code des Teilnehmers als auch eine Referenzlösung in kurzlebigen GCC-Containern und vergleicht die Ausgaben mit benutzerdefinierten und verborgenen Bewertungstestfällen.

Alle Einsendungen werden gespeichert und mit den Teilnehmerkonten verknüpft, um den Fortschritt zu verfolgen und die Überprüfung durch Tutoren zu ermöglichen.

![Übung](https://belastr.dev/static/fha-gipcode/exercise.png)

## Rollen & Zugriffskontrolle

Die Plattform erzwingt rollenbasierten Zugriff über JWT-Autorisierung:

* **Studierende:** Zeitaufgaben einsehen, Code testen und Lösungen einreichen.
* **Betreuer:** Den Fortschritt der Studierenden und den Verlauf der Einreichungen überprüfen.
* **Administratoren:** Verwalten Übungen, entsperren/sperren Zeitfenster und Benutzerkonten.

![Bearbeiten](https://belastr.dev/static/fha-gipcode/edit.png)

## Verteilte Serverarchitektur & CI/CD

Alle Backend-Dienste laufen in einem isolierten internen Docker-Netzwerk hinter einem Nginx-Reverse-Proxy, der die TLS-Terminierung übernimmt:

* **API-Server & Frontend:** Express (Node.js)-Backend und React-Frontend, beide in TypeScript (mit Tailwind CSS) geschrieben.
* **Datenbank & Warteschlange:** PostgreSQL läuft in einem eigenen Container für Benutzer, Übungen und Einreichungen, während ein Redis-Container Bewertungsaufträge asynchron in eine Warteschlange stellt.
* **Sandbox-basierte Judge-Worker:** Unabhängige Go-Container holen Aufgaben aus Redis ab und starten dynamisch isolierte GCC-Container, um nicht vertrauenswürdigen Code von Studierenden sicher zu kompilieren und auszuführen.

![Diagramm der Serverarchitektur](https://belastr.dev/static/fha-gipcode/server.png)

Eine GitLab-CI-Pipeline automatisiert die Erstellung der Docker-Images für den Server sowie der nativen Desktop-Client-Binärdateien für Windows, macOS (ARM und Intel) und Linux.

## Offline-First-Desktop-Client

Damit Studierende auch ohne ständige Verbindung zum Universitätsnetzwerk arbeiten können, enthält GIPCode einen eigenständigen Go-Desktop-Client, der einen lokalen API-Server, einen Ausführungs-Runner und eine Synchronisierungs-Engine integriert. Die Studierenden laden ihre Aufgaben herunter, während sie online sind, schreiben und testen ihren Code offline mithilfe eines lokalen C++-Compilers mit genau derselben React-Benutzeroberfläche und übermitteln ihre Ergebnisse, sobald sie wieder verbunden sind.

![Diagramm der lokalen Client-Architektur](https://belastr.dev/static/fha-gipcode/local.png)

![Anmeldung](https://belastr.dev/static/fha-gipcode/login.png)`},thumbnail:"https://belastr.dev/static/fha-gipcode/exercise.png",stack:["Go","TypeScript","React","Tailwind CSS","Node.js","Express","PostgreSQL","Redis","Nginx","Docker","GitLab CI","C++"],highlighted:!0},{id:"gmod-cwrp",name:{en:"Multiplayer Game Server Platform",de:"Mehrspieler Game Server Plattform"},description:{en:`Architected, rebuilt, and continue to maintain a large-scale multiplayer game server in Garry's Mod supporting an active community and complex interconnected gameplay systems. Originally suffering from severe instability above 80 players, the server was rewritten from scratch with a custom gamemode—allowing it to run smoothly at its 128-player cap and rank #1 in its category across Europe.

![thumbnail](https://belastr.dev/static/gmod-cwrp/gameplay_1.png)

## Persistence & Data Migration

Built a custom persistence layer managing character profiles, ranks, regiment memberships, and progression states across sessions and map changes. As player volume grew, I migrated 10,000-50,000 legacy player records from SQLite to MySQL/MariaDB to eliminate I/O bottlenecks under full server load.

![in-game main menu](https://belastr.dev/static/gmod-cwrp/menu.png)

## Dynamic Event & Progression Systems

* **In-Game Event Framework:** Built a configurable editor allowing staff to set up roles, loadouts, spawn points, and mission objectives live without writing code.
* **Real-Time Progression:** Engineered an event-driven XP and leveling system tracking combat, healing, revives, and objective play with minimal tick-rate overhead at 128 concurrent players.

![gameplay screenshot](https://belastr.dev/static/gmod-cwrp/gameplay_3.png)

## Custom In-Game UI

Replaced Garry's Mod's basic default menus with a cohesive suite of custom interfaces—including scoreboards, character loadouts, progression views, and administrative dashboards designed for fast interaction during live gameplay.

![in-game scoreboard](https://belastr.dev/static/gmod-cwrp/scoreboard.png)

![gameplay screenshot](https://belastr.dev/static/gmod-cwrp/gameplay_2.png)

## Development Pipeline & External Integrations

Administer the dedicated Linux machines (running both staging/test and main production servers) via Pterodactyl and maintain structured GitHub workflows where junior developers contribute through code reviews before changes ship to production. Alongside the game servers, external Discord bots and stats APIs (written in Go and TypeScript) connect directly to our Discord servers for player sync and moderation automation.

![development and infrastructure pipeline](https://belastr.dev/static/gmod-cwrp/structure.png)`,de:`Entwicklung, Neugestaltung und fortlaufende Wartung eines groß angelegten Multiplayer-Spielservers in Garry's Mod, der eine aktive Community und komplexe, miteinander verknüpfte Spielsysteme unterstützt. Da der Server ursprünglich bei mehr als 80 Spielern unter erheblicher Instabilität litt, wurde er von Grund auf neu programmiert und mit einem benutzerdefinierten Spielmodus ausgestattet - wodurch er nun bei seiner maximalen Spieleranzahl von 128 reibungslos läuft und europaweit Platz 1 in seiner Kategorie einnimmt.

![thumbnail](https://belastr.dev/static/gmod-cwrp/gameplay_1.png)

## Persistenz & Datenmigration

Ich habe eine maßgeschneiderte Persistenzschicht entwickelt, die Charakterprofile, Ränge, Regimentszugehörigkeiten und Fortschrittsstände über Sitzungen und Kartenwechsel hinweg verwaltet. Als die Spielerzahl wuchs, migrierte ich 10.000 bis 50.000 alte Spielerdatensätze von SQLite zu MySQL/MariaDB, um I/O-Engpässe bei voller Serverauslastung zu beseitigen.

![Hauptmenü im Spiel](https://belastr.dev/static/gmod-cwrp/menu.png)

## Dynamische Ereignis- und Fortschrittssysteme

* **Ereignis-Framework im Spiel:** Entwicklung eines konfigurierbaren Editors, mit dem Mitarbeiter Rollen, Ausrüstungen, Spawn-Punkte und Missionsziele live einrichten können, ohne Code schreiben zu müssen.
* **Echtzeit-Fortschritt:** Entwicklung eines ereignisgesteuerten XP- und Levelsystems, das Kämpfe, Heilungen, Wiederbelebungen und das Erreichen von Zielen mit minimalem Overhead bei der Tick-Rate bei 128 gleichzeitigen Spielern verfolgt.

![Gameplay-Screenshot](https://belastr.dev/static/gmod-cwrp/gameplay_3.png)

## Benutzerdefinierte Benutzeroberfläche im Spiel

Die einfachen Standardmenüs von Garry's Mod wurden durch eine einheitliche Reihe benutzerdefinierter Oberflächen ersetzt - darunter Anzeigetafeln, Charakterausrüstungen, Fortschrittsanzeigen und Verwaltungs-Dashboards, die für eine schnelle Interaktion während des Live-Gameplays konzipiert sind.

![Anzeigetafel im Spiel](https://belastr.dev/static/gmod-cwrp/scoreboard.png)

![Gameplay-Screenshot](https://belastr.dev/static/gmod-cwrp/gameplay_2.png)

## Entwicklungspipeline & externe Integrationen

Verwaltung der dedizierten Linux-Rechner (auf denen sowohl Staging-/Test- als auch Hauptproduktionsserver laufen) über Pterodactyl und Pflege strukturierter GitHub-Workflows, in denen Nachwuchsentwickler durch Code-Reviews mitwirken, bevor Änderungen in die Produktion übernommen werden. Neben den Spielservern verbinden sich externe Discord-Bots und Statistik-APIs (geschrieben in Go und TypeScript) direkt mit unseren Discord-Servern, um die Spielersynchronisation und die Automatisierung der Moderation zu gewährleisten.

![Entwicklungs- und Infrastruktur-Pipeline](https://belastr.dev/static/gmod-cwrp/structure.png)`},thumbnail:"https://belastr.dev/static/gmod-cwrp/gameplay_1.png",stack:["Lua","MySQL","MariaDB","SQLite","Go","TypeScript","Linux","GitHub"],highlighted:!0},{id:"ai-app-content",name:{en:"AI-Powered Business App Preview Generator",de:"KI-gestützter Generator für Business-App-Vorschauen"},description:{en:`Built in an 8-person interdisciplinary Scrum team (Computer Science and Business Informatics) in collaboration with Cologne-based software agency Johnny Bytes (graded 1.0). Replacing manual demo preparation, the web platform takes a company's address or URL and generates a tailored, interactive Flutter app preview within seconds.

![preview](https://belastr.dev/static/ai-app-content/preview.png)

Users select a business via an interactive map or enter a website URL, triggering an automated backend pipeline that extracts public company data and populates pre-built Flutter app templates.

![interactive map and input](https://belastr.dev/static/ai-app-content/start.png)

## Backend Crawling & LLM Pipeline

I owned the backend architecture in PHP (Laravel) and MySQL/MariaDB, focusing on two core problems:

* **Web Crawling & Normalization:** Built a scraper to fetch relevant pages from target business websites, strip noise, and normalize unstructured text into clean inputs.
* **Structured JSON Generation & Optimization:** Integrated the OpenAI API to transform crawled data into strict JSON schemas consumed by the frontend Flutter templates. Through iterative prompt tuning and model benchmarking (settling on \`gpt-5-nano\`), I improved extraction accuracy while significantly reducing response latency and token costs.`,de:`Entwickelt in einem interdisziplinären 8-köpfigen Scrum-Team (Informatik und Wirtschaftsinformatik) in Zusammenarbeit mit der Kölner Softwareagentur Johnny Bytes (Note 1,0). Die Webplattform ersetzt die manuelle Vorbereitung von Demos: Sie nimmt die Adresse oder URL eines Unternehmens entgegen und generiert innerhalb von Sekunden eine maßgeschneiderte, interaktive Vorschau der Flutter-App.

![Vorschau](https://belastr.dev/static/ai-app-content/preview.png)

Nutzer wählen über eine interaktive Karte ein Unternehmen aus oder geben eine Website-URL ein. Dadurch wird eine automatisierte Backend-Pipeline ausgelöst, die öffentliche Unternehmensdaten extrahiert und vorgefertigte Flutter-App-Vorlagen ausfüllt.

![interaktive Karte und Eingabefeld](https://belastr.dev/static/ai-app-content/start.png)

## Backend-Crawling & LLM-Pipeline

Ich war verantwortlich für die Backend-Architektur in PHP (Laravel) und MySQL/MariaDB und konzentrierte mich dabei auf zwei Kernprobleme:

* **Web-Crawling & Normalisierung:** Ich entwickelte einen Scraper, um relevante Seiten von den Websites der Zielunternehmen abzurufen, Stördaten zu entfernen und unstrukturierten Text in saubere Eingabedaten zu normalisieren.
* **Generierung und Optimierung strukturierter JSON-Daten:** Ich habe die OpenAI-API integriert, um die gecrawlten Daten in strenge JSON-Schemas umzuwandeln, die von den Flutter-Vorlagen im Frontend verarbeitet werden. Durch iterative Optimierung der Prompts und Modell-Benchmarking (Entscheidung für \`gpt-5-nano\`) habe ich die Extraktionsgenauigkeit verbessert und gleichzeitig die Antwortlatenz sowie die Token-Kosten deutlich reduziert.`},thumbnail:"https://belastr.dev/static/ai-app-content/preview.png",stack:["PHP","Laravel","MySQL","MariaDB","OpenAI API","REST APIs","GitLab"]},{id:"gmod-monitor",name:{en:"Game Server Monitoring & Analytics Platform",de:"Plattform zur Überwachung und Analyse von Spielservern"},description:{en:`Built a monitoring and analytics platform for Garry's Mod servers that collects live operational metrics, stores historical player activity in PostgreSQL, and exposes time-series analytics via a REST API and React/TypeScript dashboard. *(A newer iteration has since been rewritten completely in Go with integrated Discord bot functionality.)*

![architecture](https://belastr.dev/static/gmod-monitor/architecture.png)

## Data Collection & Aggregation

A containerized Python polling service queries configured game servers at set intervals using the SourceQuery protocol (and includes a built-in simulation mode generating randomized datasets for local development without live servers).

![dashboard screenshot](https://belastr.dev/static/gmod-monitor/dashboard_top.png)

To keep charts fast and readable over long windows (1 hour up to 90 days), raw polling points are aggregated into statistical intervals displaying minimum, maximum, and average player counts.

![dashboard screenshot](https://belastr.dev/static/gmod-monitor/dashboard_bottom.png)

## API & Deployment

Collected metrics are served over a REST API for dashboard rendering or external integrations, with all polling targets, intervals, and database settings configured via environment variables for Docker deployment.

![api](https://belastr.dev/static/gmod-monitor/api.png)`,de:`Entwicklung einer Überwachungs- und Analyseplattform für Garry's Mod-Server, die Live-Betriebskennzahlen erfasst, historische Spieleraktivitäten in PostgreSQL speichert und Zeitreihenanalysen über eine REST-API sowie ein React/TypeScript-Dashboard bereitstellt. *(Eine neuere Version wurde inzwischen komplett in Go neu geschrieben und verfügt über eine integrierte Discord-Bot-Funktionalität.)*

![Architektur](https://belastr.dev/static/gmod-monitor/architecture.png)

## Datenerfassung und -aggregation

Ein containerisierter Python-Polling-Dienst fragt konfigurierte Spielserver in festgelegten Intervallen mithilfe des SourceQuery-Protokolls ab (und verfügt über einen integrierten Simulationsmodus, der zufällige Datensätze für die lokale Entwicklung ohne Live-Server generiert).

![Screenshot des Dashboards](https://belastr.dev/static/gmod-monitor/dashboard_top.png)

Um die Diagramme auch über lange Zeiträume (1 Stunde bis zu 90 Tagen) schnell und übersichtlich zu halten, werden die Rohdaten der Abfragen zu statistischen Intervallen aggregiert, die die minimale, maximale und durchschnittliche Spieleranzahl anzeigen.

![Screenshot des Dashboards](https://belastr.dev/static/gmod-monitor/dashboard_bottom.png)

## API & Bereitstellung

Die erfassten Metriken werden über eine REST-API für die Darstellung im Dashboard oder für externe Integrationen bereitgestellt, wobei alle Abfrageziele, Intervalle und Datenbankeinstellungen über Umgebungsvariablen für die Docker-Bereitstellung konfiguriert werden.

![api](https://belastr.dev/static/gmod-monitor/api.png)`},thumbnail:"https://belastr.dev/static/gmod-monitor/dashboard_top.png",stack:["Python","Go","TypeScript","React","Vite","PostgreSQL","Docker"]},{id:"gmod-debugger",name:{en:"In-Game Server Diagnostics & Logging Toolkit",de:"Toolkit für Serverdiagnose und Protokollierung im Spiel"},description:{en:`Developed a modular Lua diagnostics toolkit for Garry's Mod servers that gives developers and administrators real-time visibility into runtime state, entity behavior, and server logs directly inside the game client.

![menu](https://belastr.dev/static/gmod-debugger/menu.png)

## Modular Architecture & In-Game UI

Built around an extensible plugin structure where independent diagnostic modules register their own data collectors, permission rules, and searchable UI views—allowing staff to inspect live server activity without needing SSH or console access.

![logs](https://belastr.dev/static/gmod-debugger/logs.png)

## Configuration & Discord Reporting

Each module supports granular per-server configuration and pairs with a lightweight Python Discord bot (alongside webhooks) to forward critical events and diagnostic reports directly to our developer Discord server.

![config](https://belastr.dev/static/gmod-debugger/config.png)`,de:`Entwicklung eines modularen Lua-Diagnose-Toolkits für Garry's Mod-Server, das Entwicklern und Administratoren direkt im Spiel-Client einen Echtzeit-Einblick in den Laufzeitstatus, das Verhalten von Entitäten und die Serverprotokolle ermöglicht.

![menu](https://belastr.dev/static/gmod-debugger/menu.png)

## Modulare Architektur & In-Game-Benutzeroberfläche

Aufgebaut auf einer erweiterbaren Plugin-Struktur, in der unabhängige Diagnosemodule ihre eigenen Datensammler, Berechtigungsregeln und durchsuchbaren UI-Ansichten registrieren - so können Mitarbeiter die Live-Serveraktivität überprüfen, ohne auf SSH oder die Konsole zugreifen zu müssen.

![logs](https://belastr.dev/static/gmod-debugger/logs.png)

## Konfiguration & Discord-Berichterstattung

Jedes Modul unterstützt eine detaillierte Konfiguration pro Server und arbeitet mit einem schlanken Python-Discord-Bot (neben Webhooks) zusammen, um kritische Ereignisse und Diagnoseberichte direkt an unseren Entwickler-Discord-Server weiterzuleiten.

![config](https://belastr.dev/static/gmod-debugger/config.png)`},thumbnail:"https://belastr.dev/static/gmod-debugger/logs.png",stack:["Lua","Python","Discord API"]},{id:"portfolio",name:{en:"Personal Portfolio Website",de:"Persönliche Portfolio-Website"},description:{en:`Designed and built this static portfolio website from scratch using Deno, React, TypeScript, and Tailwind CSS, taking layout and visual inspiration from Meta's public web presence.

The build pipeline compiles everything into static HTML, CSS, and JavaScript assets hosted on GitHub Pages with zero server infrastructure. It features responsive desktop and mobile navigation, automatic system dark/light theme detection, full English/German internationalization, and Markdown-rendered project documentation.`,de:`Ich habe diese statische Portfolio-Website von Grund auf mit Deno, React, TypeScript und Tailwind CSS entworfen und erstellt, wobei ich mich hinsichtlich Layout und Optik an der öffentlichen Webpräsenz von Meta orientiert habe.

Die Build-Pipeline kompiliert alle Elemente zu statischen HTML-, CSS- und JavaScript-Dateien, die auf GitHub Pages gehostet werden - ganz ohne Serverinfrastruktur. Die Website verfügt über eine responsive Navigation für Desktop- und Mobilgeräte, eine automatische Erkennung des dunklen bzw. hellen Systemthemas, eine vollständige Internationalisierung in Englisch und Deutsch sowie eine mit Markdown gerenderte Projektdokumentation.

Die Übersetzung vom Englischen ins Deutsche wurde vollständig mit DeepL erstellt.`},thumbnail:"https://belastr.dev/static/portfolio/portfolio.png",stack:["TypeScript","React","Tailwind CSS","Deno","Vite","GitHub Pages"]}];export{e as p};
