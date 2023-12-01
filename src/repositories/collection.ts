import collection from '../../data/collection.json' assert { type: 'json' }

const getCollections = () => {
  return collection.items
}

export { getCollections }
