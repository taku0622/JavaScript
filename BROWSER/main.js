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

// // file:///C:/Users/★★★★★/Desktop/JavaScipt/BROWSER/index.html
// console.log(location.href);
// // file:
// console.log(location.protocol);
// // ドメイン、fileの場合はnull
// console.log(location.hostname);
// // https:443, http:80 左の場合、空文字
// console.log(location.port);
// // protocol://hostname:port
// console.log(location.origin);
// // hostname:port
// console.log(location.host);
// // hrelのhostname以降を返す。
// console.log(location.pathname);
// // urlに#が付いていた場合、それ以降を返す。
// console.log(location.hash);
// // クエリ(?)が付いていた場合、それ以降を返す。
// console.log(location.search);

// // googleへ移動。href省略も可。assignメソッドも同じ
// location.href = 'https://google.com';
// // location = 'https://google.com';
// // location.assign('https://google.com');

// // ページA → B → C(↓のURL)の場合、Bの履歴を削除する。
// // ページA → C になる。
// // すなわち、ブラウザの戻るを押すと、ページAになる。
// location.replace('https://github.com/taku0622');

// // 到達できるページの数
// console.log(history.length);
// // 戻るボタン
// history.back
// // 進むボタン
// history.forward
// // いくつ移動するか、※3つ戻る
// history.go(-3)
// // 戻るボタン
// history.back
// // リロードせず、URLだけを変える(複雑なJSアプリに便利)
// history.pushState(null, null, '/hello');

// let url = new URL('https://developer.mozilla.org/ja/');
// url.search = 'q=javascript';
// url.searchParams.set('page', '2');
// url.searchParams.append('page', '3'); // 同じキーを追加する場合
// console.log(url); // search:"?q=javascript&page=2&page=3"
// let result = url.searchParams.get('page');
// console.log(result); // 2 先に該当した値が返る。
// result = url.searchParams.getAll('page');
// console.log(result); // ['2', '3']　該当した値が全て返る。
// result = url.searchParams.has('page');
// console.log(result); // true 該当した値があるか
// result = url.searchParams.sort();　// serchParamsのキーをソートする
// for (const [key, value] of url.searchParams) {
//   console.log(key, value); // page 2 ...
// }

// (コールバック関数, 時間(ms))
// let timeId = setTimeout(() => {
//   console.log("hello");
// }, 1000); // 1秒後に実行
// console.log(timeId);
// clearTimeout(timeId);

// 時間(ms)ごとに実行
let timeId = setInterval(() => {
  console.log("hello");
}, 1000); // 1秒後に実行)

// intervalの中断
setTimeout(() => {
  clearInterval(timeId);
}, 3000)