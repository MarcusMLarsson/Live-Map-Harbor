#module import
import urllib.request
from bs4 import BeautifulSoup
import re
import pandas as pd
from datetime import datetime
import locale
locale.setlocale(locale.LC_ALL, 'en_US') #as we need to deal with names of monthes later on.
import os
import pandas as pd

# Scrapes Lat, Long & Name of these vessels
# The scraper does not overwrite the old file?
IMOS = [9372652, 9327487, 8226612, 8646678, 8667579, 9739836, 8026361, 9342451, 8810906, 6618811, 9259513, 8327105, 9831177, 9323699, 9619907, 9274848, 9602459, 9352315, 9536583, 9548342, 8205187, 9125009, 8827052, 9769128, 9256432, 9113721,8412235, 7102998, 9371878,9125944,9651151,5422540,	8602854]


hdr = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
       'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
       'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
       'Accept-Encoding': 'none',
       'Accept-Language': 'en-US,en;q=0.8',
       'Connection': 'keep-alive'}

items = []
for IMO in IMOS:
    url = r'https://www.vesselfinder.com/en/vessels/VOS-TRAVELLER-IMO-' + str(IMO)
    req = urllib.request.Request(url, None, hdr)
    with urllib.request.urlopen(req) as response:
        the_page = response.read()
    parsed_html = BeautifulSoup(the_page)
    tables = parsed_html.findAll("table")
    for table in tables:
        if table.findParent("table") is None:
            for row in table.findAll('tr'):
                aux = row.findAll('td')
                 
                try:
                    if aux[0].string == "Coordinates":
                        coords = aux[1].string
                    if aux[0].string == "Vessel Name":
                        name = aux[1].string
                    if aux[0].string == "Position received":
                        print(aux[1].get("data-title"))
                        zeit = datetime.strptime(aux[1].get("data-title"), '%b %d, %Y %H:%M %Z')
                        print(zeit)
                except: 
                    print("strange table found")
    coordsSplit = coords.split("/")
    def dms2dd(degrees,direction):
        dd = float(degrees) ;
        if direction == 'S' or direction == 'W':
            dd *= -1
        return dd
    def parse_dms(dms):
        parts = re.split(' ', dms)
        lat = dms2dd(parts[0], parts[1])
        return lat
    lat = parse_dms(coordsSplit[0])
    lng = parse_dms(coordsSplit[1])
    items.append((lat, lng, name, zeit))

#df = pd.DataFrame(items)
#df.columns = ['lat', 'lng', 'name', 'time']

filename = 'ship_positions.csv'
if os.path.exists(filename):
    append_write = 'a' # append if already exists
    fw = open(filename,append_write)
else:
    append_write = 'w' # make a new file if not
    fw = open(filename,append_write)
    fw.write("latitude,longitude,name,time\n")
for item in items:
    fw.write("%3.5f,%3.5f,%s,%s\n" % item)
fw.close()