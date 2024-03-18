function dateTime(params) {
    //送信ボタンが押された日時の取得
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    //一桁の場合は0を追加
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    return `${year}/${month}/${date} ${hour}:${min}:${sec}`
}