<script>
    export default {
        props: {
            show: Boolean
        },
        mounted() {
            this.$emit('open')
        }
    }
</script>

<template>
    <Transition name="modal">
        <div v-if="show" class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container"
                     @click.self="$emit('close')"
                >
                    <div class="modal-header">
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

<style lang="scss">
.icon-close {
    position: absolute !important;
    top: 0;
    right: 0;
    font-size: 16px;
    .is-small {
        width: 24px !important;
        height: 24px !important;
    }
}
</style>
