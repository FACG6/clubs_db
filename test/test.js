const supertest = require('supertest');
const test = require('tape');
const router = require('../src/router');

test('Hnadle Home Page', (t)=>{
	supertest(router)
	.get('/')
	.expect(200)
	.expect('content-type', /html/)
	.end((err)=>{
		t.error(err)
		t.end()
	});
});

test('Hnadle Home Page Content', (t) => {
	supertest(router)
		.get('/')
		.expect(200)
		.expect('content-type', /html/)
		.end((err, res) => {
			t.error(err)
			t.equal(res.text.includes('<title>Clubs App</title>'), true, 'pass')
			t.end()
		});
});

test('Testing handleStatics: style.css', (t)=>{
	supertest(router)
		.get('/public/css/style.css')
		.expect(200)
		.expect('content-type', 'text/css')
		.end((err) => {
			t.error(err)
			t.end()
		});
});

test('Testing style.css Content', (t) => {
	supertest(router)
		.get('/public/css/style.css')
		.expect(200)
		.expect('content-type', 'text/css')
		.end((err, res) => {
			t.error(err)
			t.equal(res.text.includes('.notFoundSection') && res.text.includes('text-align: center;'), true, 'pass')
			t.end()
		});
});

test('Testing handleStatics: dom.js', (t) => {
	supertest(router)
		.get('/public/js/dom.js')
		.expect(200)
		.expect('content-type', 'text/javascript')
		.end((err) => {
			t.error(err)
			t.end()
		});
});

test('Handle Not Found Page', (t) => {
	supertest(router)
	.get('/blog')
	.expect(404)
	.expect('content-type', /html/)
	.end((err) => {
		t.error(err)
		t.end()
	});
});

// Test create router
