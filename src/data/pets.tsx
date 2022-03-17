const pets = new Array(5)
  .fill(1)
  .map((_, i) => ({
    id: i,
    name: `Pet ${i}`,
    type: 'DOG',
  }))

export default pets