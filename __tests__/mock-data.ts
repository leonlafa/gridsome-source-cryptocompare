export const CRYPTO_COMPARE_RESPONSE = {
    "Data":
    {
        "CoinInfo": {
            "Id": "1182",
            "Name": "BTC",
            "FullName": "Bitcoin",
            "Internal": "BTC",
            "ImageUrl": "/media/19633/btc.png",
            "Url": "/coins/btc/overview",
            "Algorithm": "SHA-256",
            "ProofType": "PoW",
            "NetHashesPerSecond": 93116968007.1902,
            "BlockNumber": 600200,
            "BlockTime": 600,
            "BlockReward": 12.5,
            "Type": 1,
            "DocumentType": "Webpagecoinp"
        },
        "RAW": {
            "EUR": {
                "TYPE": "5",
                "MARKET": "CCCAGG",
                "FROMSYMBOL": "BTC",
                "TOSYMBOL": "EUR",
                "FLAGS": "1026",
                "PRICE": 7147.88,
                "LASTUPDATE": 1571573673,
                "MEDIAN": 7144.63,
                "LASTVOLUME": 0.303,
                "LASTVOLUMETO": 2164.82289,
                "LASTTRADEID": "98972779",
                "VOLUMEDAY": 1208.902659079994,
                "VOLUMEDAYTO": 8600864.354553072,
                "VOLUME24HOUR": 3205.9358954499994,
                "VOLUME24HOURTO": 22907199.25596046,
                "OPENDAY": 7133.13,
                "HIGHDAY": 7156.67,
                "LOWDAY": 7076.07,
                "OPEN24HOUR": 7223.42,
                "HIGH24HOUR": 7257.52,
                "LOW24HOUR": 7073.71,
                "LASTMARKET": "Bitstamp",
                "VOLUMEHOUR": 51.457243740000045,
                "VOLUMEHOURTO": 367074.2679070931,
                "OPENHOUR": 7120.29,
                "HIGHHOUR": 7149.77,
                "LOWHOUR": 7119.91,
                "TOPTIERVOLUME24HOUR": 2715.2551730599994,
                "TOPTIERVOLUME24HOURTO": 19391871.084615264,
                "CHANGE24HOUR": -75.53999999999996,
                "CHANGEPCT24HOUR": -1.0457650254311663,
                "CHANGEDAY": 14.75,
                "CHANGEPCTDAY": 0.2067815951763111,
                "CHANGEHOUR": 27.590000000000146,
                "CHANGEPCTHOUR": 0.38748421763720503,
                "SUPPLY": 18002487,
                "MKTCAP": 128679616777.56,
                "TOTALVOLUME24H": 222478.43489329208,
                "TOTALVOLUME24HTO": 1590240709.3926558,
                "TOTALTOPTIERVOLUME24H": 77973.88544424211,
                "TOTALTOPTIERVOLUME24HTO": 557331529.2273924,
                "IMAGEURL": "/media/19633/btc.png",
                "CONVERSIONTYPE": "direct",
                "CONVERSIONSYMBOL": ""
            }
        },
        "DISPLAY": {
            "EUR": {
                "FROMSYMBOL": "Ƀ",
                "TOSYMBOL": "€",
                "MARKET": "CryptoCompare Index",
                "PRICE": "€ 7,147.88",
                "LASTUPDATE": "Just now",
                "MEDIAN": "€ 7,144.63",
                "LASTVOLUME": "Ƀ 0.3030",
                "LASTVOLUMETO": "€ 2,164.82",
                "LASTTRADEID": "98972779",
                "VOLUMEDAY": "Ƀ 1,208.90",
                "VOLUMEDAYTO": "€ 8,600,864.4",
                "VOLUME24HOUR": "Ƀ 3,205.94",
                "VOLUME24HOURTO": "€ 22,907,199.3",
                "OPENDAY": "€ 7,133.13",
                "HIGHDAY": "€ 7,156.67",
                "LOWDAY": "€ 7,076.07",
                "OPEN24HOUR": "€ 7,223.42",
                "HIGH24HOUR": "€ 7,257.52",
                "LOW24HOUR": "€ 7,073.71",
                "LASTMARKET": "Bitstamp",
                "VOLUMEHOUR": "Ƀ 51.46",
                "VOLUMEHOURTO": "€ 367,074.3",
                "OPENHOUR": "€ 7,120.29",
                "HIGHHOUR": "€ 7,149.77",
                "LOWHOUR": "€ 7,119.91",
                "TOPTIERVOLUME24HOUR": "Ƀ 2,715.26",
                "TOPTIERVOLUME24HOURTO": "€ 19,391,871.1",
                "CHANGE24HOUR": "€ -75.54",
                "CHANGEPCT24HOUR": "-1.05",
                "CHANGEDAY": "€ 14.75",
                "CHANGEPCTDAY": "0.21",
                "CHANGEHOUR": "€ 27.59",
                "CHANGEPCTHOUR": "0.39",
                "SUPPLY": "Ƀ 18,002,487.0",
                "MKTCAP": "€ 128.68 B",
                "TOTALVOLUME24H": "Ƀ 222.48 K",
                "TOTALVOLUME24HTO": "€ 1.59 B",
                "TOTALTOPTIERVOLUME24H": "Ƀ 77.97 K",
                "TOTALTOPTIERVOLUME24HTO": "€ 557.33 M",
                "IMAGEURL": "/media/19633/btc.png",
                "CONVERSIONTYPE": "direct",
                "CONVERSIONSYMBOL": ""
            }
        }
    }
}

