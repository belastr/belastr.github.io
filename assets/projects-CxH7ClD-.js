const e=[{id:"fha-gipcode",name:{en:"Coding Learning Platform",de:"Programmier Lern Plattform"},description:{en:`Designed and developed a full-stack coding education platform as a university capstone project preceding my Bachelor's thesis, which continues and expands upon the same topic. The platform serves as a dedicated programming exercise environment for the introductory programming courses at the university, providing functionality similar to platforms such as LeetCode or HackerRank while being tailored to the course curriculum and learning objectives.

![overview](https://belastr.dev/static/fha-gipcode/overview.png)

## Overview

The platform enables students to solve programming exercises directly in the browser through an integrated development environment. Exercise descriptions are displayed alongside a code editor, allowing students to write solutions and execute them against custom test cases. Input data is provided via standard input, and program output is automatically compared against a reference implementation.

While the current exercise set is based on C++, the architecture was designed to support additional programming languages with minimal changes.

Requirements engineering concepts were applied during development. For example, a user story map was created that depicts the personas, activities, epics, and user stories along with their acceptance criteria. The user stories were treated as tasks in the backlog and assigned to individual milestones throughout this 11-week project.

![profile](https://belastr.dev/static/fha-gipcode/profile.png)

## Automated Code Evaluation

A dedicated execution pipeline handles compilation, validation, and testing of user submissions.

Before execution, solutions pass through a validation stage that can enforce exercise-specific requirements, including:

* Detection of forbidden headers, functions, or language features
* Verification of required functions
* Validation of function names, return types, and parameter counts
* Enforcement of exercise-specific coding constraints

For test runs, both the student's solution and a reference implementation are compiled in isolated environments and executed against the provided input. The resulting outputs are compared automatically.

Students can also formally submit solutions, which are evaluated against hidden test cases to determine exercise completion. All submissions are stored and linked to the student's account, enabling progress tracking and review.

![exercise](https://belastr.dev/static/fha-gipcode/exercise.png)

## User Roles and Administration

The platform implements a role-based access model consisting of:

* **Students** – Solve exercises, run tests, and submit solutions
* **Supervisors** – Review student profiles and submission histories
* **Administrators** – Manage exercises, users, and platform configuration

Authentication is implemented using JWT-based authorization, with user roles embedded directly within the token payload.

![edit](https://belastr.dev/static/fha-gipcode/edit.png)

## Distributed System Architecture

The backend consists of several containerized services communicating exclusively through an internal Docker network.

### Core Components

* **Reverse Proxy** providing TLS termination and external access
* **Node.js / Express API Server** written in TypeScript
* **React Frontend** written in TypeScript with Tailwind CSS
* **PostgreSQL Database** for user, exercise, and submission data
* **Redis Queue** for asynchronous job distribution
* **Go-based Runner Services** responsible for orchestration of isolated compilation and execution environments

Only the reverse proxy is exposed externally, while all other services remain isolated within the internal network, reducing the platform's attack surface.

![server](https://belastr.dev/static/fha-gipcode/server.png)

![local](https://belastr.dev/static/fha-gipcode/local.png)

## Offline-First Desktop Experience

A key differentiator from existing coding platforms is the ability to work offline.

The platform includes downloadable executables for multiple operating systems that synchronize exercises from the central server. Students can continue solving and testing exercises without an internet connection using a locally installed compiler.

The desktop application maintains feature parity with the web version by running a local web server and presenting the same user interface through the browser. Completed submissions are synchronized with the central platform once connectivity is restored.

The offline client combines:

* Local API server
* Local execution runner
* Exercise synchronization logic
* Authentication and submission handling

into a single Go application.

![login](https://belastr.dev/static/fha-gipcode/login.png)

## Technologies

**Frontend**

* TypeScript
* React
* Tailwind CSS

**Backend**

* Node.js
* Express
* TypeScript
* Go

**Infrastructure**

* Docker
* Redis
* PostgreSQL
* Reverse Proxy with TLS

**Authentication & Security**

* JWT-based authentication
* Role-based authorization
* Container-isolated code execution
* Internal service communication via Docker networking

## Key Achievements

* Designed and implemented a complete learning platform from the ground up
* Built a secure distributed code-execution system using isolated containers
* Developed automated validation and grading workflows for programming exercises
* Implemented role-based administration and supervision features
* Created an offline-capable client with seamless synchronization to the central platform
* Established a scalable architecture suitable for future multi-language support
`,de:`Im Rahmen eines universitären Abschlussprojekts vor meiner Bachelorarbeit habe ich eine Full-Stack-Plattform für die Programmierausbildung konzipiert und entwickelt, die auch das Thema meiner Bachelorarbeit darstellt. Die Plattform dient als spezielle Übungsumgebung für die Einführungskurse in die Programmierung an der Universität und bietet ähnliche Funktionen wie Plattformen wie LeetCode oder HackerRank, ist jedoch speziell auf den Lehrplan und die Lernziele der Kurse zugeschnitten.

![overview](https://belastr.dev/static/fha-gipcode/overview.png)

## Übersicht

Die Plattform ermöglicht es den Studierenden, Programmieraufgaben direkt im Browser mithilfe einer integrierten Entwicklungsumgebung zu lösen. Die Aufgabenbeschreibungen werden neben einem Code-Editor angezeigt, sodass die Studierenden Lösungen schreiben und diese anhand benutzerdefinierter Testfälle ausführen können. Die Eingabedaten werden über die Standardeingabe bereitgestellt, und die Programmausgabe wird automatisch mit einer Referenzimplementierung verglichen.

Zwar basiert die aktuelle Übungsreihe auf C++, doch wurde die Architektur so konzipiert, dass sie mit minimalen Änderungen auch weitere Programmiersprachen unterstützt.

Bei der Entwicklung wurden Konzepte des Requirements Engineering angewendet. So wurde beispielsweise eine User-Story-Map erstellt, in der die Personas, Aktivitäten, Epics und User Stories zusammen mit ihren Akzeptanzkriterien dargestellt sind. Die User Stories wurden als Aufgaben im Backlog behandelt und im Laufe dieses elfwöchigen Projekts einzelnen Meilensteinen zugeordnet.

![profile](https://belastr.dev/static/fha-gipcode/profile.png)

## Automatisierte Code-Auswertung

Eine spezielle Ausführungs-Pipeline übernimmt die Kompilierung, Validierung und das Testen der von den Benutzern eingereichten Lösungen.

Vor der Ausführung durchlaufen die Lösungen eine Validierungsphase, in der aufgabenspezifische Anforderungen durchgesetzt werden können, darunter:

* Erkennung verbotener Header, Funktionen oder Sprachmerkmale
* Überprüfung der erforderlichen Funktionen
* Validierung von Funktionsnamen, Rückgabetypen und Parameteranzahlen
* Durchsetzung aufgabenspezifischer Codierungsbeschränkungen

Bei Testläufen werden sowohl die Lösung des Studierenden als auch eine Referenzimplementierung in isolierten Umgebungen kompiliert und anhand der bereitgestellten Eingabe ausgeführt. Die resultierenden Ausgaben werden automatisch verglichen.

Studierende können Lösungen auch offiziell einreichen, die anhand verdeckter Testfälle bewertet werden, um festzustellen, ob die Übung abgeschlossen wurde. Alle Einreichungen werden gespeichert und mit dem Konto des Studierenden verknüpft, sodass der Fortschritt verfolgt und überprüft werden kann.

![exercise](https://belastr.dev/static/fha-gipcode/exercise.png)

## Benutzerrollen und Verwaltung

Die Plattform nutzt ein rollenbasiertes Zugriffsmodell, das folgende Rollen umfasst:

* **Studierende** – Lösen Aufgaben, führen Tests durch und reichen Lösungen ein
* **Betreuer** – Überprüfen die Profile der Studierenden und deren Einreichungsverlauf
* **Administratoren** – Verwalten Aufgaben, Benutzer und die Plattformkonfiguration

Die Authentifizierung erfolgt über eine JWT-basierte Autorisierung, wobei die Benutzerrollen direkt in die Token-Nutzlast eingebettet sind.

![edit](https://belastr.dev/static/fha-gipcode/edit.png)

## Verteilte System-Architektur

Das Backend besteht aus mehreren containerisierten Diensten, die ausschließlich über ein internes Docker-Netzwerk miteinander kommunizieren.

### Kernkomponenten

* **Reverse-Proxy** für TLS-Terminierung und externen Zugriff
* **Node.js/Express-API-Server**, geschrieben in TypeScript
* **React-Frontend**, geschrieben in TypeScript mit Tailwind CSS
* **PostgreSQL-Datenbank** für Benutzer-, Übungs- und Einreichungsdaten
* **Redis-Warteschlange** für die asynchrone Jobverteilung
* **Go-basierte Runner-Dienste**, die für die Orchestrierung isolierter Kompilierungs- und Ausführungsumgebungen zuständig sind

Nur der Reverse-Proxy ist nach außen hin zugänglich, während alle anderen Dienste innerhalb des internen Netzwerks isoliert bleiben, wodurch die Angriffsfläche der Plattform verringert wird.

![server](https://belastr.dev/static/fha-gipcode/server.png)

![local](https://belastr.dev/static/fha-gipcode/local.png)

## Offline-First-Desktop-Erlebnis

Ein wesentliches Unterscheidungsmerkmal gegenüber bestehenden Programmierplattformen ist die Möglichkeit, offline zu arbeiten.

Die Plattform umfasst herunterladbare ausführbare Dateien für verschiedene Betriebssysteme, die Übungen vom zentralen Server synchronisieren. Die Studierenden können die Übungen auch ohne Internetverbindung mithilfe eines lokal installierten Compilers weiter bearbeiten und überprüfen.

Die Desktop-Anwendung gewährleistet die gleiche Funktionalität wie die Webversion, indem sie einen lokalen Webserver betreibt und über den Browser dieselbe Benutzeroberfläche anzeigt. Abgeschlossene Übermittlungen werden mit der zentralen Plattform synchronisiert, sobald die Verbindung wiederhergestellt ist.

Der Offline-Client vereint:

* einen lokalen API-Server
* einen lokalen Ausführungs-Runner
* die Logik zur Synchronisierung der Übungen
* die Authentifizierung und die Verarbeitung von Einsendungen

in einer einzigen Go-Anwendung.

![login](https://belastr.dev/static/fha-gipcode/login.png)

## Technologien

**Frontend**

* TypeScript
* React
* Tailwind CSS

**Backend**

* Node.js
* Express
* TypeScript
* Go

**Infrastruktur**

* Docker
* Redis
* PostgreSQL
* Reverse-Proxy mit TLS

**Authentifizierung und Sicherheit**

* JWT-basierte Authentifizierung
* Rollenbasierte Autorisierung
* Containerisolierte Codeausführung
* Interne Dienstkommunikation über Docker-Netzwerkfunktionen

## Wichtigste Erfolge

* Konzeption und Umsetzung einer kompletten Lernplattform von Grund auf
* Aufbau eines sicheren, verteilten Systems zur Code-Ausführung unter Verwendung isolierter Container
* Entwicklung automatisierter Validierungs- und Benotungsabläufe für Programmierübungen
* Implementierung rollenbasierter Verwaltungs- und Überwachungsfunktionen
* Erstellung eines Offline-fähigen Clients mit nahtloser Synchronisation mit der zentralen Plattform
* Aufbau einer skalierbaren Architektur, die für die zukünftige Unterstützung mehrerer Sprachen geeignet ist
`},thumbnail:"https://belastr.dev/static/fha-gipcode/exercise.png",stack:["Go","TypeScript","React","Tailwind CSS","Node.js","Vite","PostgreSQL","Redis","GitLab","Docker"],highlighted:!0},{id:"gmod-cwrp",name:{en:"Multiplayer Game Server Platform",de:"Mehrspieler Game Server Plattform"},description:{en:`Designed, developed, and continue to maintain a large-scale multiplayer game server supporting an active player community and a wide range of interconnected gameplay systems. Built entirely from the ground up, the project serves as a showcase of scalable Lua backend architecture, high-performance multiplayer systems, advanced UI development, and operational infrastructure within the constraints of the Source Engine and Garry's Mod ecosystem.

## Overview

The server provides a persistent multiplayer experience featuring player progression, regiment management, event orchestration, administrative tooling, and external service integrations. The architecture was designed to support long-term maintainability, high player concurrency, and rapid feature development through a modular codebase and structured deployment workflow.

![thumbnail](https://belastr.dev/static/gmod-cwrp/gameplay_1.png)

## Persistent Player Data & Progression

Designed and implemented a custom persistence layer responsible for storing and synchronizing player data across sessions and map changes.

The system manages:

* Character profiles
* Player ranks and permissions
* Regiment memberships
* Progression statistics
* Persistent gameplay state

Data schemas were designed to support future extensibility while maintaining efficient synchronization and retrieval during gameplay.

![in-game main menu](https://belastr.dev/static/gmod-cwrp/menu.png)

## Dynamic Event Framework

Developed a configurable event management framework enabling staff members to create and run complex in-game events without requiring code changes.

Features include:

* In-game event editor
* Dynamic role assignment
* Custom loadout configuration
* Spawn point management
* Objective and mission creation
* Automatic player registration
* Persistent event state management

The framework significantly reduced manual administration overhead while increasing flexibility for community-driven gameplay.

![gameplay screenshot](https://belastr.dev/static/gmod-cwrp/gameplay_3.png)

## Gameplay & Progression Systems

Engineered a high-performance progression system capable of processing real-time multiplayer events with minimal server impact.

The system tracks and rewards player actions including:

* Eliminations
* Assists
* Healing
* Revives
* Objective participation

XP calculations, level progression, and reward distribution were optimized to operate efficiently under high player counts while providing immediate feedback to users.

![in-game scoreboard](https://belastr.dev/static/gmod-cwrp/scoreboard.png)

## Advanced UI/UX Development

Designed and implemented a comprehensive suite of custom in-game interfaces, significantly extending the capabilities of Garry's Mod's native UI framework.

Key focus areas included:

* Responsive layouts
* Consistent design language
* Complex administrative interfaces
* Character and progression management screens
* Event management tools
* Real-time gameplay feedback

The resulting user experience closely mirrors the polish and usability standards typically associated with modern AAA multiplayer titles.

![gameplay screenshot](https://belastr.dev/static/gmod-cwrp/gameplay_2.png)

## Development Infrastructure

Established professional development workflows to support collaborative development and long-term maintainability.

Infrastructure improvements included:

* Git-based version control
* Modular project architecture
* Feature isolation through reusable components
* Automated testing and deployment workflows
* Structured release management

These practices enabled multiple developers to contribute efficiently while reducing integration risks and deployment issues.

## External Integrations & Automation

Built supporting infrastructure beyond the game server itself to streamline administration and community management.

Implemented integrations include:

* Discord bot ecosystem
* VPS-hosted backend services
* Automated webhooks
* Player management tools
* Analytics and monitoring systems
* Community automation workflows

These systems extended server functionality beyond the game client and created a unified operational platform for administrators and players.

![development structure](https://belastr.dev/static/gmod-cwrp/structure.png)

## Technologies

**Game Development**

* Lua
* Garry's Mod
* Source Engine

**Backend & Infrastructure**

* Linux VPS Hosting
* Discord APIs
* Webhooks
* Custom Backend Services

**Development & Operations**

* Git
* CI/CD Pipelines
* Modular Software Architecture

## Key Achievements

* Designed and maintained a production multiplayer platform serving an active player community
* Built scalable persistence and progression systems from the ground up
* Developed a configurable event framework eliminating the need for custom event scripting
* Created advanced AAA-inspired interfaces within Source Engine limitations
* Established modern development workflows and deployment practices
* Integrated external services for automation, analytics, and community management
* Maintained and evolved the platform through live operation and ongoing feature development`,de:`Entwurf, Entwicklung und fortlaufende Wartung eines groß angelegten Multiplayer-Spielservers, der eine aktive Spielergemeinschaft und eine Vielzahl miteinander vernetzter Spielsysteme unterstützt. Das von Grund auf neu entwickelte Projekt dient als Vorzeigeprojekt für eine skalierbare Lua-Backend-Architektur, leistungsstarke Multiplayer-Systeme, fortschrittliche UI-Entwicklung und Betriebsinfrastruktur innerhalb der Rahmenbedingungen der Source-Engine und des Garry’s-Mod-Ökosystems.

## Überblick

Der Server bietet ein beständiges Multiplayer-Erlebnis mit Spielerfortschritt, Regimentsverwaltung, Event-Koordination, Verwaltungstools und der Integration externer Dienste. Die Architektur wurde so konzipiert, dass sie durch eine modulare Codebasis und einen strukturierten Bereitstellungsworkflow langfristige Wartbarkeit, eine hohe Spieler-Parallelität und eine schnelle Funktionsentwicklung gewährleistet.

![thumbnail](https://belastr.dev/static/gmod-cwrp/gameplay_1.png)

# Persistente Spielerdaten und Spielfortschritt

Entwicklung und Implementierung einer maßgeschneiderten Persistenzschicht, die für die Speicherung und Synchronisierung von Spielerdaten über Sitzungen und Kartenwechsel hinweg zuständig ist.

Das System verwaltet:

* Charakterprofile
* Spieler-Ränge und Berechtigungen
* Regimentszugehörigkeiten
* Fortschrittsstatistiken
* Persistenten Spielzustand

Die Datenschemata wurden so konzipiert, dass sie eine zukünftige Erweiterbarkeit ermöglichen und gleichzeitig eine effiziente Synchronisierung und Abfrage während des Spiels gewährleisten.

![in-game main menu](https://belastr.dev/static/gmod-cwrp/menu.png)

## Dynamisches Event-Framework

Entwicklung eines konfigurierbaren Event-Management-Frameworks, das es Mitarbeitern ermöglicht, komplexe In-Game-Events zu erstellen und durchzuführen, ohne dass Codeänderungen erforderlich sind.

Zu den Funktionen gehören:

* In-Game-Event-Editor
* Dynamische Rollenzuweisung
* Individuelle Ausrüstungskonfiguration
* Verwaltung von Spawn-Punkten
* Erstellung von Zielen und Missionen
* Automatische Spielerregistrierung
* Verwaltung des persistenten Event-Status

Das Framework reduzierte den manuellen Verwaltungsaufwand erheblich und erhöhte gleichzeitig die Flexibilität für ein von der Community gesteuertes Gameplay.

![gameplay screenshot](https://belastr.dev/static/gmod-cwrp/gameplay_3.png)

## Gameplay und Fortschrittssysteme

Entwicklung eines leistungsstarken Fortschrittssystems, das Multiplayer-Ereignisse in Echtzeit mit minimaler Belastung des Servers verarbeiten kann.

Das System erfasst und belohnt Spieleraktionen, darunter:

* Eliminierungen
* Assists
* Heilungen
* Wiederbelebungen
* Teilnahme an Zielen

Die XP-Berechnungen, der Levelaufstieg und die Belohnungsverteilung wurden so optimiert, dass sie auch bei einer hohen Spieleranzahl effizient funktionieren und den Nutzern gleichzeitig sofortiges Feedback bieten.

![in-game scoreboard](https://belastr.dev/static/gmod-cwrp/scoreboard.png)

## Fortgeschrittene UI/UX-Entwicklung

Entwurf und Implementierung einer umfassenden Suite maßgeschneiderter In-Game-Oberflächen, wodurch die Möglichkeiten des nativen UI-Frameworks von Garry’s Mod erheblich erweitert wurden.

Zu den wichtigsten Schwerpunkten gehörten:

* Responsive Layouts
* Einheitliche Designsprache
* Komplexe Verwaltungsoberflächen
* Bildschirme zur Charakter- und Fortschrittsverwaltung
* Tools zur Eventverwaltung
* Echtzeit-Feedback zum Spielgeschehen

Die daraus resultierende Benutzererfahrung entspricht in hohem Maße den Standards hinsichtlich Ausgereiftheit und Benutzerfreundlichkeit, die man typischerweise mit modernen AAA-Multiplayer-Titeln verbindet.

![gameplay screenshot](https://belastr.dev/static/gmod-cwrp/gameplay_2.png)

## Entwicklungsinfrastruktur

Es wurden professionelle Entwicklungsabläufe etabliert, um die Zusammenarbeit bei der Entwicklung und die langfristige Wartbarkeit zu unterstützen.

Zu den Verbesserungen der Infrastruktur gehörten:

* Git-basierte Versionskontrolle
* Modulare Projektarchitektur
* Isolierung von Funktionen durch wiederverwendbare Komponenten
* Automatisierte Test- und Bereitstellungsabläufe
* Strukturiertes Release-Management

Diese Vorgehensweisen ermöglichten es mehreren Entwicklern, effizient mitzuarbeiten, und reduzierten gleichzeitig Integrationsrisiken und Probleme bei der Bereitstellung.

## Externe Integrationen und Automatisierung

Es wurde eine unterstützende Infrastruktur aufgebaut, die über den Spielserver hinausgeht, um die Administration und das Community-Management zu optimieren.

Zu den implementierten Integrationen gehören:

* Discord-Bot-Ökosystem
* Auf VPS gehostete Backend-Dienste
* Automatisierte Webhooks
* Tools zur Spielerverwaltung
* Analyse- und Überwachungssysteme
* Automatisierte Workflows für die Community

Diese Systeme erweiterten die Serverfunktionalität über den Spiel-Client hinaus und schufen eine einheitliche Betriebsplattform für Administratoren und Spieler.

![development structure](https://belastr.dev/static/gmod-cwrp/structure.png)

## Technologien

**Spieleentwicklung**

* Lua
* Garry's Mod
* Source Engine

**Backend & Infrastruktur**

* Linux-VPS-Hosting
* Discord-APIs
* Webhooks
* Maßgeschneiderte Backend-Dienste

**Entwicklung & Betrieb**

* Git
* CI/CD-Pipelines
* Modulare Softwarearchitektur

## Wichtigste Erfolge

* Konzeption und Wartung einer Multiplayer-Plattform im Live-Betrieb für eine aktive Spielergemeinschaft
* Entwicklung skalierbarer Persistenz- und Fortschrittssysteme von Grund auf
* Entwicklung eines konfigurierbaren Event-Frameworks, das benutzerdefinierte Event-Skripte überflüssig macht
* Erstellung fortschrittlicher, von AAA-Titeln inspirierter Benutzeroberflächen innerhalb der Grenzen der Source-Engine
* Etablierung moderner Entwicklungsabläufe und Bereitstellungsverfahren
* Integrierte externe Dienste für Automatisierung, Analytik und Community-Management
* Wartung und Weiterentwicklung der Plattform im Rahmen des Live-Betriebs und der fortlaufenden Funktionsentwicklung`},thumbnail:"https://belastr.dev/static/gmod-cwrp/gameplay_1.png",stack:["Lua","SQLite","GitHub"],highlighted:!0},{id:"ai-app-content",name:{en:"AI-Powered Business App Generation Platform",de:"KI-gestützte Business App Generierungs Plattform"},description:{en:`Contributed as a Backend Developer to an interdisciplinary university-industry project focused on automating mobile app creation for small and medium-sized enterprises (SMEs). The platform generates fully populated app concepts within minutes by collecting publicly available business information, analyzing it using AI, and transforming the results into structured application content.

![preview](https://belastr.dev/static/ai-app-content/preview.png)

Users can select a business through an interactive map interface or provide a website URL, after which the platform automatically gathers relevant information and generates a customized app preview, significantly reducing the manual effort typically required during the early stages of app development.

![start](https://belastr.dev/static/ai-app-content/start.png)

## Overview

The project combines large-scale data acquisition, AI-assisted content generation, and real-time content delivery into a unified workflow. By automating the collection and transformation of business information, the platform demonstrates how modern AI systems can accelerate digitalization processes for small and medium-sized companies.

As part of the backend team, I was responsible for designing and implementing core systems responsible for data extraction, AI processing, performance optimization, and service integration.

## Automated Data Acquisition

Developed backend services responsible for collecting and normalizing publicly available business information from multiple online sources.

Responsibilities included:

* Website crawling and content extraction
* Structured data parsing
* Business information normalization
* Data quality validation
* Integration of map and location-based services

The resulting pipelines transformed heterogeneous web content into consistent data structures suitable for downstream processing and AI analysis.

## AI Processing & Prompt Engineering

Designed and continuously refined AI workflows responsible for transforming raw business information into meaningful application content.

Key areas of focus included:

* Prompt engineering for content generation
* Information extraction and summarization
* Structured content transformation
* Accuracy and consistency improvements
* Response quality evaluation

Special attention was given to balancing output quality with operational constraints such as response latency and API costs, ensuring the solution remained practical for real-world usage scenarios.

## High-Performance Backend Architecture

Implemented backend components optimized for near real-time processing to support an interactive user experience.

Performance considerations included:

* Efficient data processing pipelines
* Low-latency service communication
* Parallelized processing workflows
* Request throughput optimization
* Resource-efficient AI integration

The resulting architecture enabled users to receive generated app previews within minutes while maintaining responsiveness across the system.

## End-to-End Content Generation Pipeline

Contributed to the integration of multiple subsystems into a cohesive automated workflow.

The pipeline included:

1. Business discovery and selection
2. Data extraction from public sources
3. Content normalization and enrichment
4. AI-driven analysis and transformation
5. Delivery of generated app content to the frontend

This approach demonstrated how AI and automation can significantly reduce manual content creation efforts during software product onboarding.

## Agile Development & Collaboration

Worked within a cross-functional Scrum team consisting of students from:

* Computer Science
* Business Informatics
* Design

The project was conducted under academic supervision and in collaboration with an industry partner, requiring regular sprint planning, reviews, stakeholder presentations, and interdisciplinary coordination.

This environment provided practical experience in translating technical solutions into business value while collaborating closely with designers and domain experts.

## Technologies

**Backend Development**

* REST APIs
* Data Processing Pipelines
* Web Crawling & Parsing

**Artificial Intelligence**

* OpenAI APIs
* Prompt Engineering
* AI-Assisted Content Generation

**Software Engineering**

* Agile / Scrum
* Cross-Functional Development
* System Integration
* Performance Optimization

## Key Achievements

* Developed automated pipelines for extracting and normalizing business information from public online sources
* Engineered AI workflows that transformed raw business data into application-ready content
* Optimized prompts and processing logic for response quality, latency, and operational cost efficiency
* Built backend services capable of supporting near real-time content generation
* Integrated data acquisition, AI processing, and frontend delivery into a seamless end-to-end workflow
* Collaborated successfully in an interdisciplinary Scrum team with academic and industry stakeholders
* Demonstrated how AI-driven automation can significantly accelerate business application creation`,de:`Als Backend-Entwickler wirkte ich an einem interdisziplinären Projekt zwischen Hochschule und Industrie mit, dessen Schwerpunkt auf der Automatisierung der Erstellung mobiler Apps für kleine und mittlere Unternehmen (KMU) lag. Die Plattform generiert innerhalb weniger Minuten vollständig ausgefüllte App-Konzepte, indem sie öffentlich zugängliche Unternehmensinformationen sammelt, diese mithilfe von KI analysiert und die Ergebnisse in strukturierte App-Inhalte umwandelt.

![preview](https://belastr.dev/static/ai-app-content/preview.png)

Nutzer können über eine interaktive Kartenoberfläche ein Unternehmen auswählen oder eine Website-URL angeben. Daraufhin sammelt die Plattform automatisch relevante Informationen und generiert eine maßgeschneiderte App-Vorschau, wodurch der manuelle Aufwand, der normalerweise in den frühen Phasen der App-Entwicklung anfällt, erheblich reduziert wird.

![start](https://belastr.dev/static/ai-app-content/start.png)

## Überblick

Das Projekt vereint groß angelegte Datenerfassung, KI-gestützte Inhaltsgenerierung und die Bereitstellung von Inhalten in Echtzeit zu einem einheitlichen Workflow. Durch die Automatisierung der Erfassung und Aufbereitung von Unternehmensinformationen zeigt die Plattform, wie moderne KI-Systeme Digitalisierungsprozesse für kleine und mittelständische Unternehmen beschleunigen können.

Als Teil des Backend-Teams war ich für den Entwurf und die Implementierung von Kernsystemen verantwortlich, die für die Datenextraktion, die KI-Verarbeitung, die Leistungsoptimierung und die Service-Integration zuständig waren.

## Automatisierte Datenerfassung

Entwicklung von Backend-Diensten zur Erfassung und Normalisierung öffentlich zugänglicher Unternehmensinformationen aus verschiedenen Online-Quellen.

Zu meinen Aufgaben gehörten:

* Crawling von Websites und Extraktion von Inhalten
* Parsing strukturierter Daten
* Normalisierung von Geschäftsinformationen
* Validierung der Datenqualität
* Integration von Karten- und standortbasierten Diensten

Die daraus resultierenden Pipelines wandelten heterogene Webinhalte in konsistente Datenstrukturen um, die für die nachgelagerte Verarbeitung und KI-Analyse geeignet waren.

## KI-Verarbeitung & Prompt-Engineering

Ich entwarf und optimierte kontinuierlich KI-Workflows, die für die Umwandlung von Rohdaten aus dem Geschäftsbereich in aussagekräftige Anwendungsinhalte zuständig waren.

Zu den Schwerpunkten gehörten:

* Prompt-Engineering zur Inhaltsgenerierung
* Informationsextraktion und -zusammenfassung
* Transformation strukturierter Inhalte
* Verbesserungen hinsichtlich Genauigkeit und Konsistenz
* Bewertung der Antwortqualität

Besonderes Augenmerk wurde auf die Abwägung zwischen Ausgabequalität und betrieblichen Einschränkungen wie Antwortlatenz und API-Kosten gelegt, um sicherzustellen, dass die Lösung für reale Anwendungsszenarien praktikabel blieb.

## Hochleistungsfähige Backend-Architektur

Implementierung von Backend-Komponenten, die für die Verarbeitung nahezu in Echtzeit optimiert sind, um eine interaktive Benutzererfahrung zu unterstützen.

Zu den Leistungsaspekten gehörten:

* Effiziente Datenverarbeitungspipelines
* Dienstkommunikation mit geringer Latenz
* Parallelisierte Verarbeitungsworkflows
* Optimierung des Anfragedurchsatzes
* Ressourceneffiziente KI-Integration

Die daraus resultierende Architektur ermöglichte es den Benutzern, innerhalb weniger Minuten generierte App-Vorschauen zu erhalten, während die Reaktionsfähigkeit des gesamten Systems gewahrt blieb.

## End-to-End-Pipeline zur Inhaltsgenerierung

Ich trug zur Integration mehrerer Teilsysteme in einen zusammenhängenden, automatisierten Workflow bei.

Die Pipeline umfasste:

1. Ermittlung und Auswahl von Geschäftsprozessen
2. Datenextraktion aus öffentlichen Quellen
3. Normalisierung und Anreicherung von Inhalten
4. KI-gesteuerte Analyse und Transformation
5. Bereitstellung der generierten App-Inhalte an das Frontend

Dieser Ansatz zeigte, wie KI und Automatisierung den manuellen Aufwand bei der Erstellung von Inhalten während der Einführungsphase von Softwareprodukten erheblich reduzieren können.

## Agile Entwicklung und Zusammenarbeit

Arbeitete in einem funktionsübergreifenden Scrum-Team, das sich aus Studierenden folgender Fachrichtungen zusammensetzte:

* Informatik
* Wirtschaftsinformatik
* Design

Das Projekt wurde unter akademischer Betreuung und in Zusammenarbeit mit einem Industriepartner durchgeführt und erforderte regelmäßige Sprintplanungen, Reviews, Präsentationen vor Stakeholdern sowie interdisziplinäre Koordination.

Dieses Umfeld bot praktische Erfahrungen darin, technische Lösungen in geschäftlichen Mehrwert umzusetzen und dabei eng mit Designern und Fachexperten zusammenzuarbeiten.

## Technologien

**Backend-Entwicklung**

* REST-APIs
* Datenverarbeitungspipelines
* Web-Crawling und -Parsing

**Künstliche Intelligenz**

* OpenAI-APIs
* Prompt-Engineering
* KI-gestützte Inhaltsgenerierung

**Softwareentwicklung**

* Agile / Scrum
* Funktionsübergreifende Entwicklung
* Systemintegration
* Leistungsoptimierung

## Wichtigste Erfolge

* Entwicklung automatisierter Pipelines zur Extraktion und Normalisierung von Geschäftsinformationen aus öffentlichen Online-Quellen
* Entwicklung von KI-Workflows, die Rohdaten aus dem Geschäftsbereich in anwendungsfertige Inhalte umwandelten
* Optimierung von Prompts und Verarbeitungslogik hinsichtlich Antwortqualität, Latenz und betrieblicher Kosteneffizienz
* Aufbau von Backend-Diensten, die die Erstellung von Inhalten nahezu in Echtzeit unterstützen
* Integration von Datenerfassung, KI-Verarbeitung und Frontend-Bereitstellung in einen nahtlosen End-to-End-Workflow
* Erfolgreiche Zusammenarbeit in einem interdisziplinären Scrum-Team mit Akteuren aus Wissenschaft und Industrie
* Demonstration, wie KI-gesteuerte Automatisierung die Erstellung von Geschäftsanwendungen erheblich beschleunigen kann`},thumbnail:"https://belastr.dev/static/ai-app-content/preview.png",stack:["PHP","Laravel","MySQL","GitLab"]},{id:"gmod-monitor",name:{en:"Game Server Monitoring & Analytics Platform",de:"Plattform zur Überwachung und Analyse von Spielservern"},description:{en:`Developed a monitoring and analytics platform for Garry's Mod servers that collects operational metrics and player activity data, stores historical information, and exposes analytics through a REST API and web dashboard.

The project was designed to provide server operators with long-term visibility into player activity trends while maintaining a lightweight and configurable deployment model.

## Overview

The platform periodically polls game servers using the SourceQuery protocol to retrieve server status and player information. Collected data is persisted for historical analysis and made available through a REST API that can be consumed by dashboards, external tools, or third-party integrations.

A configurable polling system allows operators to define monitored servers, adjust collection intervals, and run the platform in a simulation mode for development and testing.

![architecture](https://belastr.dev/static/gmod-monitor/architecture.png)

## Data Collection & Processing

Implemented a polling service responsible for:

* Querying Garry's Mod servers via SourceQuery
* Collecting server status information
* Tracking player counts over time
* Storing historical metrics for analysis
* Supporting configurable polling intervals

For development and testing environments, the poller can operate in a simulation mode that generates realistic randomized datasets without requiring access to live game servers.

![dashboard screenshot](https://belastr.dev/static/gmod-monitor/dashboard_top.png)

## Analytics & Visualization

Built a time-series analytics system capable of presenting player activity across multiple time ranges:

* Last Hour
* Last 24 Hours
* Last 7 Days
* Last 30 Days
* Last 90 Days

To maintain readability and performance across larger datasets, multiple polling results are aggregated into individual chart intervals, providing:

* Minimum player count
* Maximum player count
* Average player count

This approach enables efficient visualization of long-term trends while preserving meaningful statistical information.

![dashboard screenshot](https://belastr.dev/static/gmod-monitor/dashboard_bottom.png)

## API & Configuration

The platform exposes collected metrics through a REST API, allowing integration with custom dashboards and external monitoring systems.

Runtime behavior is fully configurable through environment variables, including:

* Monitored server list
* Polling frequency
* Database configuration
* Poller operating mode
* Development and testing settings

![api](https://belastr.dev/static/gmod-monitor/api.png)

## Technologies

* Go
* REST APIs
* SourceQuery Protocol
* Time-Series Data Processing
* SQL Databases
* Docker
* Environment-Based Configuration

## Key Achievements

* Built an automated monitoring solution for multiplayer game servers
* Implemented configurable SourceQuery-based data collection
* Developed historical player analytics with statistical aggregation
* Designed a REST API for dashboards and third-party integrations
* Added simulation capabilities to simplify testing and development
* Created scalable visualizations for long-term player activity analysis`,de:`Entwicklung einer Überwachungs- und Analyseplattform für Garry’s Mod-Server, die Betriebskennzahlen und Daten zur Spieleraktivität erfasst, historische Informationen speichert und Analysen über eine REST-API sowie ein Web-Dashboard bereitstellt.

Das Projekt wurde konzipiert, um Serverbetreibern einen langfristigen Einblick in Trends der Spieleraktivität zu ermöglichen und gleichzeitig ein schlankes und konfigurierbares Bereitstellungsmodell beizubehalten.

## Überblick

Die Plattform fragt Spielserver regelmäßig über das SourceQuery-Protokoll ab, um Serverstatus und Spielerinformationen abzurufen. Die gesammelten Daten werden für historische Analysen gespeichert und über eine REST-API bereitgestellt, die von Dashboards, externen Tools oder Integrationen von Drittanbietern genutzt werden kann.

Ein konfigurierbares Abfragesystem ermöglicht es Betreibern, überwachte Server zu definieren, Erfassungsintervalle anzupassen und die Plattform im Simulationsmodus für Entwicklungs- und Testzwecke zu betreiben.

![architecture](https://belastr.dev/static/gmod-monitor/architecture.png)

## Datenerfassung und -verarbeitung

Es wurde ein Abfragedienst implementiert, der für Folgendes zuständig ist:

* Abfrage von Garry’s Mod-Servern über SourceQuery
* Erfassung von Serverstatusinformationen
* Verfolgung der Spielerzahlen im Zeitverlauf
* Speicherung historischer Metriken zur Analyse
* Unterstützung konfigurierbarer Abfrageintervalle

Für Entwicklungs- und Testumgebungen kann der Poller in einem Simulationsmodus betrieben werden, der realistische, zufällige Datensätze generiert, ohne dass ein Zugriff auf Live-Spielserver erforderlich ist.

![dashboard screenshot](https://belastr.dev/static/gmod-monitor/dashboard_top.png)

## Analyse und Visualisierung

Es wurde ein Zeitreihen-Analysesystem entwickelt, das die Spieleraktivität über mehrere Zeiträume hinweg darstellen kann:

* Letzte Stunde
* Letzte 24 Stunden
* Letzte 7 Tage
* Letzte 30 Tage
* Letzte 90 Tage

Um die Lesbarkeit und Leistung bei größeren Datensätzen zu gewährleisten, werden mehrere Abfrageergebnisse zu einzelnen Diagrammintervallen aggregiert, wodurch folgende Werte bereitgestellt werden:

* Minimale Spieleranzahl
* Maximale Spieleranzahl
* Durchschnittliche Spieleranzahl

Dieser Ansatz ermöglicht eine effiziente Visualisierung langfristiger Trends unter Beibehaltung aussagekräftiger statistischer Informationen.

![dashboard screenshot](https://belastr.dev/static/gmod-monitor/dashboard_bottom.png)

## API & Konfiguration

Die Plattform stellt die erfassten Metriken über eine REST-API bereit und ermöglicht so die Integration in benutzerdefinierte Dashboards und externe Überwachungssysteme.

Das Laufzeitverhalten ist über Umgebungsvariablen vollständig konfigurierbar, darunter:

* Liste der überwachten Server
* Abfragehäufigkeit
* Datenbankkonfiguration
* Betriebsmodus des Pollers
* Entwicklungs- und Testeinstellungen

![api](https://belastr.dev/static/gmod-monitor/api.png)

## Technologien

* Go
* REST-APIs
* SourceQuery-Protokoll
* Zeitreihendatenverarbeitung
* SQL-Datenbanken
* Docker
* Umgebungsbasierte Konfiguration

## Wichtigste Erfolge

* Entwicklung einer automatisierten Überwachungslösung für Multiplayer-Spieleserver
* Implementierung einer konfigurierbaren, auf SourceQuery basierenden Datenerfassung
* Entwicklung historischer Spieleranalysen mit statistischer Aggregation
* Entwurf einer REST-API für Dashboards und Integrationen mit Drittanbietern
* Hinzufügung von Simulationsfunktionen zur Vereinfachung von Tests und Entwicklung
* Erstellung skalierbarer Visualisierungen für die langfristige Analyse der Spieleraktivität`},thumbnail:"https://belastr.dev/static/gmod-monitor/dashboard_top.png",stack:["Python","TypeScript","React","Vite","PostgreSQL","Docker"]},{id:"gmod-debugger",name:{en:"Developer Diagnostics & Observability Toolkit",de:"Toolkit für Entwicklerdiagnose und Observability"},description:{en:`Developed a modular diagnostics and observability toolkit for Garry's Mod servers, designed to provide developers and administrators with real-time access to debugging information, performance metrics, and operational insights directly from within the game.

The project focuses on reducing the time required to investigate issues by making relevant runtime information immediately accessible through configurable in-game interfaces and external reporting integrations.

## Overview

The toolkit consists of multiple independent modules, each responsible for collecting and exposing a specific category of diagnostic data. Information can be viewed directly through in-game administrative interfaces or exported to external systems for monitoring, logging, and incident investigation.

The architecture was designed with extensibility in mind, allowing new diagnostic modules to be added without affecting existing functionality.

## Modular Data Collection

Implemented a plugin-style architecture that enables individual modules to gather and expose information from different areas of the game server.

Examples include:

* Runtime state inspection
* Entity and player diagnostics
* System and performance metrics
* Administrative debugging tools
* Event and activity tracking
* Custom data collection modules

Collected information is centralized and made available through a unified interface for rapid troubleshooting.

![menu](https://belastr.dev/static/gmod-debugger/menu.png)

## In-Game Developer Tools

Designed configurable in-game interfaces that allow administrators and developers to inspect server state without requiring external tools or direct server access.

Features include:

* Real-time diagnostics
* Searchable information views
* Context-sensitive debugging tools
* Configurable module visibility
* Administrative access controls

The goal is to minimize context switching and provide actionable information where it is most useful: directly within the running environment.

![logs](https://belastr.dev/static/gmod-debugger/logs.png)

## External Integrations & Reporting

Developed integrations that allow collected diagnostics to be forwarded to external services for analysis and long-term retention.

Supported workflows include:

* Discord webhook notifications
* Discord bot integrations
* Server-side data exports
* Automated reporting
* Remote troubleshooting support

These integrations enable operational visibility even when administrators are not actively connected to the server.

## Configuration & Extensibility

A strong emphasis was placed on configurability to accommodate different server environments and administrative workflows.

The system provides:

* Per-module configuration
* Custom reporting settings
* Permission-based access control
* Flexible notification routing
* Extensible module registration

This allows server operators to tailor the toolkit to their specific monitoring and debugging requirements.

![config](https://belastr.dev/static/gmod-debugger/config.png)

## Current Development

The project remains under active development, with ongoing work focused on improving architecture, maintainability, and scalability. Future plans include a significant refactor and rebuild of core components to streamline module development and provide a cleaner foundation for long-term growth.

## Technologies

* Lua
* Garry's Mod
* Discord APIs
* Webhooks
* Modular Plugin Architecture

## Key Achievements

* Built a modular diagnostics and observability platform for live game servers
* Created real-time in-game tooling for debugging and operational analysis
* Implemented external reporting through Discord integrations and webhooks
* Designed an extensible architecture supporting independent diagnostic modules
* Reduced troubleshooting complexity by centralizing runtime information
* Established a foundation for future expansion and architectural improvements`,de:`Entwicklung eines modularen Toolkits für Entwicklerdiagnose und Observability für Garry’s Mod-Server, das Entwicklern und Administratoren direkt aus dem Spiel heraus Echtzeit-Zugriff auf Debugging-Informationen, Leistungsmetriken und Einblicke in den Betrieb ermöglicht.

Das Projekt zielt darauf ab, den Zeitaufwand für die Untersuchung von Problemen zu reduzieren, indem relevante Laufzeitinformationen über konfigurierbare Schnittstellen im Spiel und externe Berichtsintegrationen sofort zugänglich gemacht werden.

## Überblick

Das Toolkit besteht aus mehreren unabhängigen Modulen, von denen jedes für die Erfassung und Bereitstellung einer bestimmten Kategorie von Diagnosedaten zuständig ist. Die Informationen können direkt über Verwaltungsschnittstellen im Spiel eingesehen oder zur Überwachung, Protokollierung und Untersuchung von Vorfällen in externe Systeme exportiert werden.

Die Architektur wurde mit Blick auf Erweiterbarkeit konzipiert, sodass neue Diagnosemodule hinzugefügt werden können, ohne die bestehende Funktionalität zu beeinträchtigen.

## Modulare Datenerfassung

Es wurde eine Plugin-basierte Architektur implementiert, die es einzelnen Modulen ermöglicht, Informationen aus verschiedenen Bereichen des Spielservers zu erfassen und bereitzustellen.

Beispiele hierfür sind:

* Überprüfung des Laufzeitzustands
* Entitäts- und Spielerdiagnose
* System- und Leistungsmetriken
* Administrative Debugging-Tools
* Ereignis- und Aktivitätsverfolgung
* Benutzerdefinierte Datenerfassungsmodule

Die erfassten Informationen werden zentralisiert und über eine einheitliche Schnittstelle für eine schnelle Fehlerbehebung bereitgestellt.

![menu](https://belastr.dev/static/gmod-debugger/menu.png)

## Entwickler-Tools im Spiel

Entwicklung konfigurierbarer Schnittstellen im Spiel, die es Administratoren und Entwicklern ermöglichen, den Serverstatus zu überprüfen, ohne dass externe Tools oder direkter Serverzugriff erforderlich sind.

Zu den Funktionen gehören:

* Echtzeit-Diagnose
* Durchsuchbare Informationsansichten
* Kontextsensitive Debugging-Tools
* Konfigurierbare Sichtbarkeit von Modulen
* Administrative Zugriffskontrollen

Das Ziel ist es, Kontextwechsel zu minimieren und verwertbare Informationen dort bereitzustellen, wo sie am nützlichsten sind: direkt in der laufenden Umgebung.

![logs](https://belastr.dev/static/gmod-debugger/logs.png)

## Externe Integrationen und Berichterstellung

Es wurden Integrationen entwickelt, die es ermöglichen, gesammelte Diagnosedaten zur Analyse und langfristigen Speicherung an externe Dienste weiterzuleiten.

Zu den unterstützten Workflows gehören:

* Discord-Webhook-Benachrichtigungen
* Discord-Bot-Integrationen
* Serverseitige Datenexporte
* Automatisierte Berichterstellung
* Unterstützung bei der Fernfehlerbehebung

Diese Integrationen ermöglichen operative Transparenz, selbst wenn Administratoren nicht aktiv mit dem Server verbunden sind.

## Konfiguration & Erweiterbarkeit

Besonderer Wert wurde auf die Konfigurierbarkeit gelegt, um unterschiedlichen Serverumgebungen und administrativen Arbeitsabläufen gerecht zu werden.

Das System bietet:

* Modulbezogene Konfiguration
* Benutzerdefinierte Berichtseinstellungen
* Berechtigungsbasierte Zugriffskontrolle
* Flexible Benachrichtigungsweiterleitung
* Erweiterbare Modulregistrierung

Dadurch können Serverbetreiber das Toolkit an ihre spezifischen Anforderungen hinsichtlich Überwachung und Fehlerbehebung anpassen.

![config](https://belastr.dev/static/gmod-debugger/config.png)

## Aktueller Entwicklungsstand

Das Projekt befindet sich weiterhin in aktiver Entwicklung, wobei der Schwerpunkt auf der Verbesserung der Architektur, der Wartbarkeit und der Skalierbarkeit liegt. Zukünftige Pläne umfassen eine umfassende Überarbeitung und Neugestaltung der Kernkomponenten, um die Modulentwicklung zu optimieren und eine solidere Grundlage für langfristiges Wachstum zu schaffen.

## Technologien

* Lua
* Garry’s Mod
* Discord-APIs
* Webhooks
* Modulare Plugin-Architektur

## Wichtigste Erfolge

* Aufbau einer modularen Diagnose- und Observability-Plattform für Live-Spielserver
* Entwicklung von Echtzeit-Tools im Spiel für die Fehlerbehebung und Betriebsanalyse
* Implementierung externer Berichterstellung durch Discord-Integrationen und Webhooks
* Entwurf einer erweiterbaren Architektur, die unabhängige Diagnosemodule unterstützt
* Reduzierung der Komplexität bei der Fehlerbehebung durch Zentralisierung von Laufzeitinformationen
* Schaffung einer Grundlage für zukünftige Erweiterungen und architektonische Verbesserungen`},thumbnail:"https://belastr.dev/static/gmod-debugger/logs.png",stack:["Lua","Python","Node.js","SQLite","Docker"]},{id:"portfolio",name:{en:"This Personal Portfolio Website",de:"Diese Persönliche Portfolio-Website"},description:{en:`Designed and developed a fully static personal portfolio website to showcase software engineering projects, technical experience, and professional skills. The website serves as a central hub for presenting project work while emphasizing performance, maintainability, accessibility, and responsive design.

The visual design is heavily inspired by the modern aesthetic and layout principles used across Meta's public-facing websites, adapted into a lightweight, independently developed implementation.

## Overview

The portfolio is built using a modern TypeScript-based frontend stack and is compiled into static assets during the build process. The generated website is hosted through GitHub Pages, providing a simple deployment workflow while benefiting from the reliability and scalability of static hosting.

The project was designed with a strong focus on:

* Fast loading times
* Responsive layouts
* Accessibility
* Multilingual content
* Long-term maintainability
* Minimal hosting requirements

## Static Site Architecture

Implemented the website using Deno, TypeScript, React, Tailwind CSS, and standard web technologies.

The build process generates fully static HTML, CSS, and JavaScript assets, eliminating the need for server-side infrastructure while maintaining a modern user experience.

Key advantages of this approach include:

* Reduced operational complexity
* Low hosting costs
* Improved security through static deployment
* High performance and caching efficiency

The final build artifacts are deployed through a dedicated GitHub Pages repository.

## Responsive Design

Developed a responsive layout that adapts to a wide range of screen sizes and devices.

Features include:

* Desktop and mobile optimized layouts
* Adaptive content presentation
* Flexible component sizing
* Touch-friendly navigation
* Responsive project and content sections

On smaller screens, the primary navigation automatically transitions into a sidebar-style menu to improve usability and maximize available screen space.

## Theme Support

Implemented automatic light and dark mode support based on the user's operating system or browser preferences.

The theme system provides:

* Automatic preference detection
* Consistent styling across components
* Improved readability in different environments
* Seamless theme switching without additional user configuration

## Internationalization

Built the website with full bilingual content support, allowing visitors to switch between English and German.

All portfolio content is maintained in both languages and can be toggled dynamically without requiring separate website versions.

This approach ensures accessibility for both international and German-speaking audiences while keeping content management centralized.

## Content Generation Workflow

Project descriptions are authored in Markdown format to improve readability and maintain a clean content structure.

To streamline documentation efforts:

* Initial English project descriptions were generated with ChatGPT
* Content is stored and rendered as Markdown
* German translations were created using DeepL
* Both language versions are integrated directly into the website

This workflow enables consistent presentation while reducing the effort required to maintain multilingual project documentation.

## Technologies

**Frontend**

* TypeScript
* React
* Tailwind CSS
* HTML

**Build & Deployment**

* Deno
* Static Site Generation
* GitHub Pages

**Content Management**

* Markdown
* Internationalization (i18n)

## Key Achievements

* Designed and implemented a fully static portfolio website from scratch
* Built a Deno-powered static generation workflow
* Created responsive layouts for desktop and mobile devices
* Implemented automatic light and dark mode support
* Added bilingual English and German content management
* Established a Markdown-based content workflow for project documentation
* Deployed the site through GitHub Pages with zero server-side infrastructure
* Recreated and adapted design concepts inspired by Meta's web presence`,de:`Entwurf und Entwicklung einer vollständig statischen persönlichen Portfolio-Website zur Präsentation von Software-Engineering-Projekten, technischer Erfahrung und beruflicher Kompetenz. Die Website dient als zentrale Plattform zur Präsentation von Projektarbeiten, wobei der Schwerpunkt auf Leistung, Wartbarkeit, Barrierefreiheit und responsivem Design liegt.

Das visuelle Design ist stark von der modernen Ästhetik und den Layout-Prinzipien inspiriert, die auf den öffentlich zugänglichen Websites von Meta zum Einsatz kommen, und wurde in eine schlanke, eigenständig entwickelte Implementierung übertragen.

## Überblick

Das Portfolio basiert auf einem modernen, TypeScript-basierten Frontend-Stack und wird während des Build-Prozesses zu statischen Assets kompiliert. Die generierte Website wird über GitHub Pages gehostet, was einen einfachen Deployment-Workflow ermöglicht und gleichzeitig von der Zuverlässigkeit und Skalierbarkeit des statischen Hostings profitiert.

Bei der Konzeption des Projekts lag der Schwerpunkt auf folgenden Aspekten:

* Schnelle Ladezeiten
* Responsive Layouts
* Barrierefreiheit
* Mehrsprachige Inhalte
* Langfristige Wartbarkeit
* Minimale Hosting-Anforderungen

## Architektur der statischen Website

Die Website wurde mit Deno, TypeScript, React, Tailwind CSS und Standard-Webtechnologien implementiert.

Der Build-Prozess generiert vollständig statische HTML-, CSS- und JavaScript-Assets, wodurch keine serverseitige Infrastruktur erforderlich ist und gleichzeitig eine moderne Benutzererfahrung gewährleistet bleibt.

Zu den wichtigsten Vorteilen dieses Ansatzes gehören:

* Geringere Komplexität im Betrieb
* Niedrige Hosting-Kosten
* Verbesserte Sicherheit durch statische Bereitstellung
* Hohe Leistung und Caching-Effizienz

Die fertigen Build-Artefakte werden über ein eigenes GitHub-Pages-Repository bereitgestellt.

## Responsives Design

Es wurde ein responsives Layout entwickelt, das sich an eine Vielzahl von Bildschirmgrößen und Geräten anpasst.

Zu den Funktionen gehören:

* Für Desktop- und Mobilgeräte optimierte Layouts
* Adaptive Darstellung der Inhalte
* Flexible Größenanpassung der Komponenten
* Touch-freundliche Navigation
* Responsive Projekt- und Inhaltsbereiche

Auf kleineren Bildschirmen wechselt die Hauptnavigation automatisch zu einem Menü im Sidebar-Stil, um die Benutzerfreundlichkeit zu verbessern und den verfügbaren Bildschirmplatz optimal zu nutzen.

## Theme-Unterstützung

Es wurde eine automatische Unterstützung für den Hell- und Dunkelmodus implementiert, die sich nach dem Betriebssystem oder den Browsereinstellungen des Nutzers richtet.

Das Theme-System bietet:

* Automatische Erkennung der Einstellungen
* Einheitliches Styling über alle Komponenten hinweg
* Verbesserte Lesbarkeit in verschiedenen Umgebungen
* Nahtloser Themenwechsel ohne zusätzliche Benutzerkonfiguration

## Internationalisierung

Die Website wurde mit vollständiger Unterstützung für zweisprachige Inhalte erstellt, sodass Besucher zwischen Englisch und Deutsch wechseln können.

Alle Portfolio-Inhalte werden in beiden Sprachen gepflegt und können dynamisch umgeschaltet werden, ohne dass separate Website-Versionen erforderlich sind.

Dieser Ansatz gewährleistet die Barrierefreiheit sowohl für ein internationales als auch für ein deutschsprachiges Publikum und sorgt gleichzeitig für eine zentralisierte Inhaltsverwaltung.

## Workflow zur Inhaltserstellung

Projektbeschreibungen werden im Markdown-Format verfasst, um die Lesbarkeit zu verbessern und eine übersichtliche Inhaltsstruktur zu gewährleisten.

Zur Optimierung des Dokumentationsaufwands:

* Die ersten englischen Projektbeschreibungen wurden mit ChatGPT generiert
* Die Inhalte werden als Markdown gespeichert und gerendert
* Die deutschen Übersetzungen wurden mit DeepL erstellt
* Beide Sprachversionen werden direkt in die Website integriert

Dieser Workflow ermöglicht eine einheitliche Darstellung und reduziert gleichzeitig den Aufwand für die Pflege der mehrsprachigen Projektdokumentation.

## Technologien

**Frontend**

* TypeScript
* React
* Tailwind CSS
* HTML

**Build & Bereitstellung**

* Deno
* Statische Website-Generierung
* GitHub Pages

**Inhaltsverwaltung**

* Markdown
* Internationalisierung (i18n)

## Wichtigste Erfolge

* Entwurf und Umsetzung einer vollständig statischen Portfolio-Website von Grund auf
* Aufbau eines Deno-basierten Workflows zur statischen Generierung
* Erstellung responsiver Layouts für Desktop- und Mobilgeräte
* Implementierung einer automatischen Unterstützung für Hell- und Dunkelmodus
* Einbindung einer zweisprachigen Inhaltsverwaltung (Englisch und Deutsch)
* Etablierung eines Markdown-basierten Inhalts-Workflows für die Projektdokumentation
* Bereitstellung der Website über GitHub Pages ohne serverseitige Infrastruktur
* Neugestaltung und Anpassung von Designkonzepten, inspiriert vom Webauftritt von Meta`},thumbnail:"https://belastr.dev/static/portfolio/portfolio.png",stack:["TypeScript","HTML","React","Tailwind CSS","Deno","Vite","GitHub"]}];export{e as p};
