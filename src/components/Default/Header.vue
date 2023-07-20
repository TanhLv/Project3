<template>
    <div>
        <a-page-header style="border: 1px solid rgb(235, 237, 240)">
            <template #title>
                <img src="../../assets/images/trainline-mint.svg">
            </template>
            <template #extra>
                <a-button type="link" :size="size" @click="redirect('cart')">Cart</a-button>
<<<<<<< HEAD
                <a-button type="link" :size="size" @click="redirect('my')">My booking</a-button>
                <a-button type="link" :size="size" @click="showRegisterForm = true">Register</a-button>
=======
                <a-button type="link" :size="size" @click="redirect('MyBooking')">My booking</a-button>
                <a-button type="link" :size="size">Register</a-button>
>>>>>>> 747676cd22ed4300c4f24ac12969d9bba5ebd58d
                <a-button type="primary" ghost icon="user" @click="handleSignIn" :size="size">
                    Sign in
                </a-button>
            </template>
        </a-page-header>

        <a-modal v-model="showRegisterForm" :width="500">
            <template #footer>
                <div class="modal-footer">
                    <a-button @click="showRegisterForm = false">Cancel</a-button>
                    <a-button type="primary" @click="register">Register</a-button>
                </div>
            </template>
            <template #default>
                <form>
                    <div class="modal-content">
                        <h2 class="modal-title">Register</h2>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" class="form-control" v-model="email">
                        </div>
                        <div class="form-group">
                            <label for="password">Password:</label>
                            <input type="password" id="password" class="form-control" v-model="password">
                        </div>
                        <div class="form-group">
                            <label for="confirmPassword">Confirm Password:</label>
                            <input type="password" id="confirmPassword" class="form-control" v-model="confirmPassword">
                        </div>
                    </div>
                </form>
            </template>
        </a-modal>

        <a-modal v-model="showLoginDialog" :width="500">
            <template #footer>
                <div class="modal-footer">
                    <a-button @click="showLoginDialog = false">Cancel</a-button>
                    <a-button type="primary" @click="login">Submit</a-button>
                </div>
            </template>
            <template #default>
                <form>
                    <div class="modal-content">
                        <h2 class="modal-title">Sign In</h2>
                        <div class="form-group">
                            <label for="username">Username:</label>
                            <input type="text" id="username" class="form-control" v-model="username">
                        </div>
                        <div class="form-group">
                            <label for="password">Password:</label>
                            <input type="password" id="password" class="form-control" v-model="password">
                        </div>
                    </div>
                </form>
            </template>
        </a-modal>
    </div>
</template>

<script>
export default {
    name: "AppHeader",
    components: {

    },
    data() {
        return {
            size: "large",
            showLoginDialog: false,
            showRegisterForm: false,
            username: '',
            password: '',
            email: '',
            confirmPassword: ''
        }
    },
    methods: {
        // handleSignIn() {
        //     console.log(1);
        // },
        // redirect(key) {
        //     this.$router.push({
        //         name: key,
        //     });
        // },
        //code gốc

        redirect(page) {
            // redirect to the specified page
        },
        handleSignIn() {
            // show the login dialog
            this.showLoginDialog = true;
        },
        login() {
            // handle login form submission
            // ...
            // close the login dialog
            this.showLoginDialog = false;
        },
        register() {
            // handle registration form submission
            // ...
            // close the registration dialog
            this.showRegisterForm = false;
        }



    }
}
</script>

<style>
.modal-footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 16px;
    background-color: #f0f2f5;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}

.modal-title {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 16px;
}

.form-group {
    margin-bottom: 16px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
}

.form-control {
    width: 100%;
    padding: 8px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    background-color: #fff;
    font-size: 16px;
    line-height: 1.5;
    transition: border-color 0.2s ease-in-out;
}

.form-control:focus {
    outline: none;
    border-color: #40a9ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}

.modal-content {
    padding: 16px;
}
</style>