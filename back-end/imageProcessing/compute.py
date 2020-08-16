import sys, json, numpy as np
import argparse
import requests
from PIL import Image, ImageDraw, ImageFont
from io import BytesIO
###############
API_URL = 'https://kapi.kakao.com/v1/vision/multitag/generate'
MYAPP_KEY = '59b54b989435c1072b70025fd489a87b'

def generate_tag(image_url):
    headers = {'Authorization': 'KakaoAK {}'.format(MYAPP_KEY)}
    #print(headers)
    try:
        data = { 'image_url' : image_url}
        resp = requests.post(API_URL, headers=headers, data=data)
        # print(resp)
        resp.raise_for_status()
        result = resp.json()['result']
        print(result['label'])

    except Exception as e:
        print(str(e))
        sys.exit(0)
###############
#Read data from stdin
generate_tag(sys.argv[1])