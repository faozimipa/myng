module.exports = {
  name: 'contacts',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/contacts',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
