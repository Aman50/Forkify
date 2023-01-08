import * as config from './config.js';

const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };
  
export const submitGetRequest = async function (url) {
    try {
      const res = await Promise.race([fetch(url), timeout(config.REQUEST_TIMOUT_SEC)]);
      const data = await res.json();
  
      if (!res.ok) {
        const error = new Error(`${data.message} (${res.status})`);
        error.status = res.status;
        throw error;
      }
      return data;
    } catch (error) {
      throw error;
    }
  };