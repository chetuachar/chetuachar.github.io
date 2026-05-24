export const projects = [
  {
    id: 1,
    title: "IMAP API Gateway",
    description: "A high-performance REST API and microservice built in Go (Fiber) for connection-pooled IMAP/SMTP server interaction, featuring Redis session caching, PostgreSQL storage, and secure JWT/CSRF cookie-based authentication.",
    tech: ["Go (Fiber)", "Redis", "PostgreSQL", "emersion/go-imap", "Docker", "JWT / CSRF"],
    github: "https://github.com",
    live: "#",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    detailsKey: "imap-api-gateway"
  },
  {
    id: 2,
    title: "Real-time Chat Engine (Che-Chat)",
    description: "Built a low-latency bidirectional WebSocket messaging platform utilizing Go-Fiber. Designed a Layered Architecture and developed dynamic middleware for real-time profanity filtering. Managed schema tracking via PostgreSQL and Goose.",
    tech: ["Golang", "WebSockets", "Clean Architecture", "PostgreSQL"],
    github: "https://github.com",
    live: "#",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&q=80",
    detailsKey: "real-time-chat-engine"
  },
  {
    id: 3,
    title: "Go-Fiber SMTP API Gateway",
    description: "High-performance SMTP API Gateway that enables direct mail delivery to MX relay servers, bypassing traditional MTAs. Implements custom SMTP communication using net/textproto and enmime, with soft‑retry, real‑time monitoring, and optional DKIM signing.",
    tech: ["Golang", "Go-Fiber", "net/textproto", "enmime", "Docker", "DKIM"],
    github: "https://github.com",
    live: "#",
    image: "https://plus.unsplash.com/premium_photo-1733306493254-52b143296396?w=800&q=80",
    detailsKey: "go-fiber-smtp-api-gateway"
  },
  {
    id: 4,
    title: "Farmer’s Friend (E-Commerce)",
    description: "Full‑stack PHP/MySQL e‑commerce platform for agricultural trade, featuring Google Maps location pinning and OTP‑based SMS authentication for secure seller‑buyer communication.",
    tech: ["PHP", "MySQL", "Google Maps API", "SMS OTP Gateway", "Docker", "Bootstrap"],
    github: "https://github.com",
    live: "#",
    image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=800&q=80",
    detailsKey: "farmer-friend-ecommerce"
  }
];
