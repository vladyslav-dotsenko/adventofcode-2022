import { readFileAsLines, readFile } from '../utils/files.js'
import { splitBy, sum, max } from '../utils/collection.js'
import { asInteger } from '../utils/datatype.js'

const INPUT_FILE = './d01/input.txt'

const lines = readFileAsLines(INPUT_FILE)
const elves = splitBy('')(lines)
	.map(line => line.map(asInteger))
	.map(sum)
	.sort((a, b) => a < b ? '1' : '-1')

const result = sum([
	elves[0] ?? 0,
	elves[1] ?? 0,
	elves[2] ?? 0,
])

console.log(`result is: ${result}`)
