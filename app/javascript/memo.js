function memo() {
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    const formData = new FormData(document.getElementById("form"));
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
        //200以外のHTTPステータスが返却された場合の処理
      }
      const item = XHR.response.post;
      //レスポンスとして返却されたメモのレコードデータを取得
      const list = document.getElementById("list");
      //HTMLを描画する場所を指定する際に使用する「描画する親要素」のlistの要素を取得
      const formText = document.getElementById("content");
      //メモの入力フォームを取得
      const HTML = `
        <div class="post" data-id=${item.id}>
          <div class="post-date">
            投稿日時：${item.created_at}
          </div>
          <div class="post-content">
          ${item.content}
          </div>
        </div>`;
        //メモとして描画する部分のHTMLを定義
      list.insertAdjacentHTML("afterend", HTML);
      //listという要素に対して、insertAdjacentHTMLでHTMLを追加
      formText.value = "";
      //メモの入力フォームに入力されたままの文字はリセット
      //非同期通信では画面遷移しないため、送信後に入力フォームの文字列を削除の意味を持つ
      //正確には、空の文字列に上書きされるような仕組み
    };
    e.preventDefault();
    //プログラム本来の処理を止める
  });
}
window.addEventListener("load", memo);
