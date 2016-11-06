'use strict'
const tape = require('tape')
const test = require('tape-promise').default(tape)
var c = require('../index.js').checkPlatform

test('target cpu wrong', function (t) {
  const target = {
    cpu: 'enten-cpu',
    os: 'any'
  }
  return c(target)
    .then(err => {
      t.ok(err, 'error present')
      t.equal(err.code, 'EBADPLATFORM')
    })
})

test('os wrong', function (t) {
  const target = {
    cpu: 'any',
    os: 'enten-os'
  }
  return c(target)
    .then(err => {
      t.ok(err, 'error present')
      t.equal(err.code, 'EBADPLATFORM')
    })
})

test('nothing wrong', function (t) {
  const target = {
    cpu: 'any',
    os: 'any'
  }
  return c(target).then(err => t.notOk(err))
})

test('no opinions', function (t) {
  var target = {}
  return c(target).then(err => t.notOk(err))
})

test('only target cpu wrong', function (t) {
  var target = {cpu: 'enten-cpu'}
  return c(target)
    .then(err => {
      t.ok(err, 'error present')
      t.equal(err.code, 'EBADPLATFORM')
    })
})

test('only os wrong', function (t) {
  var target = {}
  target.os = 'enten-os'
  return c(target)
    .then(err => {
      t.ok(err, 'error present')
      t.equal(err.code, 'EBADPLATFORM')
    })
})

test('everything wrong w/arrays', function (t) {
  var target = {}
  target.cpu = ['enten-cpu']
  target.os = ['enten-os']
  return c(target)
    .then(err => {
      t.ok(err, 'error present')
      t.equal(err.code, 'EBADPLATFORM')
    })
})

test('os wrong (negation)', function (t) {
  var target = {}
  target.cpu = 'any'
  target.os = '!' + process.platform
  return c(target)
    .then(err => {
      t.ok(err, 'error present')
      t.equal(err.code, 'EBADPLATFORM')
    })
})

test('nothing wrong (negation)', function (t) {
  var target = {}
  target.cpu = '!enten-cpu'
  target.os = '!enten-os'
  return c(target).then(err => t.notOk(err))
})
