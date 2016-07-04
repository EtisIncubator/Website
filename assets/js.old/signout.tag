<signout>
	<h2>Logout</h2>
  <button class="btn btn-default" onclick={submit}>Button</button>
  <script>
		this.submit = function(){$.post('/api/logout')}
  </script>
</signout>
