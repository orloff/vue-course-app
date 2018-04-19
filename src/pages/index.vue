<template>
  <div>
    Стартовая страница

    <router-link to="/add">
      Добавить пользователя
    </router-link>
    <router-link to="/users">
      Открыть список пользователей
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
