export const blog4 = {
    id: 4,
    slug: "imap-login-using-openssl-port-993",
    title: "How to Test IMAP Login Using OpenSSL on Port 993",
    excerpt: "Learn how to connect to an IMAP server securely using OpenSSL, authenticate manually, list mailboxes, and fetch email headers directly from the terminal.",
    date: "2022-06-15",
    tags: ["IMAP", "OpenSSL", "Mail Server", "Email"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    content: `
# Testing IMAP Login Using OpenSSL on Port 993

IMAP allows clients to access and manage emails directly on the mail server.

Using OpenSSL with IMAP is useful for:

- Debugging mailbox access
- Testing IMAP authentication
- Verifying SSL certificates
- Understanding IMAP commands
- Troubleshooting mail server issues

---

# Step 1: Connect to IMAP SSL Port

Run:

\`\`\`bash
openssl s_client -connect imap.example.com:993
\`\`\`

Successful connection example:

\`\`\`
CONNECTED(00000003)
depth=2 O = Example Root CA
verify return:1
* OK [CAPABILITY IMAP4rev1 SASL-IR AUTH=PLAIN AUTH=LOGIN] IMAP Server Ready
\`\`\`

---

# Step 2: Login to IMAP Account

Run:

\`\`\`bash
a LOGIN "chethan@gmail.com" "StrongPassword123"
\`\`\`

Successful login response:

\`\`\`
a OK LOGIN completed
\`\`\`

---

# Step 3: List Available Mailboxes

\`\`\`bash
a LIST "" "*"
\`\`\`

Example response:

\`\`\`
* LIST (\\HasNoChildren) "/" "INBOX"
* LIST (\\HasNoChildren) "/" "Sent"
* LIST (\\HasNoChildren) "/" "Drafts"
a OK LIST completed
\`\`\`

---

# Step 4: Select Inbox

\`\`\`bash
a SELECT INBOX
\`\`\`

Example response:

\`\`\`
* 25 EXISTS
* 0 RECENT
a OK [READ-WRITE] SELECT completed
\`\`\`

---

# Step 5: Fetch Email Headers

Fetch first email headers:

\`\`\`bash
a FETCH 1 (FLAGS BODY[HEADER.FIELDS (FROM SUBJECT DATE)])
\`\`\`

Example response:

\`\`\`
* 1 FETCH (FLAGS (\\Seen)
BODY[HEADER.FIELDS (FROM SUBJECT DATE)] {120}
From: sender@example.com
Subject: Test Email
Date: Thu, 16 May 2026 10:00:00 +0000
)
a OK FETCH completed
\`\`\`

---

# Step 6: Logout

\`\`\`bash
a LOGOUT
\`\`\`

Example response:

\`\`\`
* BYE IMAP server logging out
a OK LOGOUT completed
\`\`\`

---

# Full IMAP Session Example

\`\`\`text
openssl s_client -connect imap.example.com:993

* OK [CAPABILITY IMAP4rev1 AUTH=PLAIN AUTH=LOGIN] IMAP Ready

a LOGIN "user@example.com" "StrongPassword123"

a OK LOGIN completed

a LIST "" "*"

* LIST (\\HasNoChildren) "/" "INBOX"
* LIST (\\HasNoChildren) "/" "Sent"

a OK LIST completed

a SELECT INBOX

* 10 EXISTS
a OK SELECT completed

a FETCH 1 (FLAGS BODY[HEADER.FIELDS (FROM SUBJECT DATE)])

* 1 FETCH (
FLAGS (\\Seen)
BODY[HEADER.FIELDS (FROM SUBJECT DATE)] {95}
From: sender@example.com
Subject: Welcome Mail
Date: Thu, 16 May 2026 10:00:00 +0000
)

a OK FETCH completed

a LOGOUT

* BYE Logging out
a OK LOGOUT completed
\`\`\`

---

# IMAP Authentication Using Base64 Encoding

Some IMAP servers support SASL authentication mechanisms such as:

- AUTHENTICATE PLAIN
- AUTHENTICATE LOGIN

These methods often require Base64 encoded credentials.

---

# Generate Base64 Username

\`\`\`bash
echo -n "user@example.com" | base64
\`\`\`

Example output:

\`\`\`
dXNlckBleGFtcGxlLmNvbQ==
\`\`\`

---

# Generate Base64 Password

\`\`\`bash
echo -n "StrongPassword123" | base64
\`\`\`

Example output:

\`\`\`
U3Ryb25nUGFzc3dvcmQxMjM=
\`\`\`

---

# AUTHENTICATE LOGIN Example

Start authentication:

\`\`\`
a AUTHENTICATE LOGIN
\`\`\`

Server responds:

\`\`\`
+
\`\`\`

Send Base64 username:

\`\`\`
dXNlckBleGFtcGxlLmNvbQ==
\`\`\`

Server responds again:

\`\`\`
+
\`\`\`

Send Base64 password:

\`\`\`
U3Ryb25nUGFzc3dvcmQxMjM=
\`\`\`

Successful response:

\`\`\`
a OK AUTHENTICATE completed
\`\`\`

---

# Common IMAP Commands

| Command | Purpose |
|---|---|
| LOGIN | Authenticate user |
| LIST | List mailboxes |
| SELECT | Open mailbox |
| FETCH | Retrieve message data |
| SEARCH | Search emails |
| STORE | Update message flags |
| LOGOUT | Close session |

---

# Security Notes

## Never Share Real Passwords

Avoid exposing:
- Real production passwords
- Private credentials
- Authentication tokens

Use placeholder values in documentation.

---

# Why Port 993?

Port 993 provides:
- SSL/TLS encrypted IMAP
- Secure authentication
- Protected mailbox communication

Compared to:
- Port 143 → Plain IMAP
- Port 993 → Secure IMAPS

---

# Final Thoughts

Testing IMAP manually using OpenSSL gives deep visibility into how mail clients communicate with mail servers. It is an essential debugging skill for mail administrators, backend engineers, and infrastructure teams working with email systems.
`

}