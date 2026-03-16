import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, ExternalLink, FileText } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Minimalist Modern with Green Accents
 * - Clean white background with generous whitespace
 * - Sage green (#9CAF88) and mint green (#A8D5BA) accents
 * - Poppins Bold for display, Inter for body text
 * - Subtle shadows and smooth transitions
 * - Cards with left green border accent
 */

export default function Home() {
  const [activeSection, setActiveSection] = useState("experiences");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-green-100 shadow-sm">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "Poppins" }}>
              Moustapha DRAME
            </h1>
            <nav className="hidden md:flex gap-8">
              {[
                { id: "experiences", label: "Expériences" },
                { id: "projects", label: "Projets" },
                { id: "skills", label: "Compétences" },
                { id: "certificates", label: "Certificats" },
                { id: "education", label: "Formation" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-green-600 border-b-2 border-green-600"
                      : "text-gray-600 hover:text-green-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663428754519/Qw8VG83VZSS4XYd848vvpU/hero-background-5jem5o4mBMxtRLkZSj6HsW.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
              Disponible
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Poppins" }}>
              Ingénieur Full Stack & Data / IA
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Ingénieur en Génie Logiciel spécialisé en Data Science & Intelligence Artificielle, avec une solide
              expérience en développement Full-Stack et Data Engineering. Passionné par l'application de l'IA à des
              problématiques réelles. À la recherche d'un stage ou contrat.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Contact
              </Button>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                Projets
              </Button>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                CV
              </Button>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-gray-900 mb-12" style={{ fontFamily: "Poppins" }}>
            Expériences professionnelles
          </h2>
          <div className="space-y-6">
            <Card className="p-8 border-l-4 border-l-green-600 bg-green-50 border-0 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2" style={{ fontFamily: "Poppins" }}>
                Développeur Full-Stack Java / React
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Université Assane Seck – Ziguinchor | Août 2024 – Janvier 2025
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span>Développement d'une plateforme de gestion des recrutements académiques</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span>Conception d'API REST sécurisées (Spring Boot, Spring Security)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span>Développement du frontend avec React.js</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span>Mise en place CI/CD avec GitLab</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span>Méthodologie Agile / Scrum</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-gray-900 mb-12" style={{ fontFamily: "Poppins" }}>
            Projets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Plateforme de recrutement",
                description: "Application web de gestion des recrutements académiques.",
                tags: ["Spring Boot", "React"],
              },
              {
                title: "Analyse Big Data médias",
                description: "Scraping d'articles, stockage Cassandra, pipeline ETL.",
                tags: ["Python", "Cassandra"],
              },
              {
                title: "Prédiction avec LSTM",
                description: "Modélisation de données séquentielles avec réseaux LSTM.",
                tags: ["TensorFlow", "Keras"],
              },
              {
                title: "Réseaux de Neurones Artificiels (ANN) avec Iris",
                description: "Application des réseaux de neurones artificiels pour la classification sur le dataset Iris.",
                tags: ["Python", "Scikit-learn"],
              },
              {
                title: "RNN et LSTM avec California Housing",
                description: "Modélisation de données séquentielles avec RNN et LSTM pour la prédiction des prix immobiliers.",
                tags: ["TensorFlow", "Keras"],
              },
            ].map((project, index) => (
              <Card key={index} className="p-6 border-l-4 border-l-green-500 bg-white shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: "Poppins" }}>
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-gray-900 mb-12" style={{ fontFamily: "Poppins" }}>
            Compétences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "Data Science & ML",
                skills: "Python, Pandas, Scikit-learn, TensorFlow",
              },
              {
                category: "Data Engineering",
                skills: "ETL, PostgreSQL, MongoDB, Cassandra",
              },
              {
                category: "Développement Web",
                skills: "Java, Spring Boot, Node.js, React.js, Angular",
              },
              {
                category: "DevOps",
                skills: "Git, GitLab, CI/CD, Docker (notions)",
              },
              {
                category: "Base de données",
                skills: "MySQL, PostgreSQL, MongoDB",
              },
            ].map((skill, index) => (
              <Card key={index} className="p-6 border-l-4 border-l-green-500 bg-green-50 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: "Poppins" }}>
                  {skill.category}
                </h3>
                <p className="text-gray-700 text-sm">{skill.skills}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-gray-900 mb-12" style={{ fontFamily: "Poppins" }}>
            Formations
          </h2>
          <div className="space-y-6">
            {[
              {
                degree: "Master Informatique – Génie Logiciel",
                school: "Université Assane Seck",
                period: "2022 – 2024",
              },
              {
                degree: "Licence Informatique",
                school: "Université Assane Seck",
                period: "2018 – 2021",
              },
            ].map((edu, index) => (
              <Card key={index} className="p-6 border-l-4 border-l-green-600 bg-white shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-1" style={{ fontFamily: "Poppins" }}>
                  {edu.degree}
                </h3>
                <p className="text-gray-600 text-sm">
                  {edu.school} | {edu.period}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-gray-900 mb-12" style={{ fontFamily: "Poppins" }}>
            Certificats complémentaires
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Certificat Data Analysis – FORCE-N Sénégal",
                description: "Formation en analyse de données : statistiques, nettoyage de données, visualisation et exploitation des données avec Python.",
              },
              {
                title: "Certificat Cybersécurité – Cisco",
                description: "Introduction à la cybersécurité : menaces globales, vulnérabilités, sécurité des réseaux et bonnes pratiques.",
              },
              {
                title: "Certificat Développeur Full Stack – EDACY / Talent4Startup",
                description: "Programme intensif en développement web Full Stack : JavaScript, frameworks frontend, backend et gestion de projets.",
              },
              {
                title: "Certificat Développement Front-End – FORCE-N",
                description: "Développement d'interfaces web modernes : HTML, CSS, JavaScript et bonnes pratiques UX/UI.",
              },
            ].map((cert, index) => (
              <Card key={index} className="p-6 border-l-4 border-l-green-500 bg-green-50 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: "Poppins" }}>
                  {cert.title}
                </h3>
                <p className="text-gray-700 text-sm">{cert.description}</p>
                <div className="flex gap-2 mt-4">
                  <Button size="sm" variant="outline" className="border-green-600 text-green-600 hover:bg-green-100">
                    <FileText className="w-4 h-4 mr-2" />
                    Voir PDF
                  </Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                    Télécharger
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-gray-900 mb-12" style={{ fontFamily: "Poppins" }}>
            Contact
          </h2>
          <div className="max-w-2xl">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-green-600" />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <a href="mailto:drame779576559@gmail.com" className="text-gray-900 font-medium hover:text-green-600">
                    drame779576559@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Github className="w-6 h-6 text-green-600" />
                <div>
                  <p className="text-sm text-gray-600">GitHub</p>
                  <a href="#" className="text-gray-900 font-medium hover:text-green-600">
                    Drame-moustapha
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Linkedin className="w-6 h-6 text-green-600" />
                <div>
                  <p className="text-sm text-gray-600">LinkedIn</p>
                  <a href="#" className="text-gray-900 font-medium hover:text-green-600">
                    moustaphadramekandji
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container text-center">
          <p className="text-sm">© 2026 Moustapha DRAME. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
