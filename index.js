function uniqueKeyGen(prefix = '', length = 8) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    if (length <= 0) {
        throw new Error('Length must be a positive number.');
    }
    let uniqueId = '';
    for (let i = 0; i < length; i++) {
        uniqueId += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return prefix ? `${prefix}-${uniqueId}` : uniqueId;
}

module.exports = { uniqueKeyGen };
