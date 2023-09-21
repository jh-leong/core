import { LRUCache } from 'lru-cache'

export function createCache<T extends {}>(
  max = 500
): Map<string, T> | LRUCache<string, T> {
  if (__GLOBAL__ || __ESM_BROWSER__) {
    return new Map<string, T>()
  }
  const cache = new LRUCache<string, T>({ max })
  return cache
}
