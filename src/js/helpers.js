import * as config from './config.js';

const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };
  

export const AJAXRequest = async function(url, data) {
  try {
    const req = data ? fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }) : fetch(url); // Post : Get

    const res = await Promise.race([req, timeout(config.REQUEST_TIMOUT_SEC)]);

    const responseData = await res.json();

    if (!res.ok) {
      const error = new Error(`${responseData.message} (${res.status})`);
      error.status = res.status;
      throw error;    
    }
    
    return responseData;
  } catch(error) {
    throw error;
  }
}
