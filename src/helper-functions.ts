import {
    IDisplayData,
    ICryptoCompareCoinInfo,
    ICryptoCompareDisplay,
    IOptions
} from "./types";

export const mapCoinInfoData = (info: ICryptoCompareCoinInfo): any => {
    return {
        id: info.Id,
        name: {
            symbol: info.Name,
            fullName: info.FullName
        },
        image: info.ImageUrl,
        url: info.Url,
        algorithm: info.Algorithm,
        proofType: info.ProofType,
        netHashPerSecond: info.NetHashesPerSecond,
        blockNumber: info.BlockNumber,
        blockTime: info.BlockTime,
        type: info.Type
    };
};

export const mapDisplayData = (display: any, tsym: string): IDisplayData => {
    const _display: ICryptoCompareDisplay = display[tsym];

    try {
        const {
            FROMSYMBOL,
            TOSYMBOL,
            PRICE,
            LOWDAY,
            HIGHDAY,
            OPENDAY,
            MKTCAP,
            SUPPLY
        } = _display;

        return {
            currency: {
                crypto: FROMSYMBOL,
                fiat: TOSYMBOL
            },
            marketCap: MKTCAP,
            price: {
                current: PRICE,
                high: HIGHDAY,
                low: LOWDAY,
                open: OPENDAY
            },
            supply: SUPPLY
        };
    } catch (e) {
        throw Error("There was an error reading the API response");
    }
};

export const isValid = (value: string | number) => {
    if (value !== null && typeof value !== "undefined" && value !== "") {
        return true;
    }

    return false;
};

export const mergeOptions = () => {
    const sourceOptions: IOptions = {
        limit: 10,
        page: 50,
        tsym: "GBP",
        sign: false,
        ascending: true,
        APIKey: ""
    };
    return (userDefinedOpts: IOptions): IOptions => {
        Object.keys(userDefinedOpts).forEach(key => {
            if (isValid(userDefinedOpts[key])) {
                sourceOptions[key] = userDefinedOpts[key];
            }
        });
        return sourceOptions;
    };
};
