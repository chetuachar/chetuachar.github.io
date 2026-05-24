export const blog1 = {
  id: 1,
  slug: "github-ssh-key-setup-guide",
  title: "How to Create and Configure a GitHub SSH Key for Secure Git Clone Access",
  excerpt: "A complete beginner-to-advanced walkthrough for generating SSH keys, configuring GitHub authentication, and securely cloning repositories from local or cloud servers.",
  date: "2020-12-01",
  tags: ["GitHub", "SSH", "Git", "DevOps"],
  image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80",
  content: `
# Setting Up GitHub SSH Authentication

When working with private repositories or cloud servers, using SSH authentication with GitHub is the most secure and scalable approach.

This guide explains:
- How to generate SSH keys
- Where SSH keys are stored
- How to configure GitHub SSH settings
- Testing SSH authentication
- Cloning repositories securely

---

# Step 1: Generate a New SSH Key

Run the following command in your terminal. This creates a secure, unique pair of keys (public and private).

\`\`\`bash
ssh-keygen -t ed25519 -C "your_email@example.com"
\`\`\`

### 📸 Terminal Output Example
![Success Output: SSH Key Generation](/images/blog/ssh-keygen-terminal.png)

---

# Step 2: Choose Storage Location

After running the command, you will be prompted to save the key.

\`\`\`bash
Enter file in which to save the key (/home/user/.ssh/id_ed25519):
\`\`\`

If you simply press **ENTER**, it will be stored in the default location:
- **Private Key**: \`~/.ssh/id_ed25519\` (NEVER share this)
- **Public Key**: \`~/.ssh/id_ed25519.pub\` (This is what GitHub needs)

---

# Step 3: Copy the Public Key

Now, display and copy the public key content:

\`\`\`bash
cat ~/.ssh/id_ed25519.pub
\`\`\`

Example output:
\`\`\`text
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIBx... your_email@example.com
\`\`\`

> [!IMPORTANT]
> Always copy the entire line, including the 'ssh-ed25519' prefix and your email.

---

# Step 4: Add the Key to GitHub

1. Go to **GitHub Settings**.
2. Click **SSH and GPG keys** in the sidebar.
3. Click the green **New SSH key** button.

### 📸 GitHub Settings View
![GitHub SSH Settings Page](/images/blog/github-ssh-settings.png)

4. **Title**: Give it a name (e.g., 'MacBook Pro' or 'Production Server').
5. **Key**: Paste the content you copied in Step 3.
6. Click **Add SSH key**.

---

# Step 5: Test the Connection

Finally, verify that your machine can talk to GitHub:

\`\`\`bash
ssh -T git@github.com
\`\`\`

If successful, you'll see:
\`\`\`text
Hi username! You've successfully authenticated, but GitHub does not provide shell access.
\`\`\`

---

# Step 6: Clone Your Repository

Now you can clone any repository using the SSH URL!

\`\`\`bash
git clone git@github.com:username/repository.git
\`\`\`

---

### Pro Tip: Naming Conventions
For cloud servers, use titles that include the provider or IP:
- \`aws-mumbai-node-01\`
- \`prod-worker-65.108.xx.xx\`
- \`home-linux-desktop\`

This makes auditing your keys much simpler in the future.
`
};
