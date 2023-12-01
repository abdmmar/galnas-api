import * as CollectionRepository from '@/repositories/collection.js'

const getCollections = () => {
  const collections = CollectionRepository.getCollections()
  return collections
}

export { getCollections }
