var profileForm = document.getElementById('profile-form');

profileForm.addEventListener('submit', function(e) {
	e.preventDefault();
	var name_value = document.getElementById('name').value;
	var email_value = document.getElementById('email').value;
	var address_value = document.getElementById('address').value;
	var city_value = document.getElementById('city').value;
	var province_value = document.getElementById('province').value;
	var pc_value = document.getElementById('pc').value;
	
	document.getElementById('name_result').innerHTML = name_value;
	document.getElementById('email_result').innerHTML = email_value;
	document.getElementById('email_result').setAttribute('href', 'mailto:'+email_value);
	document.getElementById('address_result').innerHTML = address_value;
	document.getElementById('city_result').innerHTML = city_value;
	document.getElementById('province_result').innerHTML = province_value;
	document.getElementById('pc_result').innerHTML = pc_value;
})