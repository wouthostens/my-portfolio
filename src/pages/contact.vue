<script setup>
import TitleComponent from '../components/title.vue';
</script>

<template>
  <div>
    <TitleComponent title="Contacteer mij" />
    <div class="h-85vh flex justify-center overflow-auto pb-10">
      <div class="w-full max-w-md px-4">
        <form @submit.prevent="submitForm"
          class="animate-fade-up stagger-1 rounded-2xl border border-zinc-900/10 bg-white/70 p-6 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] md:p-7">
          <div class="mb-4">
            <label class="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300" for="name">
              Naam
            </label>
            <input
              class="w-full rounded-xl border border-zinc-900/10 bg-white px-4 py-2.5 text-[15px] text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/30 dark:border-white/10 dark:bg-white/5 dark:text-white"
              id="name" type="text" v-model="name" placeholder="Je naam" required>
          </div>
          <div class="mb-4">
            <label class="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300" for="email">
              E-mail
            </label>
            <input
              class="w-full rounded-xl border border-zinc-900/10 bg-white px-4 py-2.5 text-[15px] text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/30 dark:border-white/10 dark:bg-white/5 dark:text-white"
              id="email" type="email" v-model="email" placeholder="jij@voorbeeld.be" required>
          </div>
          <div class="mb-6">
            <label class="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300" for="message">
              Bericht
            </label>
            <textarea
              class="h-25vh w-full rounded-xl border border-zinc-900/10 bg-white px-4 py-2.5 text-[15px] text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/30 dark:border-white/10 dark:bg-white/5 dark:text-white"
              id="message" v-model="message" placeholder="Waarover wil je het hebben?" required></textarea>
          </div>
          <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              class="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/30"
              type="submit">
              <span v-if="isSubmitting">Zenden…</span>
              <span v-else>Verstuur e-mail</span>
            </button>
            <button
              class="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2.5 text-sm font-semibold text-emerald-600 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-500/20 dark:text-emerald-400"
              type="button" @click="openWhatsAppLink">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.83 14.12c-.25.7-1.45 1.33-2.02 1.42-.52.08-1.17.11-1.88-.12-.44-.14-1-.32-1.71-.63-3-1.3-4.96-4.32-5.11-4.52-.15-.2-1.22-1.62-1.22-3.1 0-1.47.77-2.19 1.05-2.49.27-.3.6-.37.8-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.25.6.85 2.07.92 2.22.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.3.77 1.27 1.65 2.06 1.13 1.01 2.09 1.32 2.39 1.47.3.15.47.12.65-.07.17-.2.75-.87.94-1.17.2-.3.4-.25.67-.15.27.1 1.72.81 2.02.96.3.15.5.22.57.35.07.12.07.72-.18 1.42Z" />
              </svg>
              WhatsApp
            </button>
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
      return `https://wa.me/+32468166869?text=${encodeURIComponent(`Hey Wout,\n\n${this.message} \n\nVriendelijke groetjes\n${this.name}`)}`;
    },
  },
  methods: {
    openWhatsAppLink() {
      if (this.name === '' || this.message === '') {
        window.alert('Gelieve je naam en bericht in te vullen.');
        return;
      } else {
        window.open(this.whatsappLink, '_blank');
        this.name = '';
        this.email = '';
        this.message = '';
      }
    },
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
          window.alert('Messaged sent successfully!');
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
