// HomeHeader.js
import '../Portfolio.css';
import HomePortfolio from '../components/HomePortfolio';
import CertificationSlider from '../components/CertificationSlider';

const skills = [
  {
    icon: '☁️',
    title: 'Cloud Platforms',
    tags: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Oracle Cloud'],
  },
  {
    icon: '🐧',
    title: 'Linux & OS',
    tags: ['Ubuntu', 'CentOS', 'RHEL', 'Debian', 'Alpine Linux', 'Bash Scripting'],
  },
  {
    icon: '🐳',
    title: 'Containers & Orchestration',
    tags: ['Docker', 'Kubernetes', 'Helm', 'Docker Compose', 'EKS', 'GKE'],
  },
  {
    icon: '⚙️',
    title: 'DevOps & CI/CD',
    tags: ['Terraform', 'Ansible', 'Jenkins', 'GitHub Actions', 'GitLab CI', 'ArgoCD'],
  },
  {
    icon: '🤖',
    title: 'AI & ML Ops',
    tags: ['Python', 'TensorFlow', 'Vertex AI', 'AWS SageMaker', 'OpenAI API', 'LangChain'],
  },
  {
    icon: '📊',
    title: 'Monitoring & Observability',
    tags: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'CloudWatch', 'Jaeger'],
  },
];

const projects = [
  {
    icon: '🚀',
    title: 'Cloud-Native CI/CD Pipeline',
    description:
      'End-to-end automated deployment pipeline on GCP using Cloud Build, Artifact Registry, and GKE. Reduced deployment time by 70% with zero-downtime rolling updates.',
    tags: ['GCP', 'Kubernetes', 'Terraform', 'GitHub Actions'],
  },
  {
    icon: '🤖',
    title: 'AI-Powered Log Analyzer',
    description:
      'Integrated LLM-based anomaly detection into an ELK stack to surface critical alerts from thousands of log lines per second. Deployed on AWS with SageMaker inference endpoints.',
    tags: ['Python', 'OpenAI API', 'Elasticsearch', 'AWS SageMaker'],
  },
  {
    icon: '🐧',
    title: 'Linux Hardening Automation',
    description:
      'Ansible playbooks enforcing CIS benchmark Level 2 across 200+ Linux servers. Automated compliance scanning with custom Prometheus exporters and Grafana dashboards.',
    tags: ['Ansible', 'Linux', 'Prometheus', 'Grafana'],
  },
  {
    icon: '🌐',
    title: 'Multi-Cloud Infrastructure',
    description:
      'Designed and provisioned a multi-cloud hybrid architecture spanning AWS and Azure using Terraform modules. Achieved 99.99% uptime with cross-region failover.',
    tags: ['Terraform', 'AWS', 'Azure', 'VPN Gateway'],
  },
  {
    icon: '🔒',
    title: 'Kubernetes Security Platform',
    description:
      'Implemented OPA/Gatekeeper policies, network policies, and Falco runtime threat detection for a PCI-DSS compliant Kubernetes cluster serving 10M+ daily users.',
    tags: ['Kubernetes', 'OPA', 'Falco', 'Istio'],
  },
  {
    icon: '📦',
    title: 'Serverless Data Pipeline',
    description:
      'Built a real-time streaming data pipeline using Google Cloud Pub/Sub, Cloud Functions, and BigQuery. Processes 5M+ events/day with automated ML feature generation.',
    tags: ['GCP', 'Cloud Functions', 'BigQuery', 'Python'],
  },
];

function HomeHeader() {
  return (
    <div className="portfolio-section">
      <HomePortfolio />

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="hero-section">
        <div className="container text-white">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="hero-tag">🚀 Available for opportunities</div>
              <h3 className="display-4">
                Hi, I&apos;m <span className="highlight">SHANMU</span>
              </h3>
              <h1 className="hero-job-title terminal-cursor">
                Cloud &amp; DevOps Engineer
              </h1>
              <p className="hero-description mt-3">
                Building resilient, scalable infrastructure on the cloud with a passion for
                Linux, AI/ML automation, and open-source DevOps tooling. 2+ years shipping
                production-grade platforms across GCP, AWS, and Azure.
              </p>
              <div className="hero-tech-stack">
                {['Linux', 'Kubernetes', 'Terraform', 'Python', 'AWS', 'GCP', 'Azure'].map((t) => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
              <a
                href="https://www.canva.com/design/DAFxI7GaMrM/C9Yvk4KLhe2ThyG6EiG-dw/view"
                className="btn-cta-primary"
                target="_blank"
                rel="noreferrer"
              >
                View Resume
              </a>
              <a href="#contact" className="btn-cta-outline">
                Get In Touch
              </a>
            </div>
            <div className="col-lg-5 text-center mt-5 mt-lg-0">
              <div className="profile-img-wrapper">
                <img
                  src="https://i.ibb.co/gwTZd6m/Untitled-design.png"
                  alt="Shanmu – Cloud & DevOps Engineer"
                />
              </div>
              <div className="d-flex justify-content-center gap-3 mt-4">
                <div className="stat-card">
                  <div className="stat-number">2+</div>
                  <div className="stat-label">Years Exp.</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">4</div>
                  <div className="stat-label">Cloud Certs</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ───────────────────────────────────── */}
      <section id="skills" className="skills-section">
        <div className="container">
          <p className="hero-tag">💡 What I Work With</p>
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Full-stack cloud &amp; DevOps skill set spanning infrastructure, automation, and AI/ML.
          </p>
          <div className="row">
            {skills.map((cat) => (
              <div key={cat.title} className="col-md-6 col-lg-4">
                <div className="skill-category">
                  <div className="skill-category-icon">{cat.icon}</div>
                  <div className="skill-category-title">{cat.title}</div>
                  <div className="skill-tags">
                    {cat.tags.map((tag) => (
                      <span key={tag} className="skill-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ─────────────────────────────────── */}
      <section id="projects" className="projects-section">
        <div className="container">
          <p className="hero-tag">🛠️ What I&apos;ve Built</p>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Real-world cloud, DevOps, and AI projects delivered in production environments.
          </p>
          <div className="row g-4">
            {projects.map((p) => (
              <div key={p.title} className="col-md-6 col-lg-4">
                <div className="project-card">
                  <div className="project-card-header">
                    <span className="project-icon">{p.icon}</span>
                    <h5 className="project-title">{p.title}</h5>
                  </div>
                  <p className="project-description">{p.description}</p>
                  <div className="project-tech-tags">
                    {p.tags.map((tag) => (
                      <span key={tag} className="project-tech-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ───────────────────────────── */}
      <section id="certifications" className="certifications-section">
        <div className="container">
          <p className="hero-tag">🎖️ Verified Credentials</p>
          <h2 className="section-title">Cloud Certifications</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Certified across major cloud platforms — GCP, AWS, and Azure.
          </p>
          <div className="mt-3">
            <CertificationSlider />
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────── */}
      <section id="contact" className="contact-section">
        <div className="container">
          <p className="hero-tag">📬 Let&apos;s Connect</p>
          <h2 className="section-title text-center">Get In Touch</h2>
          <div className="section-divider mx-auto"></div>
          <div className="contact-card mt-4">
            <h3>Open to Cloud &amp; DevOps roles 🚀</h3>
            <p>
              Whether you have a challenging infrastructure problem, a cloud migration project,
              or just want to talk tech — my inbox is always open.
            </p>
            <div className="contact-links">
              <a
                href="https://www.linkedin.com/in/bs5"
                className="contact-link"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/shanmu-ss"
                className="contact-link"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.instagram.com/shanmu_throttler"
                className="contact-link"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeHeader;

