//DES加密
function encryptDes(message, key) {
  var keyHex = CryptoJS.enc.Utf8.parse(key)
  /* 这里的模式参数需要和后端匹配 mode.ECB，mode.CBC*/
  var encrypted = CryptoJS.DES.encrypt(message, keyHex, { 
    mode: CryptoJS.mode.ECB, 
    padding: CryptoJS.pad.Pkcs7 
  });
  return encrypted.ciphertext.toString();
}
//DES解密
function decryptDes(message, key) {
  var keyHex = CryptoJS.enc.Utf8.parse(key)
  var decrypted = CryptoJS.DES.decrypt(
      {
          ciphertext: CryptoJS.enc.Hex.parse(message)
      },
      keyHex,
      {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
      }
  )
  return decrypted.toString(CryptoJS.enc.Utf8)
}