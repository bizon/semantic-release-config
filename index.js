/**
 * @type {import('semantic-release').Options}
 */
const config = {
  plugins: [
    '@semantic-release/commit-analyzer',

    '@semantic-release/release-notes-generator',

    '@semantic-release/github',

    '@semantic-release/npm',

    [
      '@semantic-release/git',
      {
        // eslint-disable-next-line no-template-curly-in-string
        message: 'chore(release): ${nextRelease.gitTag}',
      },
    ],
  ],
}

export default config
