<template>
    <div class="controller-btns">
        <button @click="onEditContact()">
            <img src="../assets/icons/pencil.png" alt="">
        </button>
        <button @click="onDeleteContact()">
            <img src="../assets/icons/delete.png" alt="">
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        onEditContact() {
            this.$emit('editContact');
        },
        onDeleteContact() {
            this.$emit('deleteContact');
        }
    }

}
</script>

<style lang="scss">
.controller-btns {
    display: flex;
    justify-content: flex-end;
    img {
            width: 16px;
            height: 16px;
        }
}
</style>