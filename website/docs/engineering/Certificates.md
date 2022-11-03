---
id: certificates
title: Certificates
---

# Certificates

Free, reliable public certificates can be generated at any time with the help of LetsEncrypt. Certificates for the 'app' service or any of the other services can be generated with the help of a script shared in ```./scripts``` of the 'app' repo.

## **```certbot_utils.sh```**

### Requirements

**certbot**

**cloudflare certbot plugin** (If using cloudflare as DNS provider)

When running, use root or sudo

---

### Usage

**Flags/Options**

**-d** --domains : individual domain names to be registered with the certificate. can be used multiple times to register multiple domain names.

**-c** --cloudflare : (Optional) a flag to indicate whether or not you're using cloudflare as a dns provider 

*  **-a** --apikey : if using cloudflare, apikey is required. generate at cloudflare with permissions for the domains you're requesting.

---

## Local Certs

Certificate files are provided in ```./certs-local``` of the 'app' repo as a local dev alternative to generating your own certs. By default the 'app' will search for certificate files in ```./certs```, which is where you should load any certs you generate yourself. However, if none are found there, the 'app' will search in ```./certs-local``` instead.

---

