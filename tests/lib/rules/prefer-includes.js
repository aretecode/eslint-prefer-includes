var rule = require('../../../lib/rules/prefer-includes')
var RuleTester = require('eslint').RuleTester

var eslintTester = new RuleTester()
eslintTester.run('prefer-includes', rule, {
  valid: [
    'var eh = ""; eh.includes("")',
  ],
  invalid: [
    {
      code: 'var eh = ""; eh.contains("")',
      errors: [{message: 'Expected .includes() instead of .contains().'}],
      parser: 'babel-eslint',
    },


    // {code: 'eh.indexOf("")'},
    // {
    //   code: 'if (eh.indexOf("") >= -1) {}}',
    //   errors: [{message: 'no indexOf in conditional'}],
    //   errors: [{message: 'Expected .includes() instead of .indexOf().'}],
    //   parser: 'babel-eslint',
    // },
  ],
})
