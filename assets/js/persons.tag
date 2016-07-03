<persons>
  <table class="table table-hover table-bordered" id="insert">
    <tr>
      <td>First name</td>
      <td>Last name</td>
      <td>Country</td>
      <td>School</td>
      <td>Class</td>
      <td>Skillset</td>
      <td>Subjects</td>
      <td>Ideas</td>
      <td>Career</td>
    </tr>
  </table>
	<script type="text/javascript" charset="utf-8">
		var found = false;
		$.getJSON("/api/auth/person", function( data ){
      found = true;
      if (data.ok != false) {
        var fn = function(data) {
          var open = '<td class="success">';
          var bad = '<td class="danger">';
          if (data == '') {
            return bad + data + '</tr>';
          } else {
            return  open + data + '</tr>';
          }
        };
        var table = document.getElementById('insert');
        for (var i in data) {
          var row = fn(data[i].Firstname);
          row += fn(data[i].Lastname);
          row += fn(data[i].Country);
          row += fn(data[i].School);
          row += fn(data[i].Class);
          row += fn(data[i].Skillset);
          row += fn(data[i].Subjects);
          row += fn(data[i].Ideas);
          row += fn(data[i].Career);
          table.insertRow(-1).innerHTML = row;
        }
      }
		});
  </script>
</persons>
