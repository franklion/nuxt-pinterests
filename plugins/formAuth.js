export default {
  isLegalAccount(account) {
    const accountRule = /^[0-9]{8}$/g
    return accountRule.test(account)
  },
  isLegalPassword(password) {
    const passwordRule = /^(?=.*[0-9])(?=.*[a-zA-Z]).{6,12}$/
    return passwordRule.test(password)
  },
  isLegalRePassword(password, rePassword) {
    return password && rePassword && (password === rePassword) 
  },
  isLegalEmail(email) {
    const emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
    // return (email.search(emailRule) !== -1)
    console.log('isLegalEmail ', email, emailRule.test(email))
    return emailRule.test(email)
  },
  isLegalRecaptcha(recaptcha) {
    return (recaptcha.length > 0)
  },
  isLegalTaiwanPhone(number) {
    // return /^\(?\d{2}\)?[\s\-]?\d{4}\-?\d{4}$/.test(number)
    return /^\-?\d?\#?/.test(number)
  },
  isLegalTaiwanMobile(number) {
    return /^09\d{2}-?\d{3}-?\d{3}$/.test(number)
  },
  isLegalCompetitionItemStartDate(date) {
    const minDate = '2016/01/01'
    const maxDate = '2017/08/31'

    if (new Date(date) < new Date(minDate) || new Date(date) > new Date(maxDate)) {
      return false
    }
    return true
  },
}
