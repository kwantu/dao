'use strict';

// Require the test framework modules
var chai = require("chai");
var should = chai.should();
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

// Require the Workflow constructor / class 
var DAO = require("../../index.js");

// Create the dao constrctor instance
var dao = new DAO();

// Gatekeeper module test
describe('# Module: DAO', function(){
	// Test the new DAO constructor method
	describe('- new DAO() object instance', function(){
		it('Should return ... ')
	});
	// Describe other tests below

});
