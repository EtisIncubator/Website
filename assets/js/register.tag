<register>
	Your choice for login: <span id="choice">
		<table>
			<tr>
				<th id="signin">
					<div class="g-signin2" data-onsuccess="registerGoogle"></div>
				</th>
				<th id="signout">
					<button type="button" class="btn btn-warning" onclick="signout()">Sign out from Google</button>
				</th>
			</tr>
		</table>

	</span>
	<form onsubmit={submit} id="register">
		<div class="form-group has-feedback " id="Email">
			<label class="control-label" for="Email" >{email}</label>
			<input class="form-control" type="email" name="Email" id="Email" placeholder="Email">
			<input name="Token" id="Token" value="" type="hidden">
		</div>
		<div class="form-group has-feedback " id="Name">
			<label class="control-label" for="Firstname">{name}</label>
			<input class="form-control" type="text" name="Firstname" id="Lastname" placeholder="First name"><br>
			<input class="form-control" type="text" name="Lastname" id="Lastname" placeholder="Last name">
		</div>
		<div class="form-group has-feedback " id="Password">
			<label class="control-label" for="Password">{pass}</label>
			<input class="form-control" type="password" name="Password" id="Password1" placeholder="Password" onkeyup={ editPass }><br>
			<input class="form-control" type="password" name="Password" id="Password2" placeholder="Password" onkeyup={ editPass }><br>
			<p id="passwordmsg">Password is empty</p>
			<div class="proress">
				<div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="10">
					Password length
			</div>
		</div>
		</div>
		<br>
    <input class="btn btn-success" type="submit" value="Submit">
	</form>
	<script type="text/javascript">
		this.submit = function(){
			const succ = opts.api('POST', '/api/register', $('form').serialize());
			if (succ == true) {
				window.location.pathname = '/login';
			} else {
				alert('check your form');
			}

		}
		this.email = "Your email address";
		this.name = "Your both names";
		this.pass = "Please insert passwords twice. Password must be greater than 8 characters";
		this.editPass = function(e) {
			var pass1 = $('#Password1').val();
			var div = $('div.progress-bar');
			if (pass1.length < 5){
				div.css('width', String(pass1.length*10) + '%')
				div.removeClass('progress-bar-success');
				div.removeClass('progress-bar-warning');
				div.addClass('progress-bar-danger');
				div.attr('aria-valuenow', pass1.length);
			} else if (pass1.length < 10 && pass1.length > 4){
				div.css('width', String(pass1.length*10) + '%')
				div.removeClass('progress-bar-danger');
				div.removeClass('progress-bar-success');
				div.addClass('progress-bar-warning');
				div.attr('aria-valuenow', pass1.length);
			} else if (pass1.length >= 10){
				div.css('width', '100%')
				div.removeClass('progress-bar-warning');
				div.removeClass('progress-bar-danger');
				div.addClass('progress-bar-success');
				div.attr('aria-valuenow', '10');
			}
			if (pass1.length == 0) {
				document.getElementById('passwordmsg').innerHTML = "Please insert password";
			} else if (pass1.length < 9  && pass1.length > 0) {
				document.getElementById('passwordmsg').innerHTML = "Password too short";
			} else if (pass1 != $('#Password2').val()) {
				document.getElementById('passwordmsg').innerHTML = "Passwords do not match";
			} else if (pass1 == $('#Password2').val()) {
				document.getElementById('passwordmsg').innerHTML = "Passwords do match";
			}
		};
	</script>
	<style type="text/css">
		div.progress-bar {
			min-width: 10em;
		}
	</style>

</register>
