export const blog1 = {
  id: 1,
  slug: "optimizing-go-api-latency",
  title: "Reducing API Latency by 25% with Go and PostgreSQL Indexing",
  excerpt: "A deep dive into how API profiling and strategic caching structures can significantly reduce response times in high-throughput environments.",
  date: "2024-03-10",
  tags: ["Go", "Performance", "PostgreSQL"],
  image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
  content: `
# Reducing API Latency by 25% with Go

Throughout my tenure Engineering backend solutions at Yukthi Systems, minimizing latency on heavily loaded endpoints is a constant challenge.

## Identifying the Bottleneck
By thoroughly profiling our Go-Fiber API instances, I discovered that I/O wait times on complex, repetitive queries were significantly degrading our P99 response durations.

## The Optimization Approach
1. **Database Indexing**: Analysed our PostgreSQL query plans and applied tailored indexing schemes to high-read column permutations.
2. **In-Memory Caching**: We introduced targeted Redis caching for computationally expensive data aggregates.

\`\`\`go
// Sample implementation snippet
func GetUserData(c *fiber.Ctx) error {
    // 1. Check Redis Cache
    if data, err := cache.Get(userKey); err == nil {
        return c.JSON(data)
    }
    // 2. Query Indexed DB on Cache Miss
    // ...
}
\`\`\`

These compounded infrastructure improvements led to a **25% decrease in overall API response time**.
    `
};
