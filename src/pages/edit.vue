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
      :user="user"
      @input="value => user = value"
    />

    <pre>{{ user }}</pre>

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
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  mounted: function() {
    this.loadData()
  },
  methods: {
    loadData: function() {
      axios.get('/db.json').then(({ data }) => {
        // Для примера просто выбираем одного пользователя
        this.user = data.users.find(item => item.id === parseInt(this.id, 10))
      })
    }
  }
}
</script>
