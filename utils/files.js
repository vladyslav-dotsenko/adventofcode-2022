import { readFileSync } from 'fs'

export const readFile = filename => readFileSync(filename)?.toString() || ''
export const readFileAsLines = filename => readFile(filename).split('\n')
