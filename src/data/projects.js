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
  },
  {
    id: 5,
    title: "RabbitMQ Consumer Template",
    description: "A minimal, production-shaped Go GitHub template for consuming RabbitMQ messages, with graceful shutdown, automatic reconnect, structured JSON logging, and Docker/CI wired in out of the box.",
    tech: ["Go", "RabbitMQ", "wagslane/go-rabbitmq", "zerolog", "Docker", "GitHub Actions"],
    github: "https://github.com/chetuachar/RabbitMQ-Consumer-Template",
    live: "#",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    detailsKey: "rabbitmq-consumer-template"
  },
  {
    id: 6,
    title: "Gin API Template",
    description: "A lightweight RESTful API boilerplate built with Go and Gin, featuring easy routing, middleware support, structured JSON logging, and configurable request rate limiting.",
    tech: ["Go", "Gin", "REST API", "Rate Limiting", "JSON Logging"],
    github: "https://github.com/chetuachar/gin-api-template",
    live: "#",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    detailsKey: "gin-api-template"
  },
  {
    id: 7,
    title: "RabbitMQ Worker Template",
    description: "A minimal, production-ready Go GitHub template for RabbitMQ worker services, with automatic success/failure queue routing, graceful shutdown, structured JSON logging, and Docker/CI wired in out of the box.",
    tech: ["Go", "RabbitMQ", "wagslane/go-rabbitmq", "zerolog", "Docker", "GitHub Actions"],
    github: "https://github.com/chetuachar/RabbitMQ-Worker-Template",
    live: "#",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?w=800&q=80",
    detailsKey: "rabbitmq-worker-template"
  }
];
