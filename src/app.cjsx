AV          = require 'avoscloud-sdk'
ReactDOM    = require 'react-dom'
routes      = require './routes'
config      = require './config'

AV.initialize(config.leanCloud.id, config.leanCloud.key)
ReactDOM.render routes, document.getElementById('site')
