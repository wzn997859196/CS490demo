document.getElementById("btn-html2canvas").onclick = function(){

    html2canvas(document.getElementById("content"), {

        onrendered: function(canvas) {

            var imgData = canvas.toDataURL('image/png');

            var doc = new jsPDF("p", "mm", "a4");
              
            doc.addImage(imgData, 'JPEG', 0, 0,210,297);

            doc.save('content.pdf');
        }
    });

}
