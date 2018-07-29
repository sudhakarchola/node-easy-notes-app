module.exports = (app,apiRoutes,passport,jwt,User,dbConfig) => {
    const notes = require('../controllers/note.controller.js');


 apiRoutes.post('/notes', passport.authenticate('jwt', { session: false}), function(req, res) {
		  var token = getToken(req.headers);
		  if (token) {
		    var decoded = jwt.decode(token, dbConfig.secret);
		    User.findOne({
		      name: decoded.name
		    }, function(err, user) {
		        if (err) throw err;
		 
		        if (!user) {
		          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
		        } else {
		          // Retrieve all Notes
		            notes.create(req, res);
		            //res.json({success: true, msg: 'Welcome in the member area ' + user.name + '!'});
		        }
		    });
		  } else {
		    return res.status(403).send({success: false, msg: 'No token provided.'});
		  }
		});

  
    apiRoutes.get('/notes', passport.authenticate('jwt', { session: false}), function(req, res) {
		  var token = getToken(req.headers);
		  if (token) {
		    var decoded = jwt.decode(token, dbConfig.secret);
		    User.findOne({
		      name: decoded.name
		    }, function(err, user) {
		        if (err) throw err;
		 
		        if (!user) {
		          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
		        } else {
		          // Retrieve all Notes
		            notes.findAll(req, res);
		            //res.json({success: true, msg: 'Welcome in the member area ' + user.name + '!'});
		        }
		    });
		  } else {
		    return res.status(403).send({success: false, msg: 'No token provided.'});
		  }
		});
    
    
 apiRoutes.get('/notes/:noteId', passport.authenticate('jwt', { session: false}), function(req, res) {
		  var token = getToken(req.headers);
		  if (token) {
		    var decoded = jwt.decode(token, dbConfig.secret);
		    User.findOne({
		      name: decoded.name
		    }, function(err, user) {
		        if (err) throw err;
		 
		        if (!user) {
		          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
		        } else {
		          // Retrieve all Notes
		            notes.findOne(req, res);
		            //res.json({success: true, msg: 'Welcome in the member area ' + user.name + '!'});
		        }
		    });
		  } else {
		    return res.status(403).send({success: false, msg: 'No token provided.'});
		  }
		});
    
    apiRoutes.put('/notes/:noteId', passport.authenticate('jwt', { session: false}), function(req, res) {
		  var token = getToken(req.headers);
		  if (token) {
		    var decoded = jwt.decode(token, dbConfig.secret);
		    User.findOne({
		      name: decoded.name
		    }, function(err, user) {
		        if (err) throw err;
		 
		        if (!user) {
		          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
		        } else {
		          // Retrieve all Notes
		            notes.update(req, res);
		            //res.json({success: true, msg: 'Welcome in the member area ' + user.name + '!'});
		        }
		    });
		  } else {
		    return res.status(403).send({success: false, msg: 'No token provided.'});
		  }
		});
		
		
		 apiRoutes.delete('/notes/:noteId', passport.authenticate('jwt', { session: false}), function(req, res) {
		  var token = getToken(req.headers);
		  if (token) {
		    var decoded = jwt.decode(token, dbConfig.secret);
		    User.findOne({
		      name: decoded.name
		    }, function(err, user) {
		        if (err) throw err;
		 
		        if (!user) {
		          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
		        } else {
		          // Retrieve all Notes
		            notes.delete(req, res);
		            //res.json({success: true, msg: 'Welcome in the member area ' + user.name + '!'});
		        }
		    });
		  } else {
		    return res.status(403).send({success: false, msg: 'No token provided.'});
		  }
		});
   
    
    getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};
    
    
}
