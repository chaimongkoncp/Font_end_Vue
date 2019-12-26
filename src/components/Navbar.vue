<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a class="navbar-brand" href="#">TEST</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample02"
        aria-controls="navbarsExample02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample02">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/add" class="nav-link">Register</router-link>
          </li>

          <!-- {
                            this.props.isLogin ? (
                                <li class="nav-item">
                                    <a class="nav-link" href="/login">Logout</a>
                                </li>
                            ) : (
                                    <li class="nav-item">
                                        <a class="nav-link" href="/login">Login</a>
                                    </li>
                                )
          }-->

          <button class="btn btn-outline-my-2 my-sm-0" type="submit">Click To Logout</button>
        </ul>
        <form class="form-inline my-2 my-md-0">
          <input class="form-control" type="text" placeholder="Search" />
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>