const {assert} = require('chai');
const sinon = require('sinon');
const handlers = require('../src/apiHandlers');

describe('API Hanlders Unit Tests', () => {
  describe('allowAuthorized', () => {
    it('should allow authorized requests', () => {
      const req = {session: {id: 1}};
      const res = {};
      const next = sinon.fake();

      handlers.allowAuthorized(req, res, next);

      assert.isOk(next.calledOnce);
    });

    it('should not allow unauthorized requests', () => {
      const status = sinon.stub();
      const json = sinon.spy();
      const req = {session: {}};
      const res = {status};
      const next = sinon.fake();
      status.withArgs(401).returns({json});

      handlers.allowAuthorized(req, res, next);

      assert.isNotOk(next.called);
      assert.strictEqual(status.withArgs(401).callCount, 1);
      assert.isOk(json.calledWith({error: 'Unauthorized'}));
    });
  });

  describe('serveDetails', () => {
    it('should server details', () => {
      const json = sinon.spy();
      const getDetails = sinon.stub();
      const req = {app: {locals: {db: {getDetails}}}, session: {id: 1}};
      const res = {json};
      const data = {rupes: 100, foodmoji: 'frenchfries-url', people: [1, 2, 3]};
      getDetails.withArgs(1).returns({then: (cb) => cb(data)});

      handlers.serveDetails(req, res);

      assert.isOk(json.calledWith(data));
    });
  });
});
