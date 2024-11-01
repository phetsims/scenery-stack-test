// Copyright 2024, University of Colorado Boulder

/**
 * ESLint configuration for scenery-stack-test.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Michael Kauzmann (PhET Interactive Simulations)
 */

import simEslintConfig from '../perennial-alias/js/eslint/sim.eslint.config.mjs';

export default [
  ...simEslintConfig,
  {
    'ignores': [
      '**/**'
    ]
  }
];