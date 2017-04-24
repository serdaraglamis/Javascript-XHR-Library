var Xhr = (function () {
    function Xhr() {
    }

    Xhr.prototype.getJSON = function (url, successHandler, errorHandler) {
        var xhr = typeof XMLHttpRequest != 'undefined'
            ? new XMLHttpRequest()
            : new ActiveXObject('Microsoft.XMLHTTP');
        xhr.open('get', url, true);
        xhr.onreadystatechange = function () {
            var status;
            var data;
            // https://xhr.spec.whatwg.org/#dom-xmlhttprequest-readystate
            if (xhr.readyState == 4) {
                status = xhr.status;
                if (status == 200) {
                    data = JSON.parse(xhr.responseText);
                    successHandler && successHandler(data);
                }
                else {
                    errorHandler && errorHandler(status);
                }
            }
        };
        xhr.send();
    };

    Xhr.prototype.sendJson = function (url, data, successHandler, errorHandler) {
        var xhr = typeof XMLHttpRequest != 'undefined'
            ? new XMLHttpRequest()
            : new ActiveXObject('Microsoft.XMLHTTP');
        xhr.open('post', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function () {
            var status;
            if (xhr.readyState == 4) {
                status = xhr.status;
                if (status == 200) {
                    successHandler && successHandler(JSON.parse(xhr.responseText));
                }
                else {
                    errorHandler && errorHandler(status);
                }
            }
        };
        xhr.send(JSON.stringify(data));
    };
    return Xhr;
}());