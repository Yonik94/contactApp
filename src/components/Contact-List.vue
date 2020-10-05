<template>
    <ul class="contact-list">
        <li v-for="contact in contacts" :key="contact.id">
            <Contact-Preview
                :contact="contact"
                @deleteContact="onDeleteContact($event)"
            />
        </li>
        <button calss="add-btn" @click="onAddClick()">
            <img src="../assets/icons/add.png" alt="" />
        </button>
    </ul>
</template>

<script>
import ContactPreview from "./Contact-Preview.vue";
export default {
    props: ["contacts"],
    methods: {
        onAddClick() {
            this.$router.push("/edit");
        },
        onDeleteContact(ev) {
            this.$emit("deleteContact", ev);
        },
    },
    components: {
        ContactPreview,
    },
};
</script>

<style lang="scss">
.contact-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: rgb(243, 243, 244);
    > * {
        flex-basis: 100%;
        @media (min-width: 900px) {
            flex-basis: 50%;
        }
        @media (min-width: 1200px) {
            flex-basis: 33%;
        }

        .add-btn {
            min-height: 100px;
            flex-grow: 1;
        }
    }
}
</style>