cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/jp.co.asial.helloworld/www/hello_world.js",
        "id": "jp.co.asial.helloworld.helloworld",
        "clobbers": [
            "HelloWorld"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "jp.co.asial.helloworld": "0.0.1"
}
// BOTTOM OF METADATA
});