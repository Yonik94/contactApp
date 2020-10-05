<template>
    <Contact-list :contacts="contacts"
    @deleteContact="onDeleteContact($event)" />
</template>

<script>
import ContactList from '../components/Contact-List';
export default {
    methods: {
        onDeleteContact(ev) {
            this.$store.dispatch('deleteContact', ev);
        }
    },

    computed: {
        contacts() {
            // console.log(this.$store.getters.contacts);
            return this.$store.getters.contacts;
        }
    },

    created() {
        this.$store.dispatch('loadContacts');
    },
    components: {
        ContactList
    }
}
</script>

<style>

</style>