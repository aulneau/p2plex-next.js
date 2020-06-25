const toHex = buff => {
  if (typeof buff === 'string') {
    return buff;
  }

  if (buff && buff.buffer) {
    const str = Buffer.from(buff.buffer).toString('hex');
    return Buffer.from(buff.buffer).toString('hex');
  }

  throw new Error('Cannot convert the buffer to hex: ', buff);
};

const toBuffer = str => {
  console.log('toBuffer', str);
  if (Buffer.isBuffer(str)) {
    return str;
  }

  if (typeof str === 'string') {
    const buff = Buffer.from(str, 'hex');
    console.log('toBuffer str', str);
    console.log('toBuffer buff', Buffer.from(str, 'hex'));
    return buff;
  }

  throw new Error('Cannot convert the string to buffer: ', str);
};

class SwarmError extends Error {
  constructor(message, code, stack) {
    super(message);

    this.code = code || message;

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = stack || new Error(this.message).stack;
    }
  }
}

const callbackPromise = () => {
  let callback;

  const promise = new Promise((resolve, reject) => {
    callback = (err, value) => {
      if (err) reject(err);
      else resolve(value);
    };
  });

  callback.promise = promise;
  return callback;
};

const resolveCallback = (promise, cb) => {
  if (!promise.then) {
    promise = Promise.resolve();
  }

  return promise.then(result => cb(null, result)).catch(cb);
};

module.exports = { toHex, toBuffer, SwarmError, callbackPromise, resolveCallback };
