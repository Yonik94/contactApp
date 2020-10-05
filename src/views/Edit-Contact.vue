<template>
    <div class="edit-contact">
        <h2>{{ pageTitle }}</h2>
        <form @submit.prevent="updateContact()" action="">
            <input
                type="text"
                placeholder="Contact name"
                v-model="contact.name"
            />
            <input
                type="text"
                placeholder="Contact phone"
                v-model="contact.phone"
            />
            <input
                type="text"
                placeholder="Contact company"
                v-model="contact.company"
            />
            <input
                type="text"
                placeholder="Contact address"
                v-model="contact.address"
            />
            <input
                type="text"
                placeholder="Contact job"
                v-model="contact.job"
            />
            <button>{{ SubmitBtnTxt }}</button>
        </form>
        <router-link to="/">
            <a href="">Back to home</a>
        </router-link>
    </div>
</template>

<script>
import { contactService } from "../services/contact.service";
export default {
    data() {
        return {
            contact: {
                name: "",
                phone: "",
                address: "",
                job: "",
                company: "",
            },
        };
    },
    methods: {
        async updateContact() {
            if (this.isContactValidate()) {
                await this.$store.dispatch("updateContact", this.contact);
                this.$router.push("/");
            }
        },

        isContactValidate() {
            if (
                !this.contact.name ||
                !this.contact.phone ||
                !this.contact.job ||
                !this.contact.company ||
                !this.contact.address
            )
                return false;
            return true;
        },
    },
    computed: {
        pageTitle() {
            return this.$route.params.id ? "Edit Contact" : "Add Contact";
        },
        SubmitBtnTxt() {
            return this.$route.params.id ? "Save changes" : "Add Contact";
        },
    },
    async created() {
        const contactId = this.$route.params.id;
        if (contactId) {
            this.contact = await contactService.getContactBy(contactId);
        }
    },
};
</script>

<style lang="scss">
.edit-contact {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    h2 {
        padding: 30px;
    }
    form {
        display: flex;
        flex-direction: column;
        width: 400px;
        padding: 20px;
        -webkit-box-shadow: 6px 4px 15px -4px rgba(0, 0, 0, 0.58);
        -moz-box-shadow: 6px 4px 15px -4px rgba(0, 0, 0, 0.58);
        box-shadow: 6px 4px 15px -4px rgba(0, 0, 0, 0.58);
        input {
            padding: 10px 20px;
            border: none;
            background-color: rgb(180, 182, 182);
            &:not(last-of-type) {
                margin-bottom: 10px;
            }
        }
        button {
            background-color: rgb(61, 61, 71);
            padding: 10px 20px;
            color: white;
            &:hover {
                background-color: rgb(77, 77, 88);
            }
        }
    }
}
</style>