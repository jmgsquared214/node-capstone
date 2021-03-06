var unirest = require('unirest');
var express = require('express');
var events = require('events');
var jsonfile = require('jsonfile');
var mongoose = require('mongoose');
var app = express();
var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ReplSetServers = require('mongodb').ReplSetServers,
    ObjectID = require('mongodb').ObjectID,
    Binary = require('mongodb').Binary,
    GridStore = require('mongodb').GridStore,
    Grid = require('mongodb').Grid,
    Code = require('mongodb').Code,
    assert = require('assert');
app.use(express.static('public'));



var uri = process.env.MONGOLAB_AQUA_URI;


mongoose.connect(uri);

var Stat = mongoose.model('Moneypermin', { PlayerName: String, 
                                            Pos: String,
                                            Age: Number,
                                            Tm: String, 
                                            G: Number,
                                            GS: Number, 
                                            MP: Number, 
                                            FG: Number, 
                                            FGA: Number, 
                                            'FG%': Number, 
                                            '3P': Number, 
                                            '3PA': Number, 
                                            '2P': Number, 
                                            '2PA': Number, 
                                            '2P%': Number, 
                                            FT: Number, 
                                            FTA: Number, 
                                            'FT%': Number, 
                                            ORB: Number, 
                                            DRB: Number, 
                                            TRB: Number,  
                                            AST: Number,  
                                            STL: Number,  
                                            BLK: Number,  
                                            TOV: Number,  
                                            PF: Number,  
                                            PTS: Number,  
                                            ORTG: Number,  
                                            DRTG: Number,  
                                            TeamPace: Number,  
                                            AdjORtg: Number,  
                                            AdjDRtg: Number,  
                                            avgMin: Number,  
                                            IndPos: Number,  
                                            'Ortg/Min': Number,  
                                            'Drtg/Min': Number,  
                                            Diff: Number,  
                                            Salary: Number,  
                                            'Dollar/OffCont': Number,  
                                            'Dollar/DefCont': Number,  
                                            'Dollar/ContDiff': Number,  
                                            'Dollar/Minute': Number,  
                                            'Dollar/game': Number
}, 'moneypermin' );

app.get('/api/moneypermin', function(req, res) {
    Stat.find(function(err, data) {
        res.json(data);
    });
});
app.listen(process.env.PORT || 8080);

exports.app = app;