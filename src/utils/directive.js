const isDisable = {
    install (Vue) {
        Vue.directive('isDisable', {
            inserted (el, binding) {
                if (binding.value) {
                    el.classList.add('disable-vue');
                } else {
                    el.classList.remove('disable-vue');
                }
            },
            update (el, binding) {
                if (binding.value) {
                    el.classList.add('disable-vue');
                } else {
                    el.classList.remove('disable-vue');
                }
            },
        });
    }
};
export default isDisable;