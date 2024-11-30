# idgenix

Generate a unique random ID string with a specified prefix and customizable length. Perfect for generating unique keys or identifiers for users, sessions, products, and more.

## Installation

Using npm:
```bash
npm i idgenix
```
## Usage

```javascript
const { idgenix } = require('idgenix');

// example 1: generate an ID with default options
const id1 = idgenix();
console.log(id1);  // Example output: 'XyZ1234'

// example 2: generate an ID with custom length and no prefix
const id2 = idgenix('', 32);
console.log(id2);  // Example output: 'aBc1234EfGh5678IjKl9012MnOp'

// example 3: generate an ID with a custom prefix and length
const id3 = idgenix('user', 12);
console.log(id3);  // Example output: 'user-XyZ1234ABCD'

```

## API

### `idgenix(prefix = '', length = 8)`

Generates a random ID with an optional prefix and customizable length.

- **prefix** (String): A string to prefix to the generated ID (Optional).
- **length** (Number): The length of the generated ID. Defaults to 8 characters.

#### Example:
```javascript
const id = idgenix('order', 10);
console.log(id);  // Example output: 'order-AB1234ABCD'
```


Feel free to submit issues, forks, or pull requests. 
If you find any bugs or want to suggest improvements, please open an issue on [GitHub Issues](https://github.com/ritik-wo/idgenix/issues). 
Created and maintained by [Ritik Singh](https://github.com/ritik-wo).