const clickOutside = {
    beforeMount: (el, binding, vnode) => {
        el.clickOutsideEvent = event => {
            // here I check that click was outside the el and his children
            if (!(el === event.target || el.contains(event.target))) {
                // and if it did, call method provided in attribute value
                binding.value(event);
            }
        };
        document.addEventListener("touchstart", el.clickOutsideEvent)
        document.addEventListener("click", el.clickOutsideEvent)
    },
    unmounted: el => {
        document.removeEventListener("touchstart", el.clickOutsideEvent)
        document.removeEventListener("click", el.clickOutsideEvent)
    },
}

export { clickOutside }
