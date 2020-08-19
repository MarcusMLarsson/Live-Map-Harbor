import pandas as pd
import re
import requests
from urllib.request import Request, urlopen
from bs4 import BeautifulSoup as soup
import numpy as np
import os

url = 'https://www.myshiptracking.com/ports/port-of-goteborg-in-se-sweden-id-380'

header = {
  "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.75 Safari/537.36",
  "X-Requested-With": "XMLHttpRequest"
}

r1 = requests.get(url, headers = header)

df = pd.read_html(r1.text)

dfInfo = df[0]
dfExpectedArrivals = df[1].iloc[: , 0: 2]
dfActivity = df[2].iloc[: , [0, 2, 3, 4]]

url = 'https://www.myshiptracking.com/ports/port-of-goteborg-in-se-sweden-id-380'
req = Request(url, headers = {
  'User-Agent': 'Mozilla/5.0'
})

webpage = urlopen(req).read()

page_soup = soup(webpage, "html.parser")

vip = page_soup.find_all("div", class_ = "in_port_table")
vip1 = re.sub('<[^>]*>', '', str(vip))
vip2 = vip1.replace("[", "")
vip3 = vip2.replace("]", "")

dfVesselsInPort = pd.DataFrame([x.split(',') for x in vip3.split('\n')]).T
dfVesselsInPort.columns = ["Vessels in port"]

dfActivity.to_csv(r'activity.csv', index=False)
dfExpectedArrivals.to_csv(r'expectedArrivals.csv', index=False)
dfVesselsInPort.to_csv(r'vesselsInPort.csv', index=False)

