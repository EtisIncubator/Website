<user>
  <div id="background">
    <div id="foreground">
      <p>{data.firstname}: {user.firstname}</p>
      <p>{data.lastname}: {user.lastname}</p>
      <p>{data.email}: {user.email}</p>
      <p>{data.auth}: {user.auth}</p>
      <p>{data.level}: {user.level}</p>
    </div>
  </div>
  <script type="text/javascript">
    this.data = opts.data;
    this.user = opts.user;
    if (this.user.level == 1) {
      this.user.level = "User";
    } else if (this.user.level == 2) {
      this.user.level = "Mentor";
    } else if (this.user.level == 3) {
      this.user.level = "Marketing";
    } else if (this.user.level == 4) {
      this.user.level = "Marketing and Mentor";
    } else if (this.user.level == 5) {
      this.user.level = "Moderator";
    } else if (this.user.level == 6) {
      this.user.level = "Admin";
    }
  </script>
</user>
