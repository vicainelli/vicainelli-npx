#!/usr/bin/env node
// Usado para dizer ao Node.js que se trata de uma ferramenta do CLI

// Declarando os módulos:
const chalk = require('chalk')
const boxen = require('boxen')

// Definindo as opções para o ‘boxen’:
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'classic',
}

const colors = {
  yellow: '#FCC603',
  cyan: '#9EFFFF',
  green: '#9BEF8A',
  magenta: '#F9618C',
  grey800: '#6D6D6D',
  grey300: '#C0C0C0'
}

// Text style using chalk lib:
const data = {
  name: chalk.hex(colors.yellow).bold('Vinicius Cainelli /'),
  handle: chalk.hex(colors.grey300)('vicainelli'),
  work: chalk.hex(colors.green)('Frontend Developer'),
  twitter: chalk.hex(colors.green)('https://twitter.com/vicainelli'),
  github: chalk.hex(colors.green)('https://github.com/vicainelli'),
  linkedin: chalk.hex(colors.green)('https://www.linkedin.com/in/vicainelli/'),
  web: chalk.hex(colors.green)('https://cainelli.dev/'),
  npx: chalk.hex(colors.magenta)('npx vicainelli'),
  labelWork: chalk.hex(colors.cyan).bold('     Title:'),
  labelTwitter: chalk.hex(colors.cyan).bold('   Twitter:'),
  labelGitHub: chalk.hex(colors.cyan).bold('    GitHub:'),
  labelLinkedIn: chalk.hex(colors.cyan).bold('  LinkedIn:'),
  labelWeb: chalk.hex(colors.cyan).bold('       Web:'),
  labelCard: chalk.hex(colors.cyan).bold('      Card:')
}

// Output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Concat all vars in just one
const output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding

console.log(chalk.hex(colors.grey800)(boxen(output, options)))