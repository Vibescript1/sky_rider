import { useState, useCallback } from "react";
import { useLoading } from "@/contexts/LoadingContext";

export const useAsyncLoading = (key) => {
  const { setLoading } = useLoading();
  const [error, setError] = useState(null);

  const execute = useCallback(async (asyncFunction, ...args) => {
    try {
      setError(null);
      setLoading(key, true);
      const result = await asyncFunction(...args);
      return result;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(key, false);
    }
  }, [key, setLoading]);

  return { execute, error };
};

// Hook for component-level loading without global context
export const useLocalLoading = (initialState = false) => {
  const [isLoading, setIsLoading] = useState(initialState);
  const [error, setError] = useState(null);

  const execute = useCallback(async (asyncFunction, ...args) => {
    try {
      setError(null);
      setIsLoading(true);
      const result = await asyncFunction(...args);
      return result;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, error, execute, setIsLoading };
};
