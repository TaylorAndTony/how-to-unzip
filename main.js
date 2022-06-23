function showHidden() {
    document.getElementById('hide-box').style.display = 'block';
}

function hideHidden() {
    document.getElementById('hide-box').style.display = 'none';
}

class RandomSaying {
    constructor() {
        this.sayings = [
            "If not love, do not harm.",
            "The way you've written your algorithm is changing the way we lead out country.",
            "It's not magic, it's the power of abstraction!",
            "你不抬头看星星，如何导航?",
            "百年前物理学大厦上的两朵乌云，成了咱们驶向星辰大海的船桨",
            "我用新奇的目光盯着地上的积雪，不，那是质子在地球的磁场中进动<br>——核磁共振成像诺奖得主保罗·劳特伯",
            "它在等待，等待量子力学，凝聚态物理，磁场工程，等待某个微小的进步，扰动整个未来。",
            "纸上得来终觉浅，自己实验最保险<br>——毕导THU"
        ];
        this.length = this.sayings.length;
        this.nowAt = 0;
        this.clickCount = 0;
        this.rand();
    };
    /**
     * Mount this to DOM, when click, random give a saying
     * @param {string} selector Where to mount
     */
    mount(selector) {
        console.log(this.nowAt);
        let obj = document.querySelector(selector);
        obj.addEventListener('click', () => {
            this.handleClickWitch(obj);
        });
        return this;
    };
    /**
     * Handle click event
     * @param {object} obj Which obj is clicked.
     */
    handleClickWitch(obj) {
        // log click count
        this.clickCount++;
        if (this.clickCount > 10) {
            // Popup the hidden box
            showHidden();
            this.clickCount = 0;
            return;
        }
        // one roll is done
        if (this.nowAt >= this.length) {
            this.nowAt = 0;
            this.rand();
        }
        // update saying
        obj.innerHTML = this.sayings[this.nowAt];
        this.nowAt++;
    };
    /**
     * Shuffile the sayings
     */
    rand() {
        this.sayings.sort(function () {
            return Math.random() - 0.5
        });
        return this;
    };
}

function changeImage(imagePath) {
    let img = document.querySelector('#auto-image-img');
    let wrapper = document.querySelector('#auto-image');
    wrapper.className = 'aimg-hide';
    setTimeout(() =>{
        img.src = imagePath;
        wrapper.className = 'aimg-show';
    }, 1000)
}

function continualUpdateImage() {
    let now = 'h>v'
    setInterval(() =>{
        let height = document.documentElement.clientHeight;
        let width = document.documentElement.clientWidth;
        if (height > width && now !== 'h>v') {
            now = 'h>v'
            changeImage('/image/banner-v.jpg');
        } else if (height < width && now !== 'h<v') {
            now = 'h<v';
            changeImage('/image/banner-h.jpg');
        }
    }, 2000)
}

window.onload = function () {
    new RandomSaying().mount('#witch');
    continualUpdateImage();
}