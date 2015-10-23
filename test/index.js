var tape = require("tape"),
    md5 = require("..");


tape("md5(message, options)", function(assert) {
    assert.equal(md5("this is a test"), "54b0c58c7ce9f2a8b551351102ee0938", "should generate unique md5 for text");
    assert.end();
});
