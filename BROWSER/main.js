// console.log('hello');

// okボタンのダイアログ
// alert('hello');

// ok/cancelボタンのダイアログ
// let result = confirm('Are you sure ?');
// resultには、boolean値が返る
// console.log(result);

// 入力欄、ok/cancelボタンのダイアログ
// result = prompt('name');
// resultには入力欄の値が返る
// console.log(result);

// // Mozilla/5.0 (Windows NT 10.0; Win64; x64)
// console.log(navigator.userAgent);
// // ja
// console.log(navigator.language);
// // Clipboard {}
// console.log(navigator.clipboard);
// // OSに接続されたカメラ、マイクの情報を取得
// console.log(navigator.mediaDevices.getUserMedia);
// // ブラウザに保存されたログイン情報を取得
// console.log(navigator.credentials);
// // 位置情報取得 GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1708806790143}
// console.log(navigator.geolocation.getCurrentPosition(position => console.log(position)));

// // Screen {availWidth: 1920, availHeight: 1040, width: 1920, height: 1080, colorDepth: 24, …}
// console.log(screen);

// file:///C:/Users/★★★★★/Desktop/JavaScipt/BROWSER/index.html
console.log(location.href);
// file:
console.log(location.protocol);
// ドメイン、fileの場合はnull
console.log(location.hostname);
// https:443, http:80 左の場合、空文字
console.log(location.port);
// protocol://hostname:port
console.log(location.origin);
// hostname:port
console.log(location.host);
// hrelのhostname以降を返す。
console.log(location.pathname);
// urlに#が付いていた場合、それ以降を返す。
console.log(location.hash);
// クエリ(?)が付いていた場合、それ以降を返す。
console.log(location.search);

