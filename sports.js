const searchbtn = () => {
  const searchBox = document.getElementById("search-box");
  const searchValue = searchBox.value;
  const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
  //   console.log(searchValue);
};
