<template>
  <div>
    <h4>This is {{pageName}}</h4>
    <ul v-for="user in users" :key="user.id">
      <li>{{user.username}}</li>
      <li>{{user.password}}</li>
      <li>{{user.fullName}}</li>
    </ul>
    <button v-on:click="append">Click</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  props: {
    pageName: String
  },
  computed: {
    ...mapGetters("AuthModule", { users: "GET_ALL_USERS" })
  },
  created() {
    this.$store.dispatch("AuthModule/GET_ALL");
    this.$store.dispatch("AuthModule/GET_BY_USER_NAME");
  },
  methods: {
    append() {
      this.users.push({ username: "nguyenvantoan", password: "Aloalo123" });
    }
  }
};
</script>