class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        let elem = document.createElement('div');
        document.body.appendChild(elem);
        elem.style.cssText = `height:${this.height}px; width:${this.width}px; 
        background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
        
    }
    
}

const item = new Options(300, 350, 'red', 14, 'right');
const staff = new Options(150, 270, 'green', 19, 'left');

item.createDiv();
staff.createDiv();

