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
IMOS = [9780457, 9651151, 9602459, 9548342, 9444479, 9380441, 9342451, 9333917, 9327475, 9323699, 9318230, 9315769, 9310317, 9284647, 9274848, 9268253, 9259513, 9192076, 9175250, 9127760, 9125944, 9125009, 9113721, 9107069, 8962929, 8810906, 8667579, 8646678, 8634144, 8634120, 8602854, 8423909, 8412235, 8325509, 8325468, 8226612, 7102998, 6618811, 5422540, 5338971, 5047481, 5000172]

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
    parsed_information = parsed_html.findAll("p")
    info_1 = parsed_information[0].text
    info_1 = info_1.replace('\n','')
    info_1 = info_1.replace(',','')
    info_1 = " ".join(info_1.split())
    info_2 = parsed_information[1].text
    info_2 = info_2.replace('\n','')
    info_2 = info_2.replace(',','')
    info_2 = " ".join(info_2.split())
    parsed_image = parsed_html.findAll('img')
    images = []
    for i in parsed_image:
        images.append(i['src'])
    ship_image = images[1]
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
                    if aux[0].string == "Year of Built":
                        built = aux[1].string
                    if aux[0].string == "IMO number":
                        imo = aux[1].string
                    if aux[0].string == "Ship type":
                        stype = aux[1].string
                    if aux[0].string == "Flag":
                        flag = aux[1].string
                    if aux[0].string == "Destination":
                        destination = aux[1].string
                    if aux[0].string == "ETA":
                        eta = aux[1].string
                    if aux[0].string == "Status":
                        status = aux[1].string
                    if aux[0].string == "Course / Speed":
                        speed = aux[1].string
                    if aux[0].string == "Coordinates":
                        coordinates = aux[1].string
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
    items.append((lat, lng, name, zeit, built, imo, stype, flag, destination, status, speed, info_1, info_2,ship_image, coordinates))

#df = pd.DataFrame(items)
#df.columns = ['lat', 'lng', 'name', 'time']

filename = 'ship_positions.csv'
if os.path.exists(filename):
    append_write = 'a' # append if already exists
    fw = open(filename,append_write)
else:
    append_write = 'w' # make a new file if not
    fw = open(filename,append_write)
    fw.write("latitude,longitude,name,time,built,imo,type,flag,destination,status,speed,info_1,info_2,ship_img,coordinates\n")
for item in items:
    fw.write("%3.5f,%3.5f,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s\n" % item)
fw.close()