export const GLOBAL_INVALID_VALUES = [
    null,
    undefined,
    '',
    false,
    {}
]

const INVALID_MAPPED_COIN_INFO_VALUE_1 = { // missing property
    name: { symbol: 'BTC', fullName: 'Bitcoin' },
    // image: '/media/19633/btc.png',  => missing
    url: '/coins/btc/overview',
    algorithm: 'SHA-256',
    proofType: 'PoW',
    netHashPerSecond: 93116968007.1902,
    blockNumber: 600200,
    blockTime: 600,
    type: 1
}

const INVALID_MAPPED_COIN_INFO_VALUE_2 = { // wrong property type 
    name: { symbol: 'BTC', fullName: 'Bitcoin' },
    image: '/media/19633/btc.png',
    url: '/coins/btc/overview',
    algorithm: 'SHA-256',
    proofType: 'PoW',
    netHashPerSecond: 93116968007.1902,
    blockNumber: 600200,
    blockTime: "600", // should be number
    type: 1
}

const INVALID_MAPPED_DISPLAY_VALUE_1 = {
    currency: { crypto: 'Ƀ', fiat: '€' },
    price:
    {
        current: '€ 7,147.88',
        high: '€ 7,156.67',
        low: '€ 7,076.07',
        open: '€ 7,133.13'
    },
    supply: 'Ƀ 18,002,487.0'
}

const INVALID_MAPPED_DISPLAY_VALUE_2 = {
    currency: { crypto: 'Ƀ', fiat: '€' },
    marketCap: null,
    price:
    {
        current: '€ 7,147.88',
        high: '€ 7,156.67',
        low: '€ 7,076.07',
        open: '€ 7,133.13'
    },
    supply: 'Ƀ 18,002,487.0'
}

export const INVALID_MAPPED_COIN_INFO_VALUES = [
    ...GLOBAL_INVALID_VALUES,
    INVALID_MAPPED_COIN_INFO_VALUE_1,
    INVALID_MAPPED_COIN_INFO_VALUE_2

]

export const INVALID_DISPLAY_VALUES = [
    ...GLOBAL_INVALID_VALUES,
    INVALID_MAPPED_DISPLAY_VALUE_1,
    INVALID_MAPPED_DISPLAY_VALUE_2

]

export const INVALID_TSYM_VALUES = [
    'GBP',
    '',
    undefined,
    null
]
