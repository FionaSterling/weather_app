function showAnimals(response) {
  // declare variables for headers which are the keys
  let headers = Object.keys(response[0]);

  // variables to intialize HTML elements
  let header_html = '<tr><th scope="col">#</th>';
  let body_html = '';

  // create the header with the keys using for loop
  for (let i = 0; i < headers.length; i++) {
    header_html += '<th scope="col">' + headers[i] + '</th>';
  }

// close off table header row
header_html += '</tr>'

// add header html to thead
$("#table_head").html(header_html);

for (let i = 0; i < response.length; i++) {
  // begin new row for each response
  body_html += '<tr><th scope="row">' + (i + 1) + '</th>';

  for (let j = 0; j < headers.length; j++) {
    // set current header variable
    let cur_head = headers[j];

    // if current header is foods, loop through likes/dislikes
    if (cur_head === 'foods') {
      // set likes and dislikes into variables
      let likes = response[i].foods.likes;
      let dislikes = response[i].foods.dislikes;

      // create beginning of column
      body_html += '<td>';

      // creating html for likes data
      for (let k = 0; k < likes.length; k++) {
        body_html += '<b class="good_food">Likes: </b>' + likes[k] + '<br>';
      }

      // creating html for dislikes data
      for (let k = 0; k < likes.length; k++) {
        body_html += '<b class="bad_food">Dislikes: </b>' + dislikes[k] + '<br>';
      }

    } else {
      // add table column with variables
      body_html += '<td>' + response[i][`${cur_head}`] + '</td>';
    }
  }

  //close off row for current animal
  body_html += '</tr>';
}

  //insert body html into body
  $("#table_body").html(body_html);

}


// retrieve data from animal json file
let url = 'https://learnwebcode.github.io/json-example/animals-1.json';

$.get(url, showAnimals);
