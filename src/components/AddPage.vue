<template>
<div>
  <div class="container cap">
    <body class="text-center">
      <form class="form-signin">
        <img
          class="mb-4"
          src="/docs/4.4/assets/brand/bootstrap-solid.svg"
          alt
          width="72"
          height="72"
        />
        <h1 class="h3 mb-3 font-weight-normal">Register</h1>
        <label for="Username" class="sr-only">Username</label>
        <input
          type="text"
          id="textPassword"
          class="form-control"
          placeholder="USERNAME"
          required
          v-model="member.member_username"
        />
        <label for="inputPassword" class="sr-only">Password</label>
        <input
          type="text"
          id="textPassword"
          class="form-control"
          placeholder="PASSWORD"
          required
          v-model="member.member_password"
        />
        <label for="textFisrtname" class="sr-only">FisrtName</label>
        <input
          type="text"
          id="name"
          class="form-control"
          placeholder="FISRT_NAME"
          required
          autofocus
          v-model="member.member_fisrtname"
        />
        <label for="inputLastName" class="sr-only">LastName</label>
        <input
          type="text"
          id="text"
          class="form-control"
          placeholder="LAST_NAME"
          required
          v-model="member.member_lastname"
        />
        <label for="textEmail" class="sr-only">Email</label>
        <input
          type="text"
          id="name"
          class="form-control"
          placeholder="EMAIL"
          required
          autofocus
          v-model="member.member_email"
        />
        <label for="inputPhone" class="sr-only">Phone</label>
        <input
          type="text"
          id="text"
          class="form-control"
          placeholder="PHONE"
          required
          v-model="member.member_phone"
        />
        <div class="checkbox mb-3"></div>
        <button
          class="btn btn-lg btn-primary btn-block"
          type="submit"
          @click.prevent="addMember()"
        >Add</button>
        <p class="mt-5 mb-3 text-muted">© 2017-2019</p>
      </form>
    </body>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      member: {}
    };
  },
  methods: {
    addMember() {
      const data = {
        username: this.member.member_username,
        password: this.member.member_password,
        fisrtname: this.member.member_fisrtname,
        lastname: this.member.member_lastname,
        email: this.member.member_email,
        phone: this.member.member_phone
      };
      this.axios.post("http://localhost:1323/member/add", data).then(res => {
        alert(res.data);
        this.$router.push({ name: "home" });
      });
    }
  }
};
</script>

<style>
</style>