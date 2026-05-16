export const blog2 = {
  id: 2,
  slug: "building-custom-smtp-routing",
  title: "Architecting a Micro-MTA in Go using net/textproto",
  excerpt: "Bypassing standard MTAs to create an efficient, direct-delivery SMTP engine.",
  date: "2023-11-20",
  tags: ["Go", "Architecture", "Networking"],
  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  content: `
# Architecting a Micro-MTA in Go

Handling custom mail queues effectively usually means stripping an architecture down to its base protocols.

## The Implementation Challenge
Traditional MTAs represent heavy, black-boxed middleware. For an optimized API Gateway, we needed direct programmatic control over MX route deliveries. Instead of wrapping external services, I built an SMTP communication client utilizing standard libraries.

\`\`\`go
import (
    "net/textproto"
    // Other essential networking deps
)
\`\`\`

By engineering our own raw textual protocol layer routing, we embedded customized granular status handling and soft-retry heuristics. This fundamentally increased deliverability and system monitoring oversight. 
    `
};
