function makeFriendsList(friends) {
  let friendsLst = document.createElement('ul');
  if (friends) {
    friends.forEach((element) => {
      let li = document.createElement("li");
      li.innerHTML = `${element.firstName} ${element.lastName}`;
      friendsLst.appendChild(li);
    });
  }
  return friendsLst;
}
