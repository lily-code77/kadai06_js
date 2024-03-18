const inputRef = document.querySelector("input");
const previewRef = document.querySelector(".preview");


// inputRef.addEventListener("change", (e) => {
//     // FileとFileList
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.files);
    
// })



const handleImageFiles = (e) => {
    for (const file of e.target.files) {
        const item = document.createElement("div");
        const image = document.createElement("img");
        // console.log({file});
        // console.log(file.name);//←imgの名前
        // convert(file.name);

        // URLを作成(ローカルのファイルを参照する場合、
        // createObjectURLメソッドにfileオブジェクトを渡すと
        // ローカルのブラウザ内でのURLが生成されて、それをsrcに渡している)
        image.src = URL.createObjectURL(file);

        // 画像を画面に表示させる
        item.appendChild(image);
        previewRef.appendChild(item);

        // convertボタンを押すとテキスト化された文字が表示される
        $("#convert").on("click", function(){
            convert(image.src);
        })
    }
}


inputRef.addEventListener("change", handleImageFiles);

// saveボタンをクリックするとFirebaseに保存され、マイレシピ集に表示される