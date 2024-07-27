// html要素
let result = document.documentElement;
// head要素
result = document.head;
// body要素
result = document.body;

// 子ノードの取得
result = document.childNodes;
result = document.body.childNodes;

// 子ノードを持っているか？
result = document.body.childNodes[0].hasChildNodes();

// 最初の子ノード
result = document.body.firstChild;
// 最後の子ノード
result = document.body.lastChild;
// 親ノード
result = document.body.parentNode;

// 隣のノード
result = document.body.nextSibling;
result = document.head.nextSibling.nextSibling;
result = document.body.previousSibling.previousSibling;

// 要素一覧取得
result = document.body.children;
// 始めの要素を取得
result = document.body.firstElementChild;
// 最後の要素を取得
result = document.body.lastElementChild;
// 親要素を取得
result = document.body.parentElement;
// 隣の要素を取得
result = document.head.nextElementSibling;
result = document.body.previousElementSibling;

// 要素一覧取得 HTMLコレクションインタフェース
colections = document.body.children;

// ノード一覧取得 nodeリストインターフェース
nodes = document.body.childNodes;

// console.dir(result);
console.dir(colections);
console.dir(nodes);
