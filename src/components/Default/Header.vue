<template>
    <div>
        <a-page-header style="border: 1px solid rgb(235, 237, 240)">
            <template #title>
                <img src="../../../public/images/trainline-mint.svg">
            </template>
            <template #extra>
                <a-button type="link" :size="size" @click="redirect('cart')">Cart</a-button>
                <a-button type="link" :size="size" @click="redirect('my')">My booking</a-button>
                <a-button type="link" :size="size">Register</a-button>
                <a-button type="primary" ghost icon="user" @click="handleSignIn" :size="size">
                    Sign in
                </a-button>
            </template>
        </a-page-header>
    </div>
</template>

<script>
export default {
    name: "AppHeader",
    components: {

    },
    data() {
        return {
            size: "large"
        }
    },
    methods: {
        handleSignIn() {
            console.log(1);
        },
        redirect(key) {
            this.$router.push({
                name: key,
            });
        }
    }
}
</script>

<style></style>