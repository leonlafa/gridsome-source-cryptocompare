import { mapCoinInfoData, mapDisplayData, isValid, mergeOptions } from '../lib/helper-functions';
const test = require('../lib/index');
import * as mock from './mock-data';
import axios from 'axios';
jest.mock('axios');

describe('Helper Functions', () => {
  describe('mapCoinInfoData()', () => {
    it('should pass when the function returns an object of type ICoinInfo', () => {
      const expectedResult = {
        id: "1182",
        name: { symbol: 'BTC', fullName: 'Bitcoin' },
        image: '/media/19633/btc.png',
        url: '/coins/btc/overview',
        algorithm: 'SHA-256',
        proofType: 'PoW',
        netHashPerSecond: 93116968007.1902,
        blockNumber: 600200,
        blockTime: 600,
        type: 1
      }
      const result = mapCoinInfoData(mock.CRYPTO_COMPARE_RESPONSE.Data.CoinInfo);
      expect(result).toEqual(expectedResult);
    });

    it('should fail when the function does not return an object of type ICoinInfo', () => {
      mock.INVALID_MAPPED_COIN_INFO_VALUES.forEach((invalidValue) => {
        const result = mapCoinInfoData(mock.CRYPTO_COMPARE_RESPONSE.Data.CoinInfo);
        expect(result).not.toEqual(invalidValue);
      })
    });
  });

  describe('mapDisplayData()', () => {
    it('should pass when the function returns an object of type IDisplay', () => {
      const expectedResult = {
        currency: { crypto: 'Ƀ', fiat: '€' },
        marketCap: '€ 128.68 B',
        price:
        {
          current: '€ 7,147.88',
          high: '€ 7,156.67',
          low: '€ 7,076.07',
          open: '€ 7,133.13'
        },
        supply: 'Ƀ 18,002,487.0'
      }
      const result = mapDisplayData(mock.CRYPTO_COMPARE_RESPONSE.Data.DISPLAY, 'EUR');
      expect(result).toEqual(expectedResult);
    });

    it('should fail when the tysm argument does not match the API response tsym', async () => {
      try {
        mapDisplayData(mock.CRYPTO_COMPARE_RESPONSE.Data.DISPLAY, 'invalidValue');
      } catch (e) {
        expect(e).toStrictEqual(Error("There was an error reading the API response"));
      }
    });
  });

  describe('isValid()', () => {
    it('should pass when a valid string or number argument is provided', () => {
      let result = isValid('truthy');
      expect(result).toEqual(true);
      result = isValid(0);
      expect(result).toEqual(true);
    });

    it('should fail when argument provided is a falsy value', () => {
      const result = isValid('');
      expect(result).toEqual(false);
    });
  });

  describe('isValid()', () => {
    it('should pass when a valid string or number argument is provided', () => {
      let result = isValid('truthy');
      expect(result).toEqual(true);
      result = isValid(0);
      expect(result).toEqual(true);
    });

    it('should fail when argument provided is a falsy value', () => {
      const result = isValid('');
      expect(result).toEqual(false);
    });
  });

  describe('mergeOptions()', () => {
    const expectedResult = {
      "APIKey": "mockApiKey",
      "ascending": true,
      "limit": 20,
      "page": 50,
      "sign": false,
      "tsym": "GBP"
    }

    it('should merge default and user defined options', () => {
      let result = mergeOptions()({ APIKey: 'mockApiKey', limit: 20 });
      expect(result).toEqual(expectedResult);
    });
  });
});

describe('API Request', () => {
  const url = 'https://min-api.cryptocompare.com/data/top/totalvolfull'
  const mockTsymb = 'GBP';
  const mockLimit = 10;
  const mockRequestWithDefaultOptions = `${url}?limit=${mockLimit}&tsym=${mockTsymb}`
  const mockAPIKey = '33f7048ebf29bec78523b9b9d725602a004d7e250c5f06e12890eda123456789';
  const mockAxios = jest.spyOn(axios, 'get');
  mockAxios.mockResolvedValue({});

  xit('should call the API with default options', async () => {
    await test({}, { APIKey: mockAPIKey })
    expect(mockAxios).toHaveBeenCalledWith(`${mockRequestWithDefaultOptions}&api_key=${mockAPIKey}`);
    mockAxios.mockClear()
  });

  xit('should call the API with merged, default and user defined options', async () => {
    const mockUserOptions = {
      limit: 30,
      APIKey: 'userProvidedAPIKey'
    }
    const mockAPIRequest = `${url}?limit=${mockUserOptions.limit}&tsym=${mockTsymb}`

    await test({},{ limit: 30, APIKey: mockUserOptions.APIKey });

    expect(mockAxios).toHaveBeenCalledWith(`${mockAPIRequest}&api_key=${mockUserOptions.APIKey}`);

    mockAxios.mockClear()
  });
});
