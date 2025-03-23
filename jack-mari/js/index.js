let chavePix = null;

let giftList = [
    {price: 50, description: "Talheres", imageUrl: "images/50-talheres.png", pixQrCodeImage: "qrcode/50.png", pixCopyPaste: "00020126490014BR.GOV.BCB.PIX0127jack.mello.cursos@gmail.com520400005303986540550.005802BR5918Jackeline Nogueira6014Rio de Janeiro62070503***6304B36A"},
    {price: 100, description: "Liquidificador", imageUrl: "images/100-liquidificador.png", pixQrCodeImage: "qrcode/100.png", pixCopyPaste: "00020126490014BR.GOV.BCB.PIX0127jack.mello.cursos@gmail.com5204000053039865406100.005802BR5918Jackeline Nogueira6014Rio de Janeiro62070503***6304C574"},
    {price: 150, description: "Aparelho de fondue", imageUrl: "images/150-foundue.png", pixQrCodeImage: "qrcode/150.png", pixCopyPaste: "00020126490014BR.GOV.BCB.PIX0127jack.mello.cursos@gmail.com5204000053039865406150.005802BR5918Jackeline Nogueira6014Rio de Janeiro62070503***6304ABB6"},
    {price: 200, description: "Jogo de banho", imageUrl: "images/200-toalhas-banho.png", pixQrCodeImage: "qrcode/200.png", pixCopyPaste: "00020126490014BR.GOV.BCB.PIX0127jack.mello.cursos@gmail.com5204000053039865406200.005802BR5918Jackeline Nogueira6014Rio de Janeiro62070503***6304FFAC"},
    {price: 250, description: "Jogo de lençol", imageUrl: "images/250-lençol.png", pixQrCodeImage: "qrcode/250.png", pixCopyPaste: "00020126490014BR.GOV.BCB.PIX0127jack.mello.cursos@gmail.com52040000530398654032505802BR5918Jackeline Nogueira6014Rio de Janeiro62070503***63045726"},
    {price: 300, description: "Multiprocessador", imageUrl: "images/300-multiprocessador.png", pixQrCodeImage: "qrcode/300.png", pixCopyPaste: "00020126490014BR.GOV.BCB.PIX0127jack.mello.cursos@gmail.com5204000053039865406300.005802BR5918Jackeline Nogueira6014Rio de Janeiro62070503***6304E9E4"},
    {price: 350, description: "Cafeteira", imageUrl: "images/350-cafeteira.png", pixQrCodeImage: "qrcode/350.png", pixCopyPaste: "00020126490014BR.GOV.BCB.PIX0127jack.mello.cursos@gmail.com5204000053039865406350.005802BR5918Jackeline Nogueira6014Rio de Janeiro62070503***63048726"},
    {price: 400, description: "Panela de pressão elétrica", imageUrl: "images/400-panela-pressão.png", pixQrCodeImage: "qrcode/400.png", pixCopyPaste: "00020126490014BR.GOV.BCB.PIX0127jack.mello.cursos@gmail.com5204000053039865406400.005802BR5918Jackeline Nogueira6014Rio de Janeiro62070503***63048A1C"},
    {price: 450, description: "Aparelho de jantar", imageUrl: "images/450-aparelho-jantar.png", pixQrCodeImage: "qrcode/450.png", pixCopyPaste: "00020126490014BR.GOV.BCB.PIX0127jack.mello.cursos@gmail.com5204000053039865406450.005802BR5918Jackeline Nogueira6014Rio de Janeiro62070503***6304E4DE"},
    {price: 500, description: "Faqueiro", imageUrl: "images/500-faqueiro.png", pixQrCodeImage: "qrcode/500.png", pixCopyPaste: "00020126490014BR.GOV.BCB.PIX0127jack.mello.cursos@gmail.com52040000530398654035005802BR5918Jackeline Nogueira6014Rio de Janeiro62070503***630430D6"},
    {price: 600, description: "Purificador de água", imageUrl: "images/600-purificador-água.png", pixQrCodeImage: "qrcode/600.png", pixCopyPaste: "00020126490014BR.GOV.BCB.PIX0127jack.mello.cursos@gmail.com52040000530398654036005802BR5918Jackeline Nogueira6014Rio de Janeiro62070503***63044201"},
    {price: 700, description: "Conjunto de panelas", imageUrl: "images/700-conjunto-panelas.png", pixQrCodeImage: "qrcode/700.png", pixCopyPaste: "00020126490014BR.GOV.BCB.PIX0127jack.mello.cursos@gmail.com52040000530398654037005802BR5918Jackeline Nogueira6014Rio de Janeiro62070503***63049C53"},
    {price: 800, description: "Microondas", imageUrl: "images/800-microondas.png", pixQrCodeImage: "qrcode/800.png", pixCopyPaste: "00020126490014BR.GOV.BCB.PIX0127jack.mello.cursos@gmail.com52040000530398654038005802BR5918Jackeline Nogueira6014Rio de Janeiro62070503***630435F9"},
    {price: 900, description: "Mesa de jantar", imageUrl: "images/900-mesa-jantar.png", pixQrCodeImage: "qrcode/900.png", pixCopyPaste: "00020126490014BR.GOV.BCB.PIX0127jack.mello.cursos@gmail.com5204000053039865406900.005802BR5918Jackeline Nogueira6014Rio de Janeiro62070503***63047734"},
    {price: 1000, description: "TV 40''", imageUrl: "images/1000-tv.png", pixQrCodeImage: "qrcode/1000.png", pixCopyPaste: "00020126490014BR.GOV.BCB.PIX0127jack.mello.cursos@gmail.com520400005303986540410005802BR5918Jackeline Nogueira6014Rio de Janeiro62070503***63048565"},
    {price: 1500, description: "Frigobar", imageUrl: "images/1500-frigobar.png", pixQrCodeImage: "qrcode/1500.png", pixCopyPaste: "00020126490014BR.GOV.BCB.PIX0127jack.mello.cursos@gmail.com520400005303986540415005802BR5918Jackeline Nogueira6014Rio de Janeiro62070503***6304121C"},
    {price: 2300, description: "Fogão", imageUrl: "images/2300-fogão.png", pixQrCodeImage: "qrcode/2300.png", pixCopyPaste: "00020126490014BR.GOV.BCB.PIX0127jack.mello.cursos@gmail.com52040000530398654072300.005802BR5918Jackeline Nogueira6014Rio de Janeiro62070503***6304C6C4"},
    {price: 2800, description: "Máquina de lavar", imageUrl: "images/2800-maquina-lavar.png", pixQrCodeImage: "qrcode/2800.png", pixCopyPaste: "00020126490014BR.GOV.BCB.PIX0127jack.mello.cursos@gmail.com520400005303986540428005802BR5918Jackeline Nogueira6014Rio de Janeiro62070503***63049EE6"},
    {price: 3500, description: "Geladeira", imageUrl: "images/3500-geladeira.png", pixQrCodeImage: "qrcode/3500.png", pixCopyPaste: "00020126490014BR.GOV.BCB.PIX0127jack.mello.cursos@gmail.com52040000530398654073500.005802BR5918Jackeline Nogueira6014Rio de Janeiro62070503***63048983"},
    {price: 10000, description: "Noite de nupcias", imageUrl: "images/10000-noite-nupcias.png", pixQrCodeImage: "qrcode/10000.png", pixCopyPaste: "00020126490014BR.GOV.BCB.PIX0127jack.mello.cursos@gmail.com5204000053039865405100005802BR5918Jackeline Nogueira6014Rio de Janeiro62070503***6304D242"},
];

