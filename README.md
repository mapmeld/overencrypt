# OverEncrypt

How to protect your Apache or Nginx site with HTTPS, LetsEncrypt, and OverEncrypt:

1. Register your TLS certificate with <a href="https://letsencrypt.org">LetsEncrypt</a>
2. Verify that your website is available over HTTPS.
3. ```python overencrypt.py``` (with recent Python 2.x or 3.x)
4. <a href="https://www.ssllabs.com/ssltest/index.html">Run SSL Test</a> and get a better score!

## What does OverEncrypt do?

This extends the LetsEncrypt defaults by:

* Removing support for older Diffie-Hellman keys
* Customizing Diffie-Helman parameters
* Preferring AES-256 to AES-128 and other weaker keys
* Strict Transport Security
* HSTS Preloading
* Public Key Pinning
* OCSP Stapling

future:

* Support post-quantum Ring Learning With Errors / A New Hope protocol
* Certificate transparency
* DROWN (?)

## License

Open source, MIT license
