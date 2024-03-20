const convert = (img) => {
    // console.log({img});

    Tesseract.recognize(
            img,
            'jpn',
            { logger:m => console.log(m) }
        ).then(({ data: { text } })=> {
            console.log({text});
        $(".textedImg").html(text);
        })
}