import axios from "axios";
import { IOptions, API, message } from "./types";
import {
  mapCoinInfoData,
  mapDisplayData,
  mergeOptions
} from "./helper-functions";
import chalk from "chalk";

module.exports = async (
  api: any = {},
  userDefinedOptions: IOptions
): Promise<any> => {
  // if (!isValid(providedOptions.apiKey)) return 'You must provide an API key!';
  const _options: IOptions = mergeOptions()(userDefinedOptions);
  api.loadSource(async (actions: any) => {
    try {
      const collection = actions.addCollection("CryptoCompare");
      const {
        data: { Data }
      } = await axios.get(
        `${API.TOP_LIST_BY_24H_VOLUME_URI}?limit=${_options.limit}&tsym=${_options.tsym}&api_key=${_options.APIKey}`
      );

      if (Data)
        console.log(
          chalk.bgHex("#3FBB90").bold.hex("#1F344A")(" SUCCESS ") +
            `${Data.length} ${message}`
        );

      const source = Data.map((coin: any) => {
        return {
          info: mapCoinInfoData(coin.CoinInfo),
          display: mapDisplayData(coin.DISPLAY, <string>_options.tsym)
        };
      });

      for (const item of source) {
        collection.addNode({
          id: item.info.id,
          name: {
            symbol: item.info.name.symbol,
            fullName: item.info.name.fullName
          },
          image: item.info.image,
          url: item.info.url,
          algorithm: item.info.algorithm,
          proofType: item.info.proofType,
          netHashPerSecond: item.info.netHashPerSecond,
          blockNumber: item.info.blockNumber,
          blockTime: item.info.blockNumber,
          type: item.info.type,
          currency: {
            crypto: item.display.currency.crypto,
            fiat: item.display.currency.fiat
          },
          marketCap: item.display.marketCap,
          price: {
            current: item.display.price.current,
            high: item.display.price.high,
            low: item.display.price.low,
            open: item.display.price.open
          },
          supply: item.display.supply
        });
      }
      return source;
    } catch (error) {
      return error;
    }
  });
};
