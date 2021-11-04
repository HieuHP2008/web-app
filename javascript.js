function validator (options) {
    formElement = document.querySelector(options.form)
    if(formElement) {
       options.rules.forEach(function (rule) {
           var inputElement = formElement.querySelector(rule.selector)
           inputElement.onblur = function () {
               rule.test(inputElement.value)
           }
        }) 
    }
}


        // ĐỊNH NGHĨA CHO RULES //
// Email
validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(value) ? undefined : alert("vui lòng nhập đúng email")
            
        }
    }
}

// Passwd
validator.isPasswd = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(value) ? undefined : alert("vui lòng nhập đúng mật khẩu")
            
        }
    }
}


