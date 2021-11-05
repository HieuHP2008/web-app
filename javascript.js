function validator (options) {
    formElement = document.querySelector(options.form)
    options.rules.forEach(function(rule) {
        inputElement = formElement.querySelector(rule.selector)
        inputElement.onblur = function() {
            // lấy ra value trong input: inputElement.value
            // Lấy ra test trong các rules: rule.test()
            rule.test(inputElement.value)
        }
    })
}

validator.isUser = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var Regex = /^[a-zA-Z\-]+$/
            return Regex.test(value) ? undefined : alert("Hãy nhập lại trường này")
            
        }
    }
}


validator.isPasswd = function (selector,min) {
    return {
        selector: selector,
        test: function (value) {
            var Regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
            if(Regex.test(value)) {
                return undefined
            }else {
                alert("vui lòng nhập mật khẩu có nhưng kí tự đặc biệt")
            }

            if(value.length >= min) {
                return undefined
            }else {
                alert('vui lòng nhập mật khẩu dài hơn 8 kí tự')
            }

        }
    }
}