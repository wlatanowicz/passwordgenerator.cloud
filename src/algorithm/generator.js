export const generateRandomPassword = (alphabet, length) => {
  let output = "";
  for (let i = 0; i < length; i++) {
    const randomIdx = Math.floor(Math.random() * alphabet.length);
    const randomChar = alphabet[randomIdx];
    output += randomChar;
  }
  return output;
};
