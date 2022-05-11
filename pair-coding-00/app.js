function like(id) {
  let cnt = parseInt(document.getElementsByClassName("like-num")[id].innerHTML);

  cnt += 1;
  document.getElementsByClassName("like-num")[id].innerHTML = cnt;
}
