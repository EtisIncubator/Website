<signin>
	<div id="google">
		<div class="g-signin2" data-onsuccess="onSignIn"></div>
	</div>
	<div id="facebook">
	</div>
	<div id="custom">
		<span id="msg">Please fill login form</span>
		<form onsubmit={submit}>
		<div class="form-group has-feedback">
			<label for="Email">Email address</label>
			<input class="form-control" type="email" class="form-control" id="Email" name="Email" placeholder="Email">
		</div>
		<div class="form-group has-feedback">
			<label for="Password">Password</label>
			<input class="form-control" type="password" class="form-control" id="Password" name="Password" placeholder="Password">
		</div>
  <button type="submit" class="btn btn-default">Login</button>
	</div>
	<script>
		this.submit = function(){
			const succ = opts.api("POST", '/api/login', $('form').serialize());
			if (succ == true) {
					window.location.href = '/';
				}
		}
	</script>


</signin>
