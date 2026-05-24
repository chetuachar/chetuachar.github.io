export const blog3 = {
  id: 3,
  slug: "sending-email-using-smtp-telnet-port-25",
  title: "How to Send an SMTP Email Manually Using Telnet on Port 25",
  excerpt: "Learn how SMTP communication works internally by manually sending an email over Telnet using SMTP commands on port 25.",
  date: "2022-05-20",
  tags: ["SMTP", "Telnet", "Postfix", "Mail Server"],
  image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  content: `
# Sending Email Manually Using SMTP and Telnet

SMTP servers can be tested manually using Telnet. This is extremely useful for:

- Debugging mail servers
- Understanding SMTP protocol flow
- Testing firewall access
- Verifying Postfix/Exim configurations

---

# Step 1: Connect to SMTP Port 25

Run:

\`\`\`bash
telnet mail.example.com 25
\`\`\`

Example SMTP response:

\`\`\`
Trying 192.168.1.10...
Connected to mail.example.com.
Escape character is '^]'.
220 mail.example.com ESMTP Postfix
\`\`\`

---

# Step 2: Introduce Your Client

\`\`\`bash
EHLO client.example.com
\`\`\`

Expected response:

\`\`\`
250-mail.example.com
250-PIPELINING
250-SIZE 52428800
250-STARTTLS
250 HELP
\`\`\`

---

# Step 3: Set Sender Address

\`\`\`bash
MAIL FROM: sender@example.com
\`\`\`

Expected:

\`\`\`
250 2.1.0 Ok
\`\`\`

---

# Step 4: Set Recipient Address

\`\`\`bash
RCPT TO: recipient@example.com
\`\`\`

Expected:

\`\`\`
250 2.1.5 Ok
\`\`\`

---

# Step 5: Start Email Body

\`\`\`bash
DATA
\`\`\`

Expected:

\`\`\`
354 End data with <CR><LF>.<CR><LF>
\`\`\`

---

# Step 6: Write Email Content

\`\`\`bash
From: sender@example.com
To: recipient@example.com
Subject: SMTP Test Mail

This is a test email sent manually using Telnet and SMTP commands.
.
\`\`\`

Important:
- The single \`.\` on the final line tells SMTP the message is complete.

Expected response:

\`\`\`
250 2.0.0 Ok: queued as ABC123456789
\`\`\`

---

# Step 7: Close Connection

Press:

\`\`\`bash
Ctrl + ]
\`\`\`

Then type:

\`\`\`
quit
\`\`\`

---

# Full SMTP Session Example

\`\`\`text
telnet mail.example.com 25

220 mail.example.com ESMTP Postfix

EHLO client.example.com

250-mail.example.com
250-PIPELINING
250-SIZE 52428800
250-STARTTLS
250 HELP

MAIL FROM: sender@example.com
250 2.1.0 Ok

RCPT TO: recipient@example.com
250 2.1.5 Ok

DATA
354 End data with <CR><LF>.<CR><LF>

From: sender@example.com
To: recipient@example.com
Subject: SMTP Test Mail

This is a test email sent manually using Telnet.
.

250 2.0.0 Ok: queued as ABC123456789
\`\`\`

---

# Common SMTP Commands

| Command | Purpose |
|---|---|
| EHLO | Identify SMTP client |
| HELO | Older SMTP greeting |
| MAIL FROM | Sender email |
| RCPT TO | Recipient email |
| DATA | Start email body |
| QUIT | Close SMTP session |

---

# Important Notes

## Port 25 Restrictions

Many cloud providers block outbound port 25 to reduce spam abuse.

Providers commonly restricting port 25:
- AWS EC2
- Google Cloud
- Azure
- DigitalOcean

You may need:
- SMTP relay
- Mail provider API
- Port unblocking request

---

# Security Warning

Telnet communication is unencrypted.

Production environments should prefer:
- STARTTLS
- SMTPS (465)
- Authenticated SMTP

---

# Final Thoughts

Understanding raw SMTP communication helps tremendously while debugging mail delivery problems, configuring mail servers, or learning how email infrastructure works internally.
`
};
