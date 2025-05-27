let form = document.forms[0];
form.onsubmit = function (ev) {
    ev.preventDefault();
    // console.log(userId.match(/\d/g));
    let userId = this.userId.value;
    let title = this.title.value;
    let body = this.body.value;
    if (!!userId.match(/[0-9]/g) && !!body.match(/(\w+\s){3,}/g)){
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: +userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }else{
        console.log('Не правильно введены данные');
    }
    // console.log(body.match(/\w+/g));
    // console.log(userId, title, body);
}
