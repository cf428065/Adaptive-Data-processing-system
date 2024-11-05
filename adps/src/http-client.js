// Author: Charlotte Fehlhauer

import React, { createContext, useContext, useState } from 'react';

// HttpClient Implementation
class HttpClient {
   baseURL;

  init(baseURL) {
    this.baseURL = baseURL;
  }

  async get(collection) {
    const response = await fetch(`${this.baseURL}/${collection}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    return this.result(response);
  }

  async isUserLoggedIn() {
    try {
      const response = await fetch(`${this.baseURL}/users/sign-in`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });
      return response.ok;
    } catch (error) {
      console.error(error);
      return false;
    }
  }


   async result(response) {
    if (response.ok) return response;
    const message = await response.text();
    const errorMsg = JSON.parse(message)?.message || response.statusText;
    return Promise.reject({ message: errorMsg, statusCode: response.status });
  }
}

// HttpClient Context
const HttpClientContext = createContext<HttpClient | null>(null);

export const useHttpClient = () => {
  const context = useContext(HttpClientContext);
  if (!context) {
    throw new Error("useHttpClient must be used within a HttpClientProvider");
  }
  return context;
};

// HttpClient Provider Component
export const HttpClientProvider = ({ baseURL, children }) => {
  const [client] = useState(() => {
    const httpClient = new HttpClient();
    httpClient.init(baseURL);
    return httpClient;
  });

  return <HttpClientContext.Provider value={client}>{children}</HttpClientContext.Provider>;
};
