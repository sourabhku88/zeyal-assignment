const checkBody = (data) => Object.keys(data).length == 0;

const checkName = value => /^[a-zA-Z ]{2,20}$/.test(value);

const checkEmail = value => /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(value);

const checkPhone = value => /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/.test(value)

const checkpassword = value => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/.test(value)

module.exports = { checkBody ,checkName ,checkEmail,checkPhone,checkpassword}