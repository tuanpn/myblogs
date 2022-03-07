<template>
    <div class="popover is-popover-bottom">
        <button class="button is-primary popover-trigger">Table Popover</button>
        <div class="popover-content">
            <table class="table">
                <thead>
                <tr><th>Fruit</th><th>Color</th></tr>
                </thead>
                <tbody>
                <tr><td>Apple</td><td>Red</td></tr>
                <tr><td>Banana</td><td>Yellow</td></tr>
                <tr><td>Cucumber</td><td>Green</td></tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "SearchPopup"
}
</script>

<style scoped>

</style>
