$(document).ready(function(){

//Sign up for an account at https://thecatapi.com/ to get your API Key and insert below
// const key = '2b11f0c6-d830-4ef0-bf65-0b84cc28c5f0';
// let headers = new Headers();
// headers.set('x-api-key', key);

//how many cat images do you want to pull in
const limit = '8';
const source = 'https://dog.ceo/api/breed/husky/images/random/'+ limit;

let output = '';

$.getJSON(source, function(data){
	//loop through the returned cat images using either for or $.each()

	//append the returned cat images to the #content div
	console.log(data);
	console.log(data.message[0]);

	 for(i = 0; i < data.message.length; i++) {
		output += '<img src="'+ data.message[i]+'"/>';
		// console.log(data.message[i]);
	 }
	console.log(output);

	 $('#content').append(output);

	 $('img').click(function(){
		alert("Cute!");
	});
});

});