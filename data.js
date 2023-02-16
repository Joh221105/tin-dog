const dogs = [
  {
    name: "Rex",
    avatar: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    age: 25,
    bio: "Art. Literature. Natural wine. Yoga.",
    hasBeenSwiped: false,
    hasBeenLiked: false,
  },
  {
    name: "Bella",
    avatar: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    age: 43,
    bio: "Yup, that's my owner. U can meet him if you want",
    hasBeenSwiped: false,
    hasBeenLiked: false,
  },
  {
    name: "Teddy",
    avatar: "images/profile-image.jpg",
    age: 30,
    bio: "How you doin?",
    hasBeenSwiped: false,
    hasBeenLiked: false,
  },
];


let index = 0

function swipedLike() {
  document.getElementById("like").classList.toggle("hidden");
  //hasBeenSwiped = true, hasBeenLiked = true  -- How to get the specific profile?
  setTimeout(() => getNextImage(index), 2000)
}

function swipedNope() {
  document.getElementById("nope").classList.toggle("hidden");
  setTimeout(() => getNextImage(index), 2000)
}

function filterRemainingProfiles (){
  return dogs.filter(item => !item.hasBeenSwiped)
}


function getNextImage(num) {
    document.getElementById('main-text').innerHTML = `
      <div>
          <img class = 'profile-pic' src = ${dogs[num].avatar} alt ='avatar'>
          <div class = "profile-info">
              <h2 class = 'name'> ${dogs[num].name}, ${dogs[num].age}</h2>
              <p class = 'description'> ${dogs[num].bio}</p>
          </div>`;
  document.getElementById("nope").classList.add("hidden")
  document.getElementById("like").classList.add("hidden")
  index ++
}

/* -------------------------------------------------------------------------------*/

document.getElementById("like-btn").addEventListener("click", swipedLike);

document.getElementById("nope-btn").addEventListener("click", swipedNope);

/* -------------------------------------------------------------------------------*/










// class Profile {
//   constructor(data) {
//     Object.assign(this, data);
//   }

// const test = new Profile(dogs);

// console.log(test);

/*

    Maybe make a class
*/
