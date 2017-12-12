<template>
  <div>
    <h2>Добавление пользователя</h2>

    <div v-if="!user" class="alert alert-warning">
      Загрузка...
    </div>
    <user-form v-else v-bind:user="user"></user-form>
  </div>
</template>

<script>
import axios from 'axios'
import UserForm from '@/components/user-form.vue'

const emptyObj = {
  "id": 0,
  "isActive": false,
  "balance": "",
  "picture": "",
  "age": 0,
  "accessLevel": "",
  "firstName": "",
  "lastName": "",
  "company": "",
  "email": "",
  "phone": "",
  "address": "",
  "about": "",
  "registered": ""
};

export default {
  name: 'AddUserPage',
  components: {
    'user-form': UserForm
  },
  data: function() {
    return {
      // Пользователь
      user: null
    };
  },
  methods: {
    loadData: function() {
      this.user = Object.assign({}, emptyObj)
    }
  },
  mounted: function () {
    this.loadData();
  }
}
</script>
