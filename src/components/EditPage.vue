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
        <h1 class="h3 mb-3 font-weight-normal">Edit Accout</h1>
        <label for="Username" class="sr-only">Username</label>
        <input
          type="text"
          id="textPassword"
          class="form-control"
          placeholder="USERNAME"
          required
          v-model="member.username"
        />
        <label for="inputPassword" class="sr-only">Password</label>
        <input
          type="text"
          id="textPassword"
          class="form-control"
          placeholder="PASSWORD"
          required
          v-model="member.password"
        />
        <label for="textFisrtname" class="sr-only">FisrtName</label>
        <input
          type="text"
          id="name"
          class="form-control"
          placeholder="FISRT_NAME"
          required
          autofocus
          v-model="member.fisrtname"
        />
        <label for="inputLastName" class="sr-only">LastName</label>
        <input
          type="text"
          id="text"
          class="form-control"
          placeholder="LAST_NAME"
          required
          v-model="member.lastname"
        />
        <label for="textEmail" class="sr-only">Email</label>
        <input
          type="text"
          id="name"
          class="form-control"
          placeholder="EMAIL"
          required
          autofocus
          v-model="member.email"
        />
        <label for="inputPhone" class="sr-only">Phone</label>
        <input
          type="text"
          id="text"
          class="form-control"
          placeholder="PHONE"
          required
          v-model="member.phone"
        />
        <div class="checkbox mb-3"></div>
        <button
          class="btn btn-lg btn-primary btn-block"
          type="submit"
          @click.prevent="updateMember()"
        >Edit</button>
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
  created() {
    let uri = `http://localhost:1323/member/${this.$route.params.id}`;
    this.axios.get(uri).then(response => {
      this.member = response.data;
    });
  },
  methods: {
    updateMember() {
      const data = {
        username: this.member.username,
        password: this.member.password,
        fisrtname: this.member.fisrtname,
        lastname: this.member.lastname,
        email: this.member.email,
        phone: this.member.phone
      };
      this.axios
        .put(`http://localhost:1323/member/${this.$route.params.id}`, data)
        .then(response => {
          alert(response.data);
          this.$router.push({ name: "home" });
        });
    }
  }
};
</script>
<style>
</style>