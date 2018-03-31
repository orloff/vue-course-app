<template>
  <div>
    <h2>Редактирование пользователя</h2>

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
import axios from 'axios'
import UserForm from '@/components/user-form.vue'

export default {
  name: 'EditUserPage',
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
      var self = this

      axios.get('db.json').then(function(response) {
        // Для примера просто выбираем одного пользователя
        self.user = response.data.users[0]
      })
    }
  }
}
</script>
