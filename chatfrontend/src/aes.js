var aes256 = require("aes256");
//the secret key used for encrypting and decrypting messages
var secret_key = "e049c34f1d5c7d4cf662185a3d51c25954f32a0e";
//returns the encrypted text
export const to_Encrypt = (text) => {
  var encrypted = aes256.encrypt(secret_key, text);
  return encrypted;
};
//welcome message is not decrypted
export const to_Decrypt = (cipher, username) => {
  if (cipher.startsWith("Welcome")) {
    return cipher;
  }

  if (cipher.startsWith(username)) {
    return cipher;
  }
  //decryped message is returned
  var decrypted = aes256.decrypt(secret_key, cipher);
  return decrypted;
};