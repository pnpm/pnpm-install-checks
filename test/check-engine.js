'use strict'
const tape = require('tape')
const test = require('tape-promise').default(tape)
const c = require('../index.js').checkEngine

test('no engine defined', function (t) {
  return c({ engines: {} }, {pnpmVersion: '1.1.2', nodeVersion: '0.2.1'})
    .then(warn => t.ok(!warn))
})

test('node version too old', function (t) {
  var target = { engines: { node: '0.10.24' } }
  return c(target, {pnpmVersion: '1.1.2', nodeVersion: '0.10.18'})
    .then(warn => {
      t.ok(warn, 'returns an error')
      t.equals(warn.required.node, '0.10.24')
    })
})

test('pnpm version too old', function (t) {
  var target = { engines: { pnpm: '^1.4.6' } }
  return c(target, {pnpmVersion: '1.3.2', nodeVersion: '0.2.1'})
    .then(warn => {
      t.ok(warn, 'returns an error')
      t.equals(warn.required.pnpm, '^1.4.6')
    })
})

test('no engine', function (t) {
  return c({}, {pnpmVersion: '1.3.2', nodeVersion: '0.2.1'})
    .then(warn => {
      t.notOk(warn, 'returns no warn')
    })
})
