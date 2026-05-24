export const blog5 = {
  id: 5,
  slug: "essential-docker-commands-and-docker-compose-guide",
  title: "Essential Docker Commands, Networking, Volumes, and Docker Compose Guide",
  excerpt:
    "A practical guide covering Docker commands, Docker Compose, networking, volumes, container management, iptables troubleshooting, and real-world Linux server workflows.",
  date: "2022-06-25",
  tags: ["Docker", "DevOps", "Linux", "Docker Compose"],
  image:
    "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80",
  content: `
# Docker Essentials for Linux Servers

Docker has become one of the most important tools in modern backend infrastructure and DevOps workflows.

It allows applications to run:
- Isolated
- Portable
- Reproducible
- Consistently across environments

This guide covers:
- Core Docker commands
- Docker Compose
- Networks
- Volumes
- iptables troubleshooting
- Container lifecycle management
- Real-world examples

---

# What is Docker?

Docker is a containerization platform that packages:
- Application code
- Runtime
- Dependencies
- System libraries

into lightweight containers.

Unlike virtual machines:
- Containers share the host kernel
- Start very quickly
- Use fewer resources

---

# Verify Docker Installation

Check Docker version:

\`\`\`bash
docker --version
\`\`\`

Check Docker Compose:

\`\`\`bash
docker compose version
\`\`\`

---

# Docker Service Management

## Start Docker Service

\`\`\`bash
sudo systemctl start docker
\`\`\`

## Stop Docker Service

\`\`\`bash
sudo systemctl stop docker
\`\`\`

## Restart Docker Service

\`\`\`bash
sudo systemctl restart docker
\`\`\`

## Enable Docker at Boot

\`\`\`bash
sudo systemctl enable docker
\`\`\`

## Check Docker Status

\`\`\`bash
sudo systemctl status docker
\`\`\`

---

# Most Used Docker Commands

## Pull Image

\`\`\`bash
docker pull nginx
\`\`\`

---

## List Images

\`\`\`bash
docker images
\`\`\`

---

## Run Container

\`\`\`bash
docker run nginx
\`\`\`

---

## Run Container in Background

\`\`\`bash
docker run -d nginx
\`\`\`

---

## Run with Port Mapping

\`\`\`bash
docker run -d -p 8080:80 nginx
\`\`\`

Meaning:
- Host Port → 8080
- Container Port → 80

Access:

\`\`\`
http://server-ip:8080
\`\`\`

---

# Container Management

## List Running Containers

\`\`\`bash
docker ps
\`\`\`

## List All Containers

\`\`\`bash
docker ps -a
\`\`\`

## Stop Container

\`\`\`bash
docker stop container_id
\`\`\`

## Start Container

\`\`\`bash
docker start container_id
\`\`\`

## Restart Container

\`\`\`bash
docker restart container_id
\`\`\`

## Remove Container

\`\`\`bash
docker rm container_id
\`\`\`

## Remove Forcefully

\`\`\`bash
docker rm -f container_id
\`\`\`

---

# Viewing Logs

## Live Logs

\`\`\`bash
docker logs -f container_id
\`\`\`

---

# Execute Commands Inside Container

## Open Shell

\`\`\`bash
docker exec -it container_id bash
\`\`\`

For Alpine containers:

\`\`\`bash
docker exec -it container_id sh
\`\`\`

---

# Docker Networking

Docker creates isolated virtual networks for containers.

---

# List Networks

\`\`\`bash
docker network ls
\`\`\`

Common networks:
- bridge
- host
- none

---

# Create Custom Network

\`\`\`bash
docker network create app-network
\`\`\`

---

# Run Container with Network

\`\`\`bash
docker run -d --network app-network nginx
\`\`\`

Containers in the same network can communicate internally.

---

# Host Network Mode

\`\`\`bash
docker run --network host nginx
\`\`\`

Container directly uses host network stack.

Useful for:
- Monitoring tools
- High-performance networking
- Mail servers

---

# Docker Networking, IP Forwarding, and iptables

Docker networking internally depends on:
- Linux bridge networking
- IP forwarding
- iptables NAT rules

When containers communicate:
- Docker automatically creates virtual bridges
- Configures NAT rules
- Enables packet forwarding

Without these configurations:
- Containers may lose internet access
- Port forwarding may stop working
- Inter-container communication can fail

---

# Check IP Forwarding

Docker requires Linux IP forwarding to be enabled.

Verify:

\`\`\`bash
sysctl net.ipv4.ip_forward
\`\`\`

Expected output:

\`\`\`
net.ipv4.ip_forward = 1
\`\`\`

---

# Enable IP Forwarding Temporarily

\`\`\`bash
sudo sysctl -w net.ipv4.ip_forward=1
\`\`\`

---

# Permanently Enable IP Forwarding

Edit:

\`\`\`bash
sudo nano /etc/sysctl.conf
\`\`\`

Add or uncomment:

\`\`\`conf
net.ipv4.ip_forward=1
\`\`\`

Apply:

\`\`\`bash
sudo sysctl -p
\`\`\`

---

# Docker Automatically Creates iptables Rules

Docker manages:
- NAT rules
- Forwarding chains
- Port mappings
- Bridge routing

View current rules:

\`\`\`bash
sudo iptables -L
\`\`\`

View NAT rules:

\`\`\`bash
sudo iptables -t nat -L
\`\`\`

---

# Docker Bridge Interface

Docker commonly creates:

\`\`\`
docker0
\`\`\`

Check bridge details:

\`\`\`bash
ip addr show docker0
\`\`\`

Example:

\`\`\`
docker0: 172.17.0.1/16
\`\`\`

---

# Common Docker Networking Failures

Sometimes Docker networking breaks because:
- iptables rules are flushed
- firewall services overwrite rules
- nftables conflicts occur
- server reboot removes temporary rules
- security tools modify forwarding chains

Symptoms include:
- Containers cannot access internet
- Port mappings stop working
- DNS resolution fails
- Containers cannot communicate

---

# Quick Troubleshooting Fix

In many real-world production cases, restarting Docker automatically recreates required iptables rules.

\`\`\`bash
sudo systemctl restart docker
\`\`\`

This may restore:
- Docker bridge networking
- NAT rules
- Port forwarding
- Internet access

---

# Verify Docker iptables Chains

Check:

\`\`\`bash
sudo iptables -t nat -L
\`\`\`

You should see chains such as:

\`\`\`
DOCKER
DOCKER-USER
DOCKER-ISOLATION-STAGE-1
\`\`\`

---

# Example Forwarding Rules

Docker forwarding commonly uses rules like:

\`\`\`bash
sudo iptables -A FORWARD -i docker0 -o eth0 -j ACCEPT

sudo iptables -A FORWARD -i eth0 -o docker0 \\
  -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT
\`\`\`

Meaning:
- Containers can access external networks
- Return traffic is accepted

---

# NAT Masquerading

Docker usually adds rules similar to:

\`\`\`bash
sudo iptables -t nat -A POSTROUTING \\
  -s 172.17.0.0/16 ! -o docker0 -j MASQUERADE
\`\`\`

Without masquerading:
- outbound container traffic may fail

---

# Save iptables Rules

Backup current rules:

\`\`\`bash
sudo iptables-save > iptables-backup.rules
\`\`\`

Restore later:

\`\`\`bash
sudo iptables-restore < iptables-backup.rules
\`\`\`

---

# Docker Volumes

Volumes store persistent data outside containers.

Without volumes:
- Container deletion removes data

With volumes:
- Data survives container recreation

---

# Create Volume

\`\`\`bash
docker volume create postgres-data
\`\`\`

---

# List Volumes

\`\`\`bash
docker volume ls
\`\`\`

---

# Mount Volume in Container

\`\`\`bash
docker run -d \\
  -v postgres-data:/var/lib/postgresql/data \\
  postgres
\`\`\`

---

# Bind Mount Example

\`\`\`bash
docker run -d \\
  -v /home/user/config:/app/config \\
  nginx
\`\`\`

Meaning:
- Host directory mounted directly into container

---

# Environment Variables

\`\`\`bash
docker run -d \\
  -e DB_HOST=postgres \\
  -e DB_PORT=5432 \\
  nginx
\`\`\`

---

# Restart Policies

## Always Restart

\`\`\`bash
docker run -d --restart always nginx
\`\`\`

Useful for production services.

---

# Docker Compose

Docker Compose allows managing multiple containers using a YAML file.

Instead of long commands:
- Everything is version controlled
- Easier to manage
- Easier to reproduce

---

# Simple docker run Example

## PostgreSQL Container

\`\`\`bash
docker run -d \\
  --name postgres-db \\
  -p 5432:5432 \\
  -e POSTGRES_USER=admin \\
  -e POSTGRES_PASSWORD=secret123 \\
  -e POSTGRES_DB=appdb \\
  -v postgres-data:/var/lib/postgresql/data \\
  --restart always \\
  postgres:17
\`\`\`

---

# Equivalent docker-compose.yml

\`\`\`yaml
services:
  postgres-db:
    image: postgres:17
    container_name: postgres-db

    ports:
      - "5432:5432"

    environment:
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: secret123
      POSTGRES_DB: appdb

    volumes:
      - postgres-data:/var/lib/postgresql/data

    restart: always

volumes:
  postgres-data:
\`\`\`

---

# Running Docker Compose

Start services:

\`\`\`bash
docker compose up -d
\`\`\`

Stop services:

\`\`\`bash
docker compose down
\`\`\`

View logs:

\`\`\`bash
docker compose logs -f
\`\`\`

Restart services:

\`\`\`bash
docker compose restart
\`\`\`

---

# Multi-Service Example

## App + PostgreSQL

\`\`\`yaml
services:

  backend:
    image: my-go-app:latest

    ports:
      - "8080:8080"

    environment:
      DB_HOST: postgres
      DB_PORT: 5432

    depends_on:
      - postgres

    networks:
      - backend-network

  postgres:
    image: postgres:17

    environment:
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: secret123
      POSTGRES_DB: appdb

    volumes:
      - postgres-data:/var/lib/postgresql/data

    networks:
      - backend-network

volumes:
  postgres-data:

networks:
  backend-network:
\`\`\`

---

# Useful Cleanup Commands

## Remove Unused Containers

\`\`\`bash
docker container prune
\`\`\`

---

## Remove Unused Images

\`\`\`bash
docker image prune
\`\`\`

---

## Remove Unused Volumes

\`\`\`bash
docker volume prune
\`\`\`

---

## Full Cleanup

\`\`\`bash
docker system prune -a
\`\`\`

Warning:
- Removes unused containers
- Removes images
- Removes cache

---

# Inspect Docker Details

## Inspect Container

\`\`\`bash
docker inspect container_id
\`\`\`

---

# Get Container IP Address Easily

\`\`\`bash
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' nginx
\`\`\`

Example output:

\`\`\`
172.18.0.2
\`\`\`

---

# Get Container Status

\`\`\`bash
docker inspect -f '{{.State.Status}}' nginx
\`\`\`

---

# Get Restart Policy

\`\`\`bash
docker inspect -f '{{.HostConfig.RestartPolicy.Name}}' nginx
\`\`\`

---

# Get Mounted Volumes

\`\`\`bash
docker inspect -f '{{json .Mounts}}' postgres-db
\`\`\`

---

# Resource Monitoring

## Container Resource Usage

\`\`\`bash
docker stats
\`\`\`

Shows:
- CPU usage
- Memory usage
- Network traffic

---

# Production Best Practices

## Use Named Volumes

Avoid storing databases inside containers.

---

## Use Restart Policies

\`\`\`
restart: always
\`\`\`

ensures automatic recovery.

---

## Separate Networks

Use dedicated Docker networks for:
- Backend
- Databases
- Reverse proxies

---

## Avoid Root User

Containers should run as non-root whenever possible.

---

# Final Thoughts

Docker dramatically simplifies deployment, scalability, and infrastructure consistency.

Once comfortable with:
- Containers
- Volumes
- Networks
- Docker Compose
- iptables debugging
- Docker inspect

you can efficiently manage:
- APIs
- Databases
- Queues
- Mail servers
- Monitoring stacks
- Full production environments
`
}