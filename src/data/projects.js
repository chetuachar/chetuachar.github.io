export const projects = [
  {
    id: 1,
    title: "IMAP API Gateway",
    description: "Architected a high-performance IMAP API using Go-Fiber and emersion/go-imap. Engineered Redis session caching to bridge frontend requests with backend IMAP servers effectively at scale.",
    tech: ["Golang", "Go-Fiber", "Redis", "Docker", "Architecture"],
    github: "https://github.com",
    live: "#",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
  },
  {
    id: 2,
    title: "SMTP API Direct Delivery System",
    description: "Developed an SMTP Gateway enabling direct delivery to MX relays, bypassing standard MTAs. Built custom SMTP communication logic via net/textproto resulting in granular status code handling and robust soft-retry mechanisms.",
    tech: ["Golang", "net/textproto", "Microservices", "Docker"],
    github: "https://github.com",
    live: "#",
    image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=800&q=80"
  },
  {
    id: 3,
    title: "Real-time Chat Engine (Che-Chat)",
    description: "Built a low-latency bidirectional WebSocket messaging platform utilizing Go-Fiber. Designed a Layered Architecture and developed dynamic middleware for real-time profanity filtering. Managed schema tracking via PostgreSQL and Goose.",
    tech: ["Golang", "WebSockets", "Clean Architecture", "PostgreSQL"],
    github: "https://github.com",
    live: "#",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&q=80"
  },
  {
    id: 4,
    title: "Secure Domain Authentication Engine",
    description: "Engineered a Go automation pipeline for DKIM key generation, secure storage, and real-time DNS provisioning via the Linode API, thereby optimizing domain authentication workflows and increasing deliverability.",
    tech: ["Golang", "DNS", "Security", "Linux"],
    github: "https://github.com",
    live: "#",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
  }
];
