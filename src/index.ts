import axios from "axios";
import { IOptions, API } from "./types";
import {
  mapCoinInfoData,
  mapDisplayData,
  isValid,
  mergeOptions
} from "./helper-functions";

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

      const source = Data.map((coin: any) => {
        return {
          info: mapCoinInfoData(coin.CoinInfo),
          display: mapDisplayData(coin.DISPLAY, <string>_options.tsym)
        };
      });

      console.log(
        `Successfully returned ${source.length} results from Crypto Compare!`
      );

      for (const item of source) {
        collection.addNode({
          info: item.info,
          display: item.display
        });
      }
      return source;
    } catch (error) {
      return error;
    }
  });
};