function showPix({giftName, value, qrCodeImageUrl, textCopyPaste }) {
    document.querySelector('#gift-title').textContent = giftName;
    document.querySelector('#gift-value').textContent = `R$ ${parseFloat(value).toFixed(2).replace('.', ',')}`;
    document.querySelector('#pix-modal').style.display = 'flex';
    document.querySelector('#qrcode-pix').src = qrCodeImageUrl;
    document.querySelector('#span-copy-pix').innerText = textCopyPaste;
    //document.querySelector('.btn-pay-pix').href = 'pix:' + textCopyPaste;
    document.querySelector('.btn-pay-pix').href = 'payto://pix/jack.mello.cursos@gmail.com?amount=BRL:' + value;
};

function closePix() {
    chavePix = null;
    document.querySelector('#pix-modal').style.display = 'none';
    document.querySelector('.btn-pay-pix').href = '';
};

function copyPix() {
    if (copyToClipboard(chavePix)) {
        alert('Chave copiada.');
    }
}

function ctaButtonElement_onclick() {
    chavePix = this.dataset.pixCopyPaste;

    showPix({
        giftName: this.dataset.description,
        value: Number(this.dataset.price),
        qrCodeImageUrl: this.dataset.pixQrCodeImage,
        textCopyPaste: this.dataset.pixCopyPaste
    });
};

function buildCards() {
    const constainerListElement = document.querySelector('.gift-list');
    var giftCardElement, imageElement, descriptionElement, priceElement, ctaButtonElement;

    for(var i = 0; i < giftList.length; i++) {
        giftCardElement = document.createElement('div');
        imageElement = document.createElement('img');
        descriptionElement = document.createElement('h3');
        priceElement = document.createElement('p');
        ctaButtonElement = document.createElement('button');

        imageElement.src = giftList[i].imageUrl;
        imageElement.alt = giftList[i].description;
        
        descriptionElement.innerText = giftList[i].description;

        priceElement.innerText = giftList[i].price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        priceElement.classList.add('price');

        ctaButtonElement.classList.add('btn');
        ctaButtonElement.dataset.description = giftList[i].description;
        ctaButtonElement.dataset.price = giftList[i].price;
        ctaButtonElement.dataset.pixCopyPaste = giftList[i].pixCopyPaste;
        ctaButtonElement.dataset.pixQrCodeImage = giftList[i].pixQrCodeImage;

        ctaButtonElement.innerText = 'Presentear';
        ctaButtonElement.onclick = ctaButtonElement_onclick;

        giftCardElement.classList.add('gift-card');
        giftCardElement.append(imageElement);
        giftCardElement.append(descriptionElement);
        giftCardElement.append(priceElement);
        giftCardElement.append(ctaButtonElement);

        constainerListElement.append(giftCardElement);
    }
};

function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        return window.clipboardData.setData("Text", text);
    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed"; 
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");
        }
        catch (ex) {
            return prompt("Copy to clipboard: Ctrl+C, Enter", text);
        }
        finally {
            document.body.removeChild(textarea);
        }
    }
}

function init(){
    document.getElementById('pix-modal').addEventListener('click', function(e) {
            if (e.target === this) {
                closePix();
            }
        });

    buildCards();
};

document.addEventListener("DOMContentLoaded", function(event) {
    init();
});
