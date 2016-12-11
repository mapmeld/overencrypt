# overencrypt.py
# open source
# pip install -r requirements.txt

# command line tools
from sys import argv
import argparse

# nginx tools
import nginxparser
DEFAULT_NGINX = '/etc/nginx/sites-enabled/default.conf'

# apache tools
import ApacheConfParser from apache_conf_parser
DEFAULT_VHOST = '/etc/apache2/sites-available/000-default.conf'

# take in Nginx or Apache path
parser = argparse.ArgumentParser(description="Upgrade security on your LetsEncrypt configuration on the server")
parser.add_argument('--nginx', required=False)
parser.add_argument('--apache', required=False)
args = parser.parse_args(argv[1:])

if args.nginx is not None:
    print('NGINX: ' + args.nginx)
    madeit = nginxparser.load(open(args.nginx))
    print(madeit)

elif args.apache is not None:
    print('APACHE: ' + args.apache)
    vhost = ApacheConfParser(args.apache)
    print(vhost)

else:
    print('no server config!!')
