export const blog2 = {
    id: 2,
    slug: "complete-ssh-setup-and-connection-guide",
    title: "Complete SSH Setup Guide: Generate Keys, Connect to Servers, and Configure Secure Access",
    excerpt:
        "Learn how to generate SSH keys on Linux, macOS, and Windows, securely connect to servers, copy SSH keys, use custom ports, and simplify SSH access using config files.",
    date: "2021-02-16",
    tags: ["SSH", "Linux", "Windows", "DevOps", "Security"],
    image:
        "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80",
    content: `
# Complete SSH Setup and Connection Guide

SSH (Secure Shell) is the standard way to securely access Linux servers, cloud instances, VPS systems, Raspberry Pi devices, and remote development machines.

This guide covers:
- SSH key generation
- Linux, macOS, and Windows setup
- Connecting with IPs, hostnames, and custom ports
- Copying SSH keys to servers
- SSH config shortcuts
- Secure login best practices

---

# What is SSH?

SSH allows secure encrypted communication between your computer and a remote server.

Common use cases:
- Remote server administration
- GitHub authentication
- File transfers
- Running commands remotely
- DevOps automation
- Secure cloud server access

---

# Step 1: Generate an SSH Key

SSH uses two files:
- **Private Key** → stays on your machine
- **Public Key** → copied to the server

---

# Linux & macOS SSH Key Generation

Open Terminal and run:

\`\`\`bash
ssh-keygen -t ed25519 -C "your_email@example.com"
\`\`\`

If your system does not support ed25519:

\`\`\`bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
\`\`\`

You will see:

\`\`\`bash
Enter file in which to save the key (/home/user/.ssh/id_ed25519):
\`\`\`

Press ENTER to use the default location.

---

# Windows SSH Key Generation

## Method 1: PowerShell (Recommended)

Modern Windows includes OpenSSH.

Open PowerShell:

\`\`\`powershell
ssh-keygen -t ed25519 -C "your_email@example.com"
\`\`\`

Default key location:

\`\`\`text
C:\\Users\\YourName\\.ssh\\id_ed25519
\`\`\`

---

## Method 2: Git Bash

If Git for Windows is installed:

\`\`\`bash
ssh-keygen -t ed25519 -C "your_email@example.com"
\`\`\`

---

## Method 3: PuTTYgen

1. Open PuTTYgen
2. Select:
   - Type: RSA or Ed25519
3. Click Generate
4. Move mouse randomly
5. Save:
   - Private key
   - Public key

---

# Step 2: Understand SSH Key Files

Default locations:

## Linux/macOS

\`\`\`text
~/.ssh/id_ed25519
~/.ssh/id_ed25519.pub
\`\`\`

## Windows

\`\`\`text
C:\\Users\\YourName\\.ssh\\id_ed25519
C:\\Users\\YourName\\.ssh\\id_ed25519.pub
\`\`\`

> [!IMPORTANT]
> Never share your private key file.

---

# Step 3: Copy the Public Key

## Linux/macOS

\`\`\`bash
cat ~/.ssh/id_ed25519.pub
\`\`\`

## Windows PowerShell

\`\`\`powershell
type $env:USERPROFILE\\.ssh\\id_ed25519.pub
\`\`\`

## Git Bash

\`\`\`bash
cat ~/.ssh/id_ed25519.pub
\`\`\`

Copy the full output.

Example:

\`\`\`text
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIExample your_email@example.com
\`\`\`

---

# Step 4: Copy SSH Key to a Server

SSH public keys are stored inside:

\`\`\`text
~/.ssh/authorized_keys
\`\`\`

on the remote server.

---

# Method 1: Using ssh-copy-id (Linux/macOS)

## Default Port 22

\`\`\`bash
ssh-copy-id user@SERVER_IP
\`\`\`

Example:

\`\`\`bash
ssh-copy-id root@192.168.1.20
\`\`\`

---

## Custom SSH Port

\`\`\`bash
ssh-copy-id -p 2222 user@SERVER_IP
\`\`\`

Example:

\`\`\`bash
ssh-copy-id -p 2222 ubuntu@65.108.xx.xx
\`\`\`

---

# Method 2: Manual Copy (Works Everywhere)

First display the public key:

\`\`\`bash
cat ~/.ssh/id_ed25519.pub
\`\`\`

Then SSH into the server:

\`\`\`bash
ssh user@SERVER_IP
\`\`\`

Open authorized_keys:

\`\`\`bash
nano ~/.ssh/authorized_keys
\`\`\`

Paste the public key on a new line.

Save:
- CTRL + O
- ENTER
- CTRL + X

---

# Method 3: Windows Manual Copy

## Using Notepad

Open:

\`\`\`text
C:\\Users\\YourName\\.ssh\\id_ed25519.pub
\`\`\`

Copy the contents.

SSH into server:

\`\`\`powershell
ssh user@SERVER_IP
\`\`\`

Then:

\`\`\`bash
mkdir -p ~/.ssh
nano ~/.ssh/authorized_keys
\`\`\`

Paste the key.

---

# Step 5: SSH Login Examples

---

# Connect Using IP Address

\`\`\`bash
ssh user@192.168.1.20
\`\`\`

Example:

\`\`\`bash
ssh root@65.108.xx.xx
\`\`\`

---

# Connect Using Hostname

\`\`\`bash
ssh user@example.com
\`\`\`

Example:

\`\`\`bash
ssh ubuntu@server.example.com
\`\`\`

---

# Connect Using a Custom Port

\`\`\`bash
ssh -p 2222 user@SERVER_IP
\`\`\`

Example:

\`\`\`bash
ssh -p 2222 root@65.108.xx.xx
\`\`\`

---

# Connect Using a Specific Private Key

\`\`\`bash
ssh -i ~/.ssh/prod_server user@SERVER_IP
\`\`\`

Example:

\`\`\`bash
ssh -i ~/.ssh/aws-prod ubuntu@aws-server.example.com
\`\`\`

---

# Enable Verbose Debugging

Useful for troubleshooting authentication issues.

\`\`\`bash
ssh -v user@SERVER_IP
\`\`\`

More detailed:

\`\`\`bash
ssh -vvv user@SERVER_IP
\`\`\`

---

# Step 6: Simplify SSH Using Config File

Instead of typing long commands repeatedly, use SSH config.

Edit:

\`\`\`bash
nano ~/.ssh/config
\`\`\`

Add:

\`\`\`text
Host prod-server
    HostName 65.108.xx.xx
    User root
    Port 2222
    IdentityFile ~/.ssh/prod_server
\`\`\`

Now connect using:

\`\`\`bash
ssh prod-server
\`\`\`

---

# Step 7: Set Proper SSH Permissions

SSH may reject keys if permissions are insecure.

Run:

\`\`\`bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
chmod 600 ~/.ssh/id_ed25519
\`\`\`

---

# Common SSH Problems

---

# Permission Denied (publickey)

Usually caused by:
- Wrong private key
- Public key not copied
- Incorrect permissions
- Wrong username

Debug:

\`\`\`bash
ssh -vvv user@SERVER_IP
\`\`\`

---

# Connection Refused

Usually means:
- SSH service not running
- Wrong port
- Firewall blocked

Check server:

\`\`\`bash
systemctl status ssh
\`\`\`

or:

\`\`\`bash
systemctl status sshd
\`\`\`

---

# Check SSH Listening Port

\`\`\`bash
ss -tulpn | grep ssh
\`\`\`

---

# Restart SSH Service

Ubuntu/Debian:

\`\`\`bash
sudo systemctl restart ssh
\`\`\`

RHEL/CentOS:

\`\`\`bash
sudo systemctl restart sshd
\`\`\`

---

# Pro Tips

- Use separate SSH keys for production systems
- Disable password authentication after SSH keys work
- Never share private keys
- Backup SSH keys securely
- Use SSH config aliases for easier access
- Use custom ports to reduce automated scanning attempts

---

# Example Real-World SSH Commands

## AWS EC2

\`\`\`bash
ssh -i aws-prod.pem ubuntu@ec2-54-xx-xx-xx.compute.amazonaws.com
\`\`\`

## DigitalOcean

\`\`\`bash
ssh root@64.xx.xx.xx
\`\`\`

## Custom Port + Key

\`\`\`bash
ssh -p 2222 -i ~/.ssh/prod_key root@server.example.com
\`\`\`

---

# Final Thoughts

SSH is one of the most important tools for developers, system administrators, and DevOps engineers.

Once properly configured:
- Access becomes secure
- Password logins can be disabled
- Automation becomes easier
- Git operations become seamless
- Remote server management becomes faster and safer

Learning SSH properly is a foundational skill for modern infrastructure management.
`,
};