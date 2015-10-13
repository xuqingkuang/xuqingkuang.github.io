AV            = require 'avoscloud-sdk'
modelClass    = require './blog'

module.exports = AV.Collection.extend
  model: modelClass
