export interface ICryptoCompareSource {
  info: ICoinInfo;
  display: IDisplayData;
}

export interface ICryptoCompareCoinInfo {
  Id: string;
  Name: string;
  FullName: string;
  Internal: string;
  ImageUrl: string;
  Url: string;
  Algorithm: string;
  ProofType: string;
  NetHashesPerSecond: number;
  BlockNumber: number;
  BlockTime: number;
  BlockReward: number;
  Type: number;
  DocumentType: string;
}

export interface ICryptoCompareDisplay {
  FROMSYMBOL: string;
  TOSYMBOL: string;
  MARKET: string;
  PRICE: string;
  LASTUPDATE: string;
  MEDIAN: string;
  LASTVOLUME: string;
  LASTVOLUMETO: string;
  LASTTRADEID: string;
  VOLUMEDAY: string;
  VOLUMEDAYTO: string;
  VOLUME24HOUR: string;
  VOLUME24HOURTO: string;
  OPENDAY: string;
  HIGHDAY: string;
  LOWDAY: string;
  OPEN24HOUR: string;
  HIGH24HOUR: string;
  LOW24HOUR: string;
  LASTMARKET: string;
  VOLUMEHOUR: string;
  VOLUMEHOURTO: string;
  OPENHOUR: string;
  HIGHHOUR: string;
  LOWHOUR: string;
  TOPTIERVOLUME24HOUR: string;
  TOPTIERVOLUME24HOURTO: string;
  CHANGE24HOUR: string;
  CHANGEPCT24HOUR: string;
  CHANGEDAY: string;
  CHANGEPCTDAY: string;
  CHANGEHOUR: string;
  CHANGEPCTHOUR: string;
  SUPPLY: string;
  MKTCAP: string;
  TOTALVOLUME24H: string;
  TOTALVOLUME24HTO: string;
  TOTALTOPTIERVOLUME24H: string;
  TOTALTOPTIERVOLUME24HTO: string;
  IMAGEURL: string;
  CONVERSIONTYPE: string;
  CONVERSIONSYMBOL: string;
}

export interface ICoinInfo {
  id: number;
  name: IName;
  image: string;
  url: string;
  algorithm: string;
  proofType: string;
  netHashPerSecond: number;
  blockNumber: number;
  blockTime: number;
  type: number;
}

export interface IDisplayData {
  currency: ICurrency;
  marketCap: string;
  price: IPrice;
  supply: string;
}

export interface ICurrency {
  crypto: string;
  fiat: string;
}

export interface IPrice {
  current: string;
  high: string;
  low: string;
  open: string;
}

export interface IName {
  symbol: string;
  fullName: string;
}

export interface IOptions {
  limit?: number;
  page?: number;
  tsym?: string;
  ascending?: boolean;
  sign?: boolean;
  APIKey: string;
}

export enum API {
  TOP_LIST_BY_24H_VOLUME_URI = "https://min-api.cryptocompare.com/data/top/totalvolfull"
}

export const message = "results were returned from Crypto Compare!";
