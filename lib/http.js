export class Http {

    static fetchData(url) {

        alert(url + '********************88');

        return new Promise((resolve, reject) => {

            // console.log('in http in promise proimse' + url);
            var HTTP = new XMLHttpRequest();
            // console.log('in http in promise proimse after HTTP' + url);
            HTTP.open('GET', url);
            // console.log('in http in promise proimse after HTTP after open' + url);
            HTTP.onreadystatechange = function() {

                alert('i m inside function');
                console.log('in http in promise proimse after HTTP after open in onready' + url);

                if (HTTP.readyState == XMLHttpRequest.DONE && HTTP.status == 200) {

                    const RESPONSE_DATA = JSON.parse(HTTP.responseText);

                    console.log('print response data' + RESPONSE_DATA);
                    resolve(RESPONSE_DATA);
                } else if (HTTP.readyState == XMLHttpRequest.DONE) {

                    console.log('no');
                    reject('Something went wrong');
                }
                // XMLHttpRequest.send();
            };

            // XMLHttpRequest.send();
            HTTP.send();
        });
    }
}