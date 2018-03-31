<template>
  <div>
    <h2>Добавление пользователя</h2>

    <div 
      v-if="!user" 
      class="alert alert-warning">
      Загрузка...
    </div>
    <user-form 
      v-else 
      :user="user"/>
  </div>
</template>

<script>
import UserForm from '@/components/user-form.vue'

const emptyObj = {
  id: 0,
  isActive: false,
  balance: '',
  picture: '',
  age: 0,
  accessLevel: '',
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  address: '',
  about: '',
  registered: ''
}

export default {
  name: 'AddUserPage',
  components: {
    'user-form': UserForm
  },
  data: function() {
    return {
      // Пользователь
      user: null
    }
  },
  mounted: function() {
    this.loadData()
  },
  methods: {
    loadData: function() {
      this.user = Object.assign({}, emptyObj)
    }
  }
}
</script>
