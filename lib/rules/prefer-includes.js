module.exports = {
  meta: {
    // fixable: 'code',
    docs: {
      description: 'use .includes instead of .contains and .indexOf',
      category: 'Best Practices',
      recommended: false,
    },
    schema: [
      {
        enum: ['always', 'never'],
      },
    ],
  },

  create: function(context) {
    var sourceCode = context.getSourceCode()
    var configuration = context.options[0]
    var isLog = (process.argv.includes('log') || process.argv.includes('logs'))
    var isTest = (process.argv.includes('test') || process.argv.includes('tests'))

    return {
      'MemberExpression': function(node) {
        if (node.property.name === 'indexOf') {
          context.report(node, 'Expected .includes() instead of .indexOf().')
        }
        if (node.property.name === 'contains') {
          context.report(node, 'Expected .includes() instead of .contains().')
        }
      },
    }
  },
}
