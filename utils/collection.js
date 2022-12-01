export const splitBy = separator => collection => {
	const result = [[]]
  let index = 0
  collection.forEach(x => {
    if (x === separator) {
      result[++index] = []
    } else {
      result[index].push(x)
    }
  })

  return result
}

export const sumReducer = (acc, value) => acc + value
export const sum = collection => collection.reduce(sumReducer, 0)

export const maxReducer = (acc, value) => Math.max(acc, value)
export const max = collection => collection.reduce(maxReducer, -Infinity)
