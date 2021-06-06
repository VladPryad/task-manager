<template>
    <div>
        <button v-if="(!this.isLoggedIn && !this.isSignInWindowVisible)" v-on:click="signInClick">Sign In</button>
        <button v-if="this.isLoggedIn" v-on:click="logOutClick">Log Out</button>

        <input v-if="this.isSignInWindowVisible" v-model="username" placeholder="username">
        <input v-if="this.isSignInWindowVisible" v-model="password" placeholder="password">

        <button v-if="this.isSignInWindowVisible" v-on:click="submitClick">Submit</button>
        <button v-if="this.isSignInWindowVisible" v-on:click="cancelClick">Cancel</button>
        <span>{{ getAdminMessage }}</span>
    </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';

export default {
    methods: {
        ...mapActions(['signIn']),
        ...mapMutations(['setAdminUsername', 'setPassword','setSignInWindowVisible', 'setLoginInfo', 'setAdminMessage', 'initToken']),
        signInClick() {
            this.setSignInWindowVisible(true);
            this.setAdminMessage('');
        },
        async submitClick() {
            this.setSignInWindowVisible(false);
            await this.signIn({ username: this.username, password: this.password});
        },
        cancelClick() {
            this.setSignInWindowVisible(false);
        },
        logOutClick() {
            this.setSignInWindowVisible(false);
            this.setLoginInfo(false, "");
            localStorage.removeItem('appToken');
        }
    },
    computed: {
        ...mapGetters(['getPassword', 'getAdminUsername', "isSignInWindowVisible", "isLoggedIn", "getAdminMessage"]),
        username: {
            get() {
                return this.getAdminUsername;
            },
            set(value) {
                this.setAdminUsername(value);
            }
        },
        password: {
            get() {
                return this.getPassword;
            },
            set(value) {
                this.setPassword(value);
            }
        }
    }
}
</script>

<style scoped lang="scss">
div {
    margin: 20px;
}
input {
    margin: 10px;
}
span {
    color: red;
}
</style>