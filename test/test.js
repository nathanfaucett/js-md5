var assert = require("assert"),
    md5 = require("../src/index");


describe("md5(message, options)", function() {
    it("should", function() {
        assert.equal(md5("this is a test"), "54b0c58c7ce9f2a8b551351102ee0938");
    });
});
