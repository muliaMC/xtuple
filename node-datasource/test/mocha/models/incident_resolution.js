/*jshint trailing:true, white:true, indent:2, strict:true, curly:true,
  immed:true, eqeqeq:true, forin:true, latedef:true,
  newcap:true, noarg:true, undef:true */
/*global XT:true, XM:true, XV:true, process:true, module:true, require:true */

var crud = require('../lib/crud'),
assert = require('chai').assert,
expect = require('chai').expect,
zombieAuth = require('../lib/zombie_auth'),

data = {
      recordType: "XM.IncidentResolution",
      autoTestAttributes: true,
      createHash: {
        name: "Fixed1",
        description: "Description"
      },
      updateHash: {
        name: "fixed2"
      }
};

timeout = 20*1000;

describe('IncidentResolution CRUD Test', function(){
  before(function (done){
    this.timeout(timeout);
    zombieAuth.loadApp(done);
  });

  it('should be able to Initialize an XM.IncidentResolution Model', function(){
    data.model = new XM.IncidentResolution();
    expect(data.model).to.exist;
    assert.equal(data.model.recordType, 'XM.IncidentResolution', 'INIT Value should be XM.IncidentResolution');
  });

  it('should create an XM.IncidentResolution Model', function(){
    data.model.set(data.createHash);
    crud.save(data)
  });

  it('should read an XM.IncidentResolution Model', function(){
    assert.equal(data.model.get('name'), data.createHash.name, 'Model Name READ Value is equal')
    assert.equal(data.model.get('description'), data.createHash.description, 'Model Description READ Value is equal')
  });

  it('should update an XM.IncidentResolution Model', function(){
    data.model.set(data.updateHash);
    crud.save(data)
    assert.equal(data.model.get('name'), data.updateHash.name, 'Model Name UPDATE Value is equal')
  });

  it('should delete an XM.IncidentResolution Model', function(){
    crud.destroy(data)
  });


});

