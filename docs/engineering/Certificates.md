---
id: certificates
title: Certificates
---

# Certificates

SSL encryption for all services are provided by LetsEncrypt certificates that are generated and shared by an AWS instance named "certbot"

## certbot

[cerbot instance on AWS](https://us-west-1.console.aws.amazon.com/ec2/v2/home?region=us-west-1#InstanceDetails:instanceId=i-0e3e24e76461de3f1)

LetsEncrypt/Certbot is configured on the "certbot" Ubuntu instance and uses the certbot Cloudflare plugin to automatically verify ownership with a Cloudflare API key.

### Cloudflare API Key

To change or reference the key, it can be found at 

```bash
/etc/cloudflare/credentials.ini
```
---

### Altering Certificate Registration

The existing certificate is registered with the command:

```bash
sudo certbot certonly \
  --dns-cloudflare \
  --dns-cloudflare-credentials /etc/cloudflare/credential.ini \
  -d *.webaverse.com
  ```

To add to or change the domains included in the certificate, add to or change the ```-d ...``` row(s) and run again.

---

### Certificate Renewal

LetsEncrypt certificates expire after only 3 months, but the Certbot tool can automatically renew certificates when expiration nears.

---

### Scripts

We have a script that is scheduled to run automatically every Monday that not only runs the certbot renewal command, but also copies the latest certificate files to an S3 bucket and registers the certificate with AWS Certificate Manager.

```bash
/scripts/certbot_renewal.sh
```
```bash
sudo certbot renew
sudo aws s3 sync /etc/letsencrypt/live/webaverse.com/ s3://webaverse-certbot/webaverse.com/
sudo aws acm import-certificate --certificate fileb:///etc/letsencrypt/live/webaverse.com/cert.pem --private-key fileb:///etc/letsencrypt/live/webaverse.com/privkey.pem --certificate-chain fileb:///etc/letsencrypt/live/webaverse.com/chain.pem --certificate-arn arn:aws:acm:us-west-1:907263135169:certificate/45254cad-6321-4ac0-9ec0-5cbc6cdf9005 --region us-west-1
sudo aws acm import-certificate --certificate fileb:///etc/letsencrypt/live/webaverse.com/cert.pem --private-key fileb:///etc/letsencrypt/live/webaverse.com/privkey.pem --certificate-chain fileb:///etc/letsencrypt/live/webaverse.com/chain.pem --certificate-arn arn:aws:acm:us-west-2:907263135169:certificate/ff0ecce5-395e-4f8e-ad80-c3e88855f77e --region us-west-2
```

---

## Other Resources

### S3 Bucket

A copy of the latest certificate files should always be in the following S3 bucket:
[webaverse.com certs](s3://webaverse-certbot/webaverse.com/)

---

### AWS Certificate Manager

Whereas S3 is regionless, ACM serves particular regions. We're currently importing the cert into regions us-west-1 & us-west-2, but that can be expanded by simply amending the renewal script above.

[N. California Cert](https://us-west-1.console.aws.amazon.com/acm/home?region=us-west-1#/certificates/45254cad-6321-4ac0-9ec0-5cbc6cdf9005)

[Oregon Cert](https://us-west-2.console.aws.amazon.com/acm/home?region=us-west-2#/certificates/ff0ecce5-395e-4f8e-ad80-c3e88855f77e)

---