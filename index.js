'use strict';
var assert = require('chai').assert,
	request = require('supertest'),
	chai = require('chai');

var  url = 'https://pokeapi.co/api/v2/'

describe('Teste - Movimentação', function () {
	it('Move-se', function (done) {
		request(url)
	        .get('move/1/')
	      	.end(function (err, res) {
				assert.isNull(err);
				assert.equal(res.status, 200);
				assert.isNotNull(res.body);
				assert.equal(res.body.id, 1);
				assert.equal(res.body.name, 'pound');
				done();
			});
	});
});



