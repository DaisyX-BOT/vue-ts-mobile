var $ = {
    ajax(obj) {
        var type = obj["type"];
        var url = obj["url"];
        var para = obj["para"];
        var dataType = obj["dataType"];
        var success = obj["success"];
        if (para) {
            var str = "?";
            for (let i in para) {
                str += i + "=" + para[i] + "&";
            }
            str = str.substring(0, str.length - 1);
            url = url + str;
        }
        var req = new XMLHttpRequest();
        req.open(type, url, true);
        req.send();
        req.onreadystatechange = function () {
            if (req.readyState == 4 && req.status == 200) {
                var text = req.responseText;
                if (dataType == "json") {
                    success(JSON.parse(text));
                } else {
                    success(text);
                }
            }
        }
    }
}
export default $;