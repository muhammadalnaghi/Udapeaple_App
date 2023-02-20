'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
class LoaderError extends Error {
  constructor(err) {
    super(err);

    this.name = 'HTML Loader';
    this.message = `\n\n${err.message}\n`;

    // TODO(michael-ciniawsky)
    // add 'SyntaxError', 'PluginError', 'PluginWarning'

    Error.captureStackTrace(this, this.constructor);
  }
}

exports.default = LoaderError;