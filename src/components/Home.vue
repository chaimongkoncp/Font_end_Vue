<template>
  <div>
    <div class="container cap">
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row">
            <div class="col-md-4" v-for="member in members" :key="member.id">
              <div class="card mb-4 shadow-sm">
                <svg
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">{{member.username}}</text>
                </svg>
                <div class="card-body">
                  <p class="card-text">{{member.email}}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary" onClick>Delete</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">
                        <router-link
                          :to="{name: 'edit', params: { id: member.id}}"
                          class="btn btn-sm btn-outline-secondary"
                        >Edit</router-link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: []
    };
  },
  created() {
    this.axios.get("http://localhost:1323/member").then(response => {
      this.members = response.data;
    });
  }
};
</script>

<style>
</style>