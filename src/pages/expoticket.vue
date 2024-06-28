<template>
    <div class="center-container ">
        <button class="mb-5" @click="generateQRCode">Generate QR Code</button>
        <img class="mb-20" v-if="qrCode" :src="qrCode" alt="QR Code" />
        <img v-if="qrCodemcdo" :src="qrCodemcdo" alt="QR Code" />
    </div>
</template>

<script>
import QRCode from 'qrcode'

export default {
    data() {
        return {
            qrCode: null,
            VIVES_BASE: '540513002',
            VIVES_END: '515',
            MCDO_BASE: '540513002',
            MCDO_END: '501'
        }
    },
    methods: {
        generateQRCode() {
            const now = new Date()
            const year = now.getFullYear().toString().padStart(4, '0')
            const month = (now.getMonth() + 1).toString().padStart(2, '0') // +1 because getMonth() returns 0-11
            const day = now.getDate().toString().padStart(2, '0')
            const hour = now.getHours().toString().padStart(2, '0')
            const minute = now.getMinutes().toString().padStart(2, '0')
            const second = now.getSeconds().toString().padStart(2, '0')

            const vivescode = `${this.VIVES_BASE}${year}${month}${day}${hour}${minute}${second}${this.VIVES_END}`
            const mcdcode = `${this.MCDO_BASE}${year}${month}${day}${hour}${minute}${second}${this.MCDO_END}`
            QRCode.toDataURL(vivescode, (err, url) => {
                if (err) {
                    console.error(err)
                } else {
                    this.qrCode = url
                }
            })
            QRCode.toDataURL(mcdcode, (err, url) => {
                if (err) {
                    console.error(err)
                } else {
                    this.qrCodemcdo = url
                }
            })
        }
    }
}
</script>
<style scoped>
.center-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Adjust as needed */
}
</style>