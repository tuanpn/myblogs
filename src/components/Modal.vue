<script>
    export default {
        props: {
            show: Boolean
        }
    }
</script>

<template>
    <Transition name="modal">
        <div v-if="show" class="modal-mask">
            <div class="modal-wrapper"
            >
                <div class="modal-container">
                    <div class="modal-header">
                        <button class="button icon-close is-danger">
                            <span class="icon is-small">
                              <i class="fa fa-times" @click="$emit('close')"></i>
                            </span>
                        </button>
                        <slot name="header"></slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body"></slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
.icon-close {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 16px;
}
</style>
