import qs from "qs";
import {useCallback, useState} from "react";

export const numberDivision = (dividend: number, divider: number, digits: number): string => {
  const value = dividend / divider;
  return String(parseFloat(value.toString()).toFixed(digits));
}

export const formatNumber = (count: number) => {
  if (count < 10000) {
    return String(count.toLocaleString())
  }
  if (count >= 10000 && count <= 100000) {
    const value = numberDivision(count, 1000, 1)
    return value + "K";
  }
  if (count > 100000) {
    const value = numberDivision(count, 1000, 0)
    return value + "K";
  }
  return count;
}

export const abbreviateNumber = function (num: number, fixed = 0) {
  if (num === null) {
    return null;
  } // terminate early
  if (num === 0) {
    return '0';
  } // terminate early
  fixed = (!fixed || fixed < 0) ? 0 : fixed; // number of decimal places to show
  var b = (num).toPrecision(2).split("e"), // get power
    // @ts-ignore
    k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3), // floor at decimals, ceiling at trillions
    c = k < 1 ? num.toFixed(0 + fixed) : (num / Math.pow(10, k * 3)).toFixed(1 + fixed), // divide by power
    // @ts-ignore
    d = c < 0 ? c : Math.abs(c), // enforce -0 is 0
    e = d + ['', 'K', 'M', 'B', 'T'][k]; // append power
  return e;
}

export const getQueryParams = (search: string) => {
  return {...qs.parse(search.replace('?', ''))}
}

export const useLocationHook = () => {
  const [state, setState] = useState<any>(null);

  const setParams = useCallback((objParams: any) => {
    setState(objParams)
  }, [])

  const getNavigate = useCallback((navigate: any) => {
    return navigate(`?${qs.stringify({...state})}`);
  }, [state])

  return {setParams, getNavigate, state}
}

