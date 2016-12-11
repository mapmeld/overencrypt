# overencrypt.py
# open source
# pip install -r requirements.txt

# command line tools
from sys import argv
import argparse

# nginx tools
import nginxparser

# apache tools
import apache_conf_parser

# take in Nginx or Apache path
parser = argparse.ArgumentParser(description="Upgrade security on your LetsEncrypt configuration on the server")
parser.add_argument('--nginx', required=False)
parser.add_argument('--apache', required=False)
args = parser.parse_args(argv[1:])

if args.nginx is not None:
    print('NGINX: ' + args.nginx)
elif args.apache is not None:
    print('APACHE: ' + args.apache)
else:
    print('no server config!!')
