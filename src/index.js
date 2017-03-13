import BASE64 from './base64.js';
import CryptoJS from './hmac-sha256.js';
class Keyvalide {
    constructor(payload) {
        this.key = 'EnuDefI42DQ';
        this.payload = payload;
    }
    token() {
        var header = '{"typ":"JWT","alg":"HS256"}';
        var headerBase64 = BASE64.encoder(header); //header base64字符串
        // var payload = '{"PageUrl":"https://m.ireadercity.com/webapp/home/index.html#/","JudgeUrl":"dddddddgsdfgs","Timestamp":1489219612246}';
        var payloadBase64 = BASE64.encoder(this.payload); //payload base64字符串
        var base64Token = headerBase64 + "." + payloadBase64;
        // console.log(base64Token)
        var signature = CryptoJS.HmacSHA256(base64Token, this.key); //使用google的hmac-sha256.js库
        var signatureBase64 = BASE64.hexToBase64(signature.toString());
        var jwt = base64Token + "." + signatureBase64;
        // console.log(jwt)
        return jwt;
    }
}
export default Keyvalide