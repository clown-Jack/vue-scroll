//防抖
function debounce(fn: any, wait: number): any {
    let timeout: any = null;
    return function () {
        if (timeout != null) clearTimeout(timeout);
        timeout = setTimeout(fn, wait);
    };
}

//获取可视区域高度
function getView(container: HTMLElement): any {
    return {
        width: Math.max(container.clientWidth, window.innerWidth || 0),
        height: Math.max(container.clientHeight, window.innerHeight || 0),
    };
}

//获取元素底部距离可视区域顶部高度和可视区域高度的差值
function getHeight(container: HTMLElement, el: any): number {
    return getView(container).height - el.getBoundingClientRect().bottom;
}


export function listenerScroll(container: HTMLElement, el: any, load?: any, fn?: any): void {
    function scroll() {
        if (getHeight(container, el) > -200) {
            load && load();
        }
        let dist: number = el.getBoundingClientRect().top;
        let num: any = null
        if (dist < 0) {
            num = Math.floor(Math.abs(dist) / 60);
        } else {
            num = -1;
        }
        fn && fn(num)
    }
    document.addEventListener(
        "scroll",
        debounce(scroll, 100),
        false
    );
}