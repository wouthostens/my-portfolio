<template>
    <div>
        <div v-if="user">
            <p>Welcome, {{ user.email }}</p>
            <button @click="logout">Logout</button>
            
        </div>
        <div v-else-if="showLogin">
            <h1>Login</h1>
            <form @submit.prevent="login">
                <input type="email" v-model="email" placeholder="Email">
                <input type="password" v-model="password" placeholder="Password">
                <button type="submit">Login</button>
            </form>
            <button @click="showLogin = false">Register</button>
        </div>
        <div v-else>
            <h1>Register</h1>
            <form @submit.prevent="register">
                <input type="email" v-model="registerEmail" placeholder="Email">
                <input type="password" v-model="registerPassword" placeholder="Password">
                <button type="submit">Register</button>
            </form>
            <button @click="showLogin = true">Login</button>
        </div>
        <p>{{ message }}</p>
    </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, onAuthStateChanged, signOut } from 'firebase/auth';

export default {
    setup() {
        const email = ref('');
        const password = ref('');
        const registerEmail = ref('');
        const registerPassword = ref('');
        const showLogin = ref(true);
        const message = ref('');
        const user = ref(null);
        const auth = getAuth();

        onMounted(() => {
            const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
                user.value = firebaseUser;
            });
            onUnmounted(unsubscribe);
        });
        const logout = async () => {
            try {
                await signOut(auth);
            } catch (error) {
                console.error(error);
            }
        };
        const login = async () => {
            const auth = getAuth();
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
                // Signed in 
                const user = userCredential.user;
            } catch (error) {
                console.error(error);
            }
        };

        const register = async () => {
            const auth = getAuth();
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, registerEmail.value, registerPassword.value);
                // Successfully registered
                const user = userCredential.user;

                // Send email verification
                if (user) {
                    await sendEmailVerification(user);
                    message.value = 'Please check your email for verification';
                }
            } catch (error) {
                if (error.code === 'auth/email-already-in-use') {
                    message.value = 'Email already in use';
                } else {
                    console.error(error);
                }
            }
        };

        return { email, password, registerEmail, registerPassword, login, register, showLogin, message, user, logout };
    },
};
</script>