<script setup>
import titlecomponent from '../components/title.vue';
</script>

<template>
  <div>
    <titlecomponent title="Contacteer mij" />
    <div class="flex justify-center   overflow-auto box">
      <div class="w-full max-w-md">
        <form @submit="submitForm"
          class="p-6 mx-auto dark:bg-slate-800 bg-gray-200 rounded-xl shadow-md overflow-hidden">
          <div class="mb-4 dark:text-yellow-500 uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            <label class=" " for="name">
              Naam:
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="name" type="text" v-model="name" required>
          </div>
          <div class="mb-4 dark:text-yellow-500 uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            <label class="block  text-sm font-bold mb-2" for="email">
              Email:
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email" type="email" v-model="email" required>
          </div>
          <div class="mb-6 dark:text-yellow-500 uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            <label class="block text-sm font-bold mb-2" for="message">
              Bericht:
            </label>
            <textarea
              class=" textarea shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="message" v-model="message" required></textarea>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="dark:bg-yellow-500 dark:hover:bg-yellow-600 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              <span v-if="isSubmitting">
                <i class="fas fa-spinner fa-spin"></i> Zenden...
              </span>
              <span v-else>
                Zend mail
              </span>
            </button>
            <a class="inline-block align-baseline font-bold text-sm hover:text-indigo-700 dark:text-yellow-500 dark:hover:text-yellow-600 hover:underline"
              :href="whatsappLink">
              Klik hier om me op whatsapp te contacteren
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      isSubmitting: false,
    };
  },
  computed: {
    whatsappLink() {
      // Replace 'YOUR_PHONE_NUMBER' with your actual phone number
      return `https://wa.me/+32468166869?text=${encodeURIComponent('Hi, {{message}} friendly greetings from {{name}} here is my email: {{email}}')}`;
    },
  },
  methods: {
    submitForm() {
      this.isSubmitting = true;
      emailjs.send(import.meta.env.VITE_APP_EMAIL_SERVICE_ID, import.meta.env.VITE_APP_EMAIL_TEMPLATE_ID, {
        name: this.name,
        email: this.email,
        message: this.message,
      }, import.meta.env.VITE_APP_EMAIL_USER_ID)
        .then((response) => {
          this.name = '';
          this.email = '';
          this.message = '';
          window.alert('Email sent successfully!');
          this.isSubmitting = false;
          console.log('SUCCESS!', response.status, response.text);
        }, (error) => {
          this.isSubmitting = false;
          window.alert('Failed to send email. Please try again later or send me a message on whatsapp.');
          console.error('FAILED...', error);
        });
    },
  },
};
</script>

<style scoped>
.box {
  height: 85vh;
}

.textarea {
  min-height: 25vh;
}
</style>