// apiMiddleware.js
// apiMiddleware.ts
export const apiMiddleware = async (url: string, options?: RequestInit): Promise<Response> => {
  // Add common headers to options
  const headers = {
    // Add your common headers here
    'Content-Type': 'application/json',
    'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3NTQxODE2ODIxIiwiaWF0IjoxNzAwODMyMzYxLCJleHAiOjE3MDA4MzI0MjF9.k5RcW5p5Nbs69dUnES1lEe4Kd3FJe6wxooi1-A3qy6A'
    
    // Add any other headers you want to include
  };

  // Merge common headers with options.headers
  const mergedHeaders = {
    ...headers,
    ...(options?.headers || {}),
  };

  // Call the fetch function with the merged headers
  return fetch(url, {
    ...options,
    headers: mergedHeaders,
  });
};

