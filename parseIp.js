document.addEventListener('DOMContentLoaded', function () {
    let mybr = document.createElement('br');

    function parseIP(ip) {

        let ip_array = ["192.168.123.34", "192.168.13.45", "192.168.13.15", "192.168.76.18", "192.168.132.48",];
        let minIp = Math.min(+ip_array);
        let maxIp = Math.max(+ip_array);
        if (ip_array.includes(ip) && (minIp <= ip) && (ip <= maxIp)) {

            document.getElementsByClassName('parse-ip-result')[0].innerHTML = "айпи адрес" + ip + "входит в диапазон: " + minIp + '-' + maxIp;
        } else {
            document.getElementsByClassName('parse-ip-result')[0].innerHTML = "айпи адрес" + ip + " не входит в диапазон: " + minIp + '-' + maxIp;
        }
    }
    parseIP('192.168.123.34');
    document.getElementsByClassName('parse-ip-result')[0].appendChild(mybr);

//next option
    function rangeIP(ip) {
        let low_ip = Math.floor(Math.random() * (0 - 255)) +
            "." + Math.floor(Math.random() * (0 - 255)) +
            "." + Math.floor(Math.random() * (0 - 255)) +
            "." + Math.floor(Math.random() * (0 - 255));
        let high_ip = '121.0.0.0';
        if (ip <= high_ip && low_ip <= ip) {
            document.getElementsByClassName('parse-ip-result')[0].innerHTML = " in range";

        } else {
            document.getElementsByClassName('parse-ip-result')[0].innerHTML = "not in range";
        }
        return true;
    }
    rangeIP('30.142.197.71');
});