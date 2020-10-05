<template>
    <div class="contact-preview">
        <div class="img-container">
            <img :src="`@/assets/${contact.img}`" :alt="contact.name" />
            <h5>{{ contact.job }}</h5>
        </div>
        <div class="personal-details">
            <h3>{{ contact.name }}</h3>
            <span>{{ contact.location }}</span>
            <h4>{{ contact.company }}</h4>
            <span>{{ contact.address }}</span>
            <span>P: {{ contact.phone }}</span>
        </div>
        <div class="controller-btns-container">
            <Controller-Btns
                @editContact="onEditContact()"
                @deleteContact="onDeleteContact()"
            />
        </div>
    </div>
</template>

<script>
import ControllerBtns from "./controller-Btns";
export default {
    props: ["contact"],
    methods: {
        onEditContact() {
            this.$router.push(`/edit/${this.contact.id}`);
        },
        onDeleteContact() {
            this.$emit("deleteContact", this.contact.id);
        },
    },
    components: {
        ControllerBtns,
    },
};
</script>

<style lang="scss">
.contact-preview {
    display: flex;
    background-color: white;
    margin: 8px;
    padding: 20px;
    border: 1px solid rgb(233, 233, 234);
    div:not(:last-of-type) {
        flex-basis: 40%;
        margin-inline-end: 40px;
    }
    img {
        border-radius: 50%;
    }
    .img-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .personal-details {
        display: flex;
        flex-direction: column;
        // padding-bottom: 20px;
        >* {
            margin-bottom: 5px;
        }
    }
    .controller-btns-container {
        flex-basis: 20%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        flex-grow: 1;
    }
}
</style>