<bar>
  <div class="hidden-xs hidden-sm">
    <ul class="nav nav-tabs nav-justified">
      <li><a href="/">Home</a></li>
      <li><a href="/news">News</a></li>
      <li><a href="/contacts">Contact</a></li>
      <li><a class="active" href="/about">About</a></li>
      <li ><a class="active" href="/projects">Projects</a></li>
      <li ><a class="active" href="/database">Database</a></li>
      <li ><a class="active" href="/register">Register</a></li>
      <li ><a class="active" href="/login">Login</a></li>
    </ul>
    <div id="app"></div>
  </div>
  <div class="hidden-md hidden-lg">
    <div class="pure-container" data-effect="pure-effect-slide">
      <input type="checkbox" id="pure-toggle-left" class="pure-toggle" data-toggle="left">
      <label class="pure-toggle-label" for="pure-toggle-left" data-toggle-label="left">
        <span class="pure-toggle-icon"></span>
      </label>
      <div class="pure-drawer" data-position="left">
        <ul class="nav nav-pills nav-stacked">
          <li><a href="/">Home</a></li>
          <li><a href="/news">News</a></li>
          <li><a href="/contacts">Contact</a></li>
          <li><a class="active" href="/about">About</a></li>
          <li ><a class="active" href="/projects">Projects</a></li>
          <li ><a class="active" href="/database">Database</a></li>
          <li ><a class="active" href="/register">Register</a></li>
          <li ><a class="active" href="/login">Login</a></li>
        </ul>
      </div>
      <div class="pure-pusher-container">
        <div class="pure-pusher">
          <div id="app">
          </div>
        </div>
      </div>
      <label class="pure-overlay" for="pure-toggle-left" data-overlay="left">
      </label>
    </div>
  </div>
	<style type="text/css">
    ul.nav-tabs {
			list-style-type: none;
			margin: 0;
			padding: 0;
			overflow: hidden;
			background-color: #9E9E9E;
		}
		li {
				float: left;
		}
		li a {
				display: block;
				color: white;
				text-align: center;
				padding: 14px 16px;
				text-decoration: none;
		}
		/* Change the link color to #111 (black) on hover */
		li a:hover {
				background-color: #111;
      }
    @media only screen and (max-width: 768) {
      /* Navigation Menu - Background */
.navigation {
  /* critical sizing and position styles */
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;

  /* non-critical appearance styles */
  list-style: none;
  background: #111;
}

/* Navigation Menu - List items */
.nav-item {
  /* non-critical appearance styles */
  width: 200px;
  border-top: 1px solid #111;
  border-bottom: 1px solid #000;
}

.nav-item a {
  /* non-critical appearance styles */
  display: block;
  padding: 1em;
  background: linear-gradient(135deg, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%);
  color: white;
  font-size: 1.2em;
  text-decoration: none;
  transition: color 0.2s, background 0.5s;
}

.nav-item a:hover {
  color: #c74438;
  background: linear-gradient(135deg, rgba(0,0,0,0) 0%,rgba(75,20,20,0.65) 100%);
}

/* Site Wrapper - Everything that isn't navigation */
.barba-wrap {
  /* Critical position and size styles */
  min-height: 100%;
  min-width: 100%;
  background-color: white; /* Needs a background or else the nav will show through */
  position: relative;
  top: 0;
  bottom: 100%;
  left: 0;
  z-index: 1;

  /* non-critical apperance styles */
  padding: 4em;
  background-image: linear-gradient(135deg, rgb(254,255,255) 0%,rgb(221,241,249) 35%,rgb(160,216,239) 100%);
  background-size: 200%;
}

/* Nav Trigger */
.nav-trigger {
  /* critical styles - hide the checkbox input */
  position: absolute;
  clip: rect(0, 0, 0, 0);
}

label[for="nav-trigger"] {
  /* critical positioning styles */
  position: fixed;
  left: 15px; top: 15px;
  z-index: 2;

  /* non-critical apperance styles */
  height: 30px;
  width: 30px;
  cursor: pointer;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' width='30px' height='30px' viewBox='0 0 30 30' enable-background='new 0 0 30 30' xml:space='preserve'><rect width='30' height='6'/><rect y='24' width='30' height='6'/><rect y='12' width='30' height='6'/></svg>");
  background-size: contain;
}

/* Make the Magic Happen */
.nav-trigger + label, .site-wrap {
  transition: left 0.2s;
}

.nav-trigger:checked + label {
  left: 215px;
}

.nav-trigger:checked ~ .site-wrap {
  left: 200px;
  box-shadow: 0 0 5px 5px rgba(0,0,0,0.5);
}

body {
	/* Without this, the body has excess horizontal scroll when the menu is open */
  overflow-x: hidden;
}

/* Additional non-critical styles */

h1, h3, p {
  max-width: 600px;
  margin: 0 auto 1em;
}

code {
	padding: 2px;
	background: #ddd;
}

/* Micro reset */
*,*:before,*:after{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0;}
html, body { height: 100%; width: 100%; font-family: Helvetica, Arial, sans-serif; }
    }
	</style>
</bar>
