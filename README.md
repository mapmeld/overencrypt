# OverEncrypt

How to protect your Apache or Nginx site with HTTPS, LetsEncrypt, and OverEncrypt:

1. Register your TLS certificate with <a href="https://letsencrypt.org">LetsEncrypt</a>
2. Verify that your website is available over HTTPS.
3. Download this repo and run ```npm install overencrypt -g```
4. Run on your server: ```overencrypt --apache /path/to/conf``` or ```overencrypt --nginx /path/to/conf```
5. Follow recommendations
6. <a href="https://www.ssllabs.com/ssltest/index.html">Re-run SSL Test</a> and get a better score!

## What does OverEncrypt do?

This extends the LetsEncrypt defaults by recommending:

* Strict Transport Security
* HSTS Preloading
* Public Key Pinning
* OCSP Stapling
* Preferring AES-256 to AES-128

OverEncrypt doesn't make the changes by itself!  You'll also need to make additional
config changes if you didn't give LetsEncrypt sudo access when you ran the
installer.

Future:

* Support post-quantum Ring Learning With Errors / A New Hope protocol
* Certificate transparency

## Dependencies

NodeJS - I initially started in Python, but for some reason none of the Python
parsers would work on my LetsEncrypt Nginx config.

## License

Open source, MIT license
