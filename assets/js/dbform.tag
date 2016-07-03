<dbform>
  <h2>{data.head}</h2>
  <form onsubmit={submit} id="dbform">
      <div class="form-group has-feedback ">
        <label class="control-label" for="First">{data.first}</label><br>
        <input class="form-control" type="text" name="First" id="First" value={value.first} placeholder="First name"/>
      </div>
    <div class="form-group has-feedback ">
      <label class="control-label" for="Last">{data.last}</label><br>
      <input class="form-control" type="text" name="Last" id="Last" value={value.last} placeholder="Last name"/>
    </div>
    <strong>{data.hcountry}</strong><br>
    <div id="country"></div>
    <div class="form-group has-feedback ">
      <label class="control-label" for="School">{data.School}</label><br>
      <input class="form-control" type="text" name="School" id="School" value={value.school} placeholder="School"/>
    </div>
    <div class="form-group has-feedback ">
      <label class="control-label" for="Class">{data.class}</label><br>
      <input class="form-control" type="text" name="Class" id="class" value={value.class} placeholder="Class"/>
    </div>
    <div class="form-group has-feedback">
      <strong>{data.skill}</strong><br>
      <input type="checkbox" name="Skillset" value="Drawing">Drawing/Painting</input><br>
      <input type="checkbox" name="Skillset" value="Design">Design</input><br>
      <input type="checkbox" name="Skillset" value="Maths">Mathematics</input><br>
      <input type="checkbox" name="Skillset" value="Logic">Logic</input><br>
      <input type="checkbox" name="Skillset" value="Programming">Programming</input><br>
      <input type="checkbox" name="Skillset" value="Sports">Sports</input><br>
      <input type="checkbox" name="Skillset" value="Linguist">Linguist</input><br>
      <input type="checkbox" name="Skillset" value="Security">Hacking (security)</input><br>
      <input type="checkbox" name="Skillset" value="DIY">Do it yourself</input><br>
      <input type="checkbox" name="Skillset" value="Psychology">Psychology</input><br>
      <input type="checkbox" name="Skillset" value="Electronics">Electronics</input><br>
      <input type="checkbox" name="Skillset" value="Acting">Acting</input><br>
    </div>
    <div class="form-group has-feedback ">
      <label class="control-label" for="subjects">{data.subjects}</label><br>
      <input class="form-control" type="text" name="Subjects" id="subjects" value={value.subjects} placeholder="Subjects"/>
    </div>
    <div class="form-group has-feedback ">
      <label class="control-label" for="freetime">{data.freetime}</label><br>
      <input class="form-control" type="text" name="Freetime" id="freetime" value={value.freetime} placeholder="Freetime"/>
    </div>
    <div class="form-group has-feedback ">
      <label class="control-label" for="career">{data.career}</label><br>
      <input class="form-control" type="text" name="Career" id="career" value={value.career} placeholder="Career"/>
    </div>
    <div class="form-group has-feedback ">
      <label class="control-label" for="project">{data.project}</label><br>
      <input class="form-control" type="text" name="Project" id="project" value={value.project} placeholder="Project ideas"/>
    </div>
    <div class="form-group has-feedback">
      <strong>{data.help}</strong><br>
    <label class="control-label" class="radio-inline">
      <input type="radio" name="Help" id="helpYes" value="yes"> Yes
    </label><br>
    <label class="control-label" class="radio-inline">
      <input type="radio" name="Help" id="helpNo" value="no"> No
    </label><br>
    </div>
    <div class="form-group has-feedback ">
      <label class="control-label" for="email">{data.email}</label><br>
      <input class="form-control" type="text" name="Email" id="email" value={value.email} placeholder="Email address"/>
      <input class="form-control" type="text" name="Phone" id="phone" value={value.phone} placeholder="Phone"/>
    </div>
    <input class="form-control" class="btn btn-success" type="submit" value="Submit" id="dbform">
  </form>
  <script>
    this.submit = opts.api('POST',  '/api/person', $('#dbform').serialize());
    this.data = opts.data;
    this.data.head = "Please fill this form and give information to our database. We do not sell information "
    this.data.head += "or give information away outside Hautomo. This information can be saved outside EU.";
    this.data.first = "First name";
    this.data.last = "Last name";
    this.data.hcountry = "Your country";
    this.data.School = "Your school";
    this.data.skill = "Choose your skills";
    this.data.class = "Your class/group";
    this.data.subjects = "Favourite subjects";
    this.data.freetime = "How you spend your freetime";
    this.data.career = "What you want to do in the future";
    this.data.project = "Any project ideas";
    this.data.help = "Can you help Hautomo?";
    this.data.email = "Your email address and/or phone number for us to contact. Optional";
    riot.mount('country')
  </script>
</dbform>
