from secret import Secret
import requests
import pandas as pd
from pprint import pprint


headers = {
    'Content-Type': 'application/json'
}
ticker = 'EURUSD'
requestResponse = requests.get("https://api.tiingo.com/tiingo/fx/prices?tickers={}&startDate=2024-04-16&resampleFreq=1min&token={}".format(ticker, Secret.api_key), headers=headers)


data = requestResponse.json()

pprint(data)

#df = pd.DataFrame.from_dict(data)

#df.to_csv('{}.csv'.format(ticker))
