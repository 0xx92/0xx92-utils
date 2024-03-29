// validate.js 校验文件
const Validate = {
    mobileCheck: (value) => /^[1][3,4,5,7,8][0-9]{9}$/.test(value),
    IDCardCheck: (value) => /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(value),
    emailCheck: (value) => /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value),
  };
  
  export default Validate;
  