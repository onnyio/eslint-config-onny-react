module.exports = {
  extends: [
    'onny'
  ],
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
      modules: true,
      decorators: true
    },
    sourceType: 'module'
  },
  plugins: [
    'import',
    'react',
    'chai-expect',
    'chai-friendly'
  ],
  rules: {
    ///////////////////
    // React
    ///////////////////////

    /*
     * When using JSX, <a /> expands to React.createElement("a").
     * Therefore the React variable must be in scope.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
     *
     * no longer needed in React 17 if combined with @babel/preset-react runtime = 'automatic'
     */
    'react/react-in-jsx-scope': 0,

    /**
     * @see [https://reactjs.org/docs/react-component.html#componentdidupdate]{@link https://reactjs.org/docs/react-component.html#componentdidupdate}
     * @see [https://github.com/airbnb/javascript/issues/1875]{@link https://github.com/airbnb/javascript/issues/1875}
     *
     * The React docs say calling setState() in componentDidUpdate() is permitted, albeit with caveats.
     *
     * You may call setState() immediately in componentDidUpdate() but note that it must be
     * wrapped in a condition like in the example above, or you’ll cause an infinite loop.
     * It would also cause an extra re-rendering which, while not visible to the user,
     * can affect the component performance.
     */
    'react/no-did-update-set-state': 0,


    // Disallow JSX props spreading
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
    'react/jsx-props-no-spreading': ['error', {
      html: 'enforce',
      custom: 'ignore',
      exceptions: []
    }],

    // Enforces where React component static properties should be positioned
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
    'react/static-property-placement': ['error', 'static public field'],
    'react/destructuring-assignment': 0,
    'react/require-default-props': [2, { forbidDefaultForRequired: false }],
    'react/jsx-one-expression-per-line': 0,
    /*
     * Enforce that a label tag has a text label and an associated control.
     *
     * There are two supported ways to associate a label with a control:
     *    * Wrapping a control in a label tag.
     *    * Adding htmlFor to a label and assigning it a DOM ID string that indicates
     *      an input on the page.
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
     */
    'jsx-a11y/label-has-associated-control': [2, {
      labelComponents: ['Label'],
      labelAttributes: ['id'],
      depth: 3
    }],
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['to'],
      aspects: ['noHref', 'preferButton']
    }],
    'react/default-props-match-prop-types': [2, { allowRequiredDefaults: true }]
  }
};